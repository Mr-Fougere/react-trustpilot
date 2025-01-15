import { createContext, useContext } from "react";

interface TrustPilotContextProps {
  businessUnitId: string;
  readonly widgetUrl: string;
  isPending: boolean;
  isError: boolean;
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
