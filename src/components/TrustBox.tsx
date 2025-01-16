import { PropsWithChildren, useEffect, useRef } from "react";
import { useTrustPilotContext } from "../context/TrustpilotContext";
import { TrustBoxAttributesProps } from "../interface/trust-box.interface";
import { transformToTrustBoxAttributes } from "../helper/transformToTrustBoxAttributes";

export const TrustBox = ({
  children,
  ...props
}: PropsWithChildren & TrustBoxAttributesProps) => {
  const widgetRef = useRef(null);
  const {
    widgetUrl,
    businessUnitId: businessunitId,
    loadTrustpilotWidget,
    isError,
    isPending,
  } = useTrustPilotContext();

  useEffect(() => {
    if (!isPending && !isError) {
      loadTrustpilotWidget(widgetRef);
    }
  }, [isPending]);

  const isDisplayed = businessunitId && widgetUrl && !isError;

  if (isDisplayed) return null;

  const data = transformToTrustBoxAttributes({
    ...props,
    businessunitId,
  });

  return (
    <div className="trustpilot-widget" ref={widgetRef} {...data}>
      <a href={widgetUrl} target="_blank">
        {children}
      </a>
    </div>
  );
};
