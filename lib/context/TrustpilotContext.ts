import { createContext, RefObject, useContext } from "react";
import { ScriptInjectionStatus } from "../interface/trust-box.enums";
import { TrustpilotContextError } from "../errors/TrustpilotContextError";
import { LocaleProps } from "../interface/trust-box.types";

interface TrustpilotContextProps {
  businessUnitId: string;
  widgetUrl: string;
  status: ScriptInjectionStatus;
  locale: LocaleProps;
  loadTrustpilotWidget: (ref: RefObject<HTMLElement>) => void | undefined;
}

export const TrustpilotContext = createContext<
  TrustpilotContextProps | undefined
>(undefined);

export const useTrustpilotContext = (): TrustpilotContextProps => {
  const context = useContext(TrustpilotContext);
  if (!context) {
    throw new TrustpilotContextError(
      "useTrustpilot must be used within a TrustpilotProvider"
    );
  }
  return context;
};
