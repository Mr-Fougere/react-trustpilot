import { PropsWithChildren, useEffect, useMemo, useRef } from "react";
import { useTrustpilotContext } from "../context/TrustpilotContext";
import { TrustBoxWidgetAttributesPropsT } from "../interface/trust-box.types";

import { transformToTrustBoxAttributes } from "../helper/transformToTrustBoxAttributes";
import { ScriptInjectionStatus } from "../interface/trust-box.enums";

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
  } = useTrustpilotContext();

  useEffect(() => {
    if (status === ScriptInjectionStatus.Ready) {
      loadTrustpilotWidget(widgetRef);
    }
  }, [widgetRef, status, loadTrustpilotWidget]);

  const isDisplayed =
    businessunitId &&
    widgetUrl &&
    (status === ScriptInjectionStatus.Ready ||
      status === ScriptInjectionStatus.Unknown);

  props.locale ||= locale;

  const data = useMemo(
    () =>
      transformToTrustBoxAttributes({
        ...props,
        businessunitId,
      }),
    [props, businessunitId]
  );

  if (!isDisplayed) return null;

  return (
    <div
      className="trustpilot-widget"
      style={{ maxWidth: "max-content", maxHeight: "max-content" }}
      ref={widgetRef}
      {...data}>
      <a href={widgetUrl} target="_blank">
        {children}
      </a>
    </div>
  );
};
