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
    locale,
    loadTrustpilotWidget,
  } = useTrustPilotContext();

  useEffect(() => {
    if (status === ScriptInjectionStatus.Ready) {
      loadTrustpilotWidget(widgetRef);
    }
  }, [widgetRef, status, loadTrustpilotWidget]); // Added 'loadTrustpilotWidget' to the dependency array.

  const isDisplayed =
    businessunitId && widgetUrl && status === ScriptInjectionStatus.Ready;

  const data = useMemo(
    () =>
      transformToTrustBoxAttributes({
        ...props,
        locale,
        businessunitId,
      }),
    [props, businessunitId, locale] // Added 'locale' to the dependency array.
  );

  if (!isDisplayed) return null;

  return (
    <div className="trustpilot-widget" ref={widgetRef} {...data}>
      <a href={widgetUrl} target="_blank">
        {children}
      </a>
    </div>
  );
};
