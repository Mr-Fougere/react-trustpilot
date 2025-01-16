import { PropsWithChildren } from "react";
import { useTrustPilotContext } from "../context/TrustpilotContext";
import { TrustBoxAttributesProps } from "../interface/trust-box.interface";
import { transformToTrustBoxAttributes } from "../helper/transformToTrustBoxAttributes";

export function TrustBox({
  children,
  ...props
}: TrustBoxAttributesProps & PropsWithChildren) {
  const { widgetUrl, businessUnitId: businessunitId } = useTrustPilotContext();

  const data = transformToTrustBoxAttributes({ ...props, businessunitId });

  return (
    <div className="trustpilot-widget" {...data}>
      <a href={widgetUrl} target="_blank">
        {children}
      </a>
    </div>
  );
}
