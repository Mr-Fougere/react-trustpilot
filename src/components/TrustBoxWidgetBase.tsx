import { PropsWithChildren, useEffect, useMemo, useRef } from "react";
import { useTrustPilotContext } from "../context/TrustpilotContext";
import { TrustBoxWidgetAttributesProps } from "../interface/trust-box.interface";
import { transformToTrustBoxAttributes } from "../helper/transformToTrustBoxAttributes";

export const TrustBoxWidgetBase = ({
  children,
  ...props
}: PropsWithChildren & TrustBoxWidgetAttributesProps) => {
  const widgetRef = useRef(null);
  const {
    widgetUrl,
    businessUnitId: businessunitId,
    isPending,
    loadTrustpilotWidget,
    isError,
  } = useTrustPilotContext();

  useEffect(() => {
    if (!isError && !isPending) {
      loadTrustpilotWidget(widgetRef);
    }
  }, [widgetRef, isPending]);

  const isDisplayed = businessunitId && widgetUrl && !isError;

  if (isDisplayed) return null;

  const data = useMemo(
    () =>
      transformToTrustBoxAttributes({
        ...props,
        businessunitId,
      }),
    [props, businessunitId]
  );

  return (
    <div className="trustpilot-widget" ref={widgetRef} {...data}>
      <a href={widgetUrl} target="_blank">
        {children}
      </a>
    </div>
  );
};
