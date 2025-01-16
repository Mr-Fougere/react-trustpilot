import { PropsWithChildren, useEffect, useState } from "react";
import { TrustPilotContext } from "./TrustpilotContext";
import { TRUSTPILOT_WIDGET_SCRIPT_URL } from "../interface/trust-box.const";

interface TrustPilotProviderProps extends PropsWithChildren {
  businessUnitId: string;
  widgetUrl: string;
}

export const TrustPilotProvider: React.FC<TrustPilotProviderProps> = ({
  businessUnitId,
  widgetUrl,
  children,
}) => {
  const [isPending, setPending] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const script = Object.assign(document.createElement("script"), {
      type: "text/javascript",
      src: TRUSTPILOT_WIDGET_SCRIPT_URL,
      async: true,
      onload: () => {
        setPending(false);
        setError(false);
      },
      onerror: () => {
        setPending(false);
        setError(true);
      },
    });

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <TrustPilotContext.Provider
      value={{ businessUnitId, widgetUrl, isPending, isError }}>
      {children}
    </TrustPilotContext.Provider>
  );
};
