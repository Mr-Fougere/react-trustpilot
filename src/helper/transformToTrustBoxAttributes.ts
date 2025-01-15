const transformToTrustBoxAttributes = <
  T extends Partial<TrustBoxAttributesProps>
>(
  obj: T
): Partial<TrustBoxAttributes> => {
  const result = {} as TrustBoxAttributes;

  for (const key in obj) {
    const newKey = `data-${key
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()}` as TrustBoxtAttributeKey;
    result[newKey] = String(obj[key]);
  }

  return result;
};
