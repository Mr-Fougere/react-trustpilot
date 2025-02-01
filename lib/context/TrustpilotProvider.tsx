import { TrustPilotContext } from "./TrustpilotContext";
import { TRUSTPILOT_WIDGET_SCRIPT_URL } from "../interface/trust-box.const";
import { TrustpilotWidgetError } from "../errors/TrustpilotWidgetError";
import { ScriptInjectionStatus } from "../interface/trust-box.enums";
import { usePreferredLanguage, useScript } from "@uidotdev/usehooks";
import { LocaleProps } from "../interface/trust-box.types";
import { FC, PropsWithChildren, RefObject } from "react";

interface TrustPilotProviderProps extends PropsWithChildren {
  businessUnitId?: string;
  websiteUrl?: string;
  locale?: LocaleProps;
}

export const TrustPilotProvider: FC<TrustPilotProviderProps> = ({
  businessUnitId = "PREVIEW_BUID",
  children,
  locale,
  websiteUrl = "",
}) => {
  if (businessUnitId === "PREVIEW_BUID" || !websiteUrl) {
    console.warn(
      "You are actually in preview mode of trustpilot widget, please provide the BUID and website URL to the trustpilot provider to fetch your own reviews.",
      "Take a look at the documentation README for more information about how to get credentials for the provider."
    );
  }

  const status = useScript(
    TRUSTPILOT_WIDGET_SCRIPT_URL
  ) as ScriptInjectionStatus;

  const preferredLanguage = usePreferredLanguage() as LocaleProps;
  const localeDomain = (locale ?? preferredLanguage).split("-")[0];

  const widgetUrl = `https://${localeDomain}.trustpilot.com/review/${websiteUrl}`;

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
