import { createContext, RefObject, useContext } from "react";

interface TrustPilotContextProps {
  businessUnitId: string;
  widgetUrl: string;
  isPending: boolean;
  isError: boolean;
  loadTrustpilotWidget: (ref: RefObject<HTMLElement>) => void | undefined;
}

export const TrustPilotContext = createContext<
  TrustPilotContextProps | undefined
>(undefined);

export const useTrustPilotContext = (): TrustPilotContextProps => {
  const context = useContext(TrustPilotContext);
  if (!context) {
    throw new Error("useTrustPilot must be used within a TrustPilotProvider");
  }
  return context;
};
