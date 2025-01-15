import { PropsWithChildren } from "react";
import { useTrustPilotContext } from "../context/TrustpilotContext";

export function TrustBox({
  children,
  ...props
}: TrustBoxAttributesProps & PropsWithChildren) {
  const {
    widgetUrl,
    businessUnitId: businessunitId,
    isError,
    isPending,
  } = useTrustPilotContext();

  const data = transformToTrustBoxAttributes({ ...props, businessunitId });

  return (
    <div className="trustpilot-widget" {...data}>
      <a href={widgetUrl} target="_blank">
        {children}
      </a>
    </div>
  );
}
