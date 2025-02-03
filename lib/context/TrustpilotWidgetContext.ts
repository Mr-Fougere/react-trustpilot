import { createContext, RefObject, useContext } from "react";
import { ScriptInjectionStatus } from "../interface/trust-box.enums";
import { TrustpilotContextError } from "../errors/TrustpilotContextError";
import { LocaleProps } from "../interface/trust-box.types";

interface TrustpilotWidgetContextProps {
  businessUnitId: string;
  widgetUrl: string;
  status: ScriptInjectionStatus;
  locale: LocaleProps;
  loadTrustpilotWidget: (ref: RefObject<HTMLElement>) => void | undefined;
}

export const TrustpilotWidgetContext = createContext<
  TrustpilotWidgetContextProps | undefined
>(undefined);

export const useTrustpilotWidgetContext = (): TrustpilotWidgetContextProps => {
  const context = useContext(TrustpilotWidgetContext);
  if (!context) {
    throw new TrustpilotContextError(
      "useTrustpilot must be used within a TrustpilotProvider"
    );
  }
  return context;
};
