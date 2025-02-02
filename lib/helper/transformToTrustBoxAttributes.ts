import {
  TrustBoxWidgetAttributeKey,
  TrustBoxWidgetAttributes,
  TrustBoxWidgetAttributesPropsT,
} from "../interface/trust-box.types";

export const transformToTrustBoxAttributes = <
  T extends TrustBoxWidgetAttributesPropsT
>(
  attributesProps: T
): Partial<TrustBoxWidgetAttributes> => {
  const trustBoxWidgetAttributes = {} as Partial<TrustBoxWidgetAttributes>;

  Object.entries(attributesProps).forEach(([attributeKey, attributeValue]) => {
    const trustBoxAttributeKey = `data-${attributeKey
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()}` as TrustBoxWidgetAttributeKey;
    trustBoxWidgetAttributes[trustBoxAttributeKey] = String(attributeValue);
  });

  return trustBoxWidgetAttributes;
};
