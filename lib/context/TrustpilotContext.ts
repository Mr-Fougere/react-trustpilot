import { createContext, RefObject, useContext } from "react";
import { ScriptInjectionStatus } from "../interface/trust-box.enums";
import { TrustpilotContextError } from "../errors/TrustpilotContextError";
import { LocaleProps } from "../interface/trust-box.types";

interface TrustPilotContextProps {
  businessUnitId: string;
  widgetUrl: string;
  status: ScriptInjectionStatus;
  locale?: LocaleProps | NonNullable<string>;
  loadTrustpilotWidget: (ref: RefObject<HTMLElement>) => void | undefined;
}

export const TrustPilotContext = createContext<
  TrustPilotContextProps | undefined
>(undefined);

export const useTrustPilotContext = (): TrustPilotContextProps => {
  const context = useContext(TrustPilotContext);
  if (!context) {
    throw new TrustpilotContextError(
      "useTrustPilot must be used within a TrustPilotProvider"
    );
  }
  return context;
};
