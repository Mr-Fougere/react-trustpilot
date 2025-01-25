import { PropsWithChildren, useEffect, useMemo, useRef } from "react";
import { useTrustPilotContext } from "../context/TrustpilotContext";
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
  } = useTrustPilotContext();

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

  const data = useMemo(
    () =>
      transformToTrustBoxAttributes({
        ...props,
        locale,
        businessunitId,
      }),
    [props, businessunitId, locale]
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
