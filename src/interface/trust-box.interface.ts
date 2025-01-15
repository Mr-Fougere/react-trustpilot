interface TrustBoxAttributesProps {
  styleHeight: string;
  styleWidth: string;
  businessunitId: string;
  templateId: string;
  theme: "dark" | "ligth";
  locale: string;
  scrollToList: boolean;
  stars: number[];
  noReview: "hide" | "show";
}

type TrustBoxAttributes = Record<Partial<TrustBoxtAttributeKey>, string>;

type KebabKeys<S extends string> = S extends `${infer T}${infer U}`
  ? T extends Capitalize<T>
    ? `-${Lowercase<T>}${KebabKeys<U>}`
    : `${Lowercase<T>}${KebabKeys<U>}`
  : S;

type TrustBoxtAttributeKey = `data-${KebabKeys<keyof TrustBoxAttributesProps>}`;
