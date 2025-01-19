import { PropsWithChildren, useEffect, useMemo, useRef } from "react";
import { useTrustPilotContext } from "../context/TrustpilotContext";
import {
  TrustBoxWidgetAttributesPropsT,
  ScriptInjectionStatus,
} from "../interface/trust-box.interface";
import { transformToTrustBoxAttributes } from "../helper/transformToTrustBoxAttributes";

export const TrustBoxWidgetBase = ({
  children,
  ...props
}: PropsWithChildren & TrustBoxWidgetAttributesPropsT) => {
  const widgetRef = useRef(null);
  const {
    widgetUrl,
    businessUnitId: businessunitId,
    status,
    loadTrustpilotWidget,
  } = useTrustPilotContext();

  useEffect(() => {
    if (status == ScriptInjectionStatus.Ready) {
      loadTrustpilotWidget(widgetRef);
    }
  }, [widgetRef, status]);

  const isDisplayed =
    businessunitId && widgetUrl && status === ScriptInjectionStatus.Ready;

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
