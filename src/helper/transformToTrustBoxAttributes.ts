import {
  TrustBoxWidgetAttributeKey,
  TrustBoxWidgetAttributes,
  TrustBoxWidgetAttributesProps,
} from "../interface/trust-box.interface";

export const transformToTrustBoxAttributes = <
  T extends Partial<TrustBoxWidgetAttributesProps>
>(
  obj: T
): Partial<TrustBoxWidgetAttributes> => {
  const result = {} as Partial<TrustBoxWidgetAttributes>;

  for (const key in obj) {
    const newKey = `data-${key
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()}` as TrustBoxWidgetAttributeKey;
    result[newKey] = String(obj[key]);
  }

  return result;
};
