import { CollectReviewTrustBoxWidgets } from "./CollectReviewTrustBoxWidget";
import { EssentialTrustBoxWidgets } from "./EssentialTrustBoxWidget";
import { ProductReviewTrustBoxWidgets } from "./ProductReviewTrustBoxWidget";
import { TestimonialTrustBoxWidget } from "./TestimonialTrustBoxWidget";

export const TrustBoxWidget = {
  ...EssentialTrustBoxWidgets,
  ...CollectReviewTrustBoxWidgets,
  ...TestimonialTrustBoxWidget,
  ...ProductReviewTrustBoxWidgets,
};
