import { PropsWithChildren } from "react";
import { useTrustPilotContext } from "../context/TrustpilotContext";
import { TrustBoxAttributesProps } from "../interface/trust-box.interface";
import { transformToTrustBoxAttributes } from "../helper/transformToTrustBoxAttributes";

export const TrustBox = ({
  children,
  ...props
}: PropsWithChildren & TrustBoxAttributesProps) => {
  const { widgetUrl, businessUnitId: businessunitId } = useTrustPilotContext();

  const data = transformToTrustBoxAttributes({ ...props, businessunitId });

  return (
    <div className="trustpilot-widget" {...data}>
      <a href={widgetUrl} target="_blank">
        {children}
      </a>
    </div>
  );
};
