import { FC, PropsWithChildren, RefObject } from "react";
import { TrustPilotContext } from "./TrustpilotContext";
import { TRUSTPILOT_WIDGET_SCRIPT_URL } from "../interface/trust-box.const";
import { TrustpilotWidgetError } from "../errors/TrustpilotWidgetError";
import { ScriptInjectionStatus } from "../interface/trust-box.interface";
import { useScript } from "@uidotdev/usehooks";

interface TrustPilotProviderProps extends PropsWithChildren {
  businessUnitId: string;
  widgetUrl: string;
}

export const TrustPilotProvider: FC<TrustPilotProviderProps> = ({
  businessUnitId,
  widgetUrl,
  children,
}) => {
  const status = useScript(
    TRUSTPILOT_WIDGET_SCRIPT_URL
  ) as ScriptInjectionStatus;

  const locale = navigator.languages[0];

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
