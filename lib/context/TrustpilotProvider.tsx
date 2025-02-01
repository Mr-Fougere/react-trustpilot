import { TrustPilotContext } from "./TrustpilotContext";
import { TRUSTPILOT_WIDGET_SCRIPT_URL } from "../interface/trust-box.const";
import { TrustpilotWidgetError } from "../errors/TrustpilotWidgetError";
import { ScriptInjectionStatus } from "../interface/trust-box.enums";
import { usePreferredLanguage, useScript } from "@uidotdev/usehooks";
import { LocaleProps } from "../interface/trust-box.types";
import { FC, PropsWithChildren, RefObject } from "react";

interface TrustPilotProviderProps extends PropsWithChildren {
  businessUnitId?: string;
  webSiteUrl: string;
  defaultLocale?: LocaleProps;
}

export const TrustPilotProvider: FC<TrustPilotProviderProps> = ({
  businessUnitId = "PREVIEW_ID",
  children,
  defaultLocale = "en-US",
  webSiteUrl,
}) => {
  const status = useScript(
    TRUSTPILOT_WIDGET_SCRIPT_URL
  ) as ScriptInjectionStatus;

  if (businessUnitId === "PREVIEW_ID") {
    console.warn(
      "You actually in preview mode of trustpilot, please provide the businessUnitId to the trustpilot provider to fetch your own reveiws"
    );
  }

  const locale = (usePreferredLanguage() || defaultLocale) as LocaleProps;
  const localeDomain = locale.split("-")[0];

  const widgetUrl = `https://${localeDomain}.trustpilot.com/review/${webSiteUrl}`;

  const loadTrustpilotWidget = (ref: RefObject<HTMLElement>) => {
    switch (status) {
      case ScriptInjectionStatus.Loading:
        throw new TrustpilotWidgetError(
          "TrustpilotWidget not loaded cause Trustpilot script not yet load"
        );
      case ScriptInjectionStatus.Error:
        throw new TrustpilotWidgetError(
          "TrustpilotWidget not loaded cause Trustpilot script failed to load"
        );
      default:
        if (window.Trustpilot && ref.current) {
          window.Trustpilot.loadFromElement(ref.current, true);
        }
        break;
    }
  };

  return (
    <TrustPilotContext.Provider
      value={{
        businessUnitId,
        widgetUrl,
        status,
        loadTrustpilotWidget,
        locale,
      }}>
      {children}
    </TrustPilotContext.Provider>
  );
};
