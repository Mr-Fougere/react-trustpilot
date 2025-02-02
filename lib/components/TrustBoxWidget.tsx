import { CollectReviewTrustBoxWidgets } from "./CollectReviewTrustBoxWidget";
import { EssentialTrustBoxWidgets } from "./EssentialTrustBoxWidget";
import { ProductReviewTrustBoxWidgets } from "./ProductReviewTrustBoxWidget";
import { TestimonialTrustBoxWidget } from "./TestimonialTrustBoxWidget";

type TrustBoxWidgetT = typeof EssentialTrustBoxWidgets &
  typeof CollectReviewTrustBoxWidgets &
  typeof TestimonialTrustBoxWidget &
  typeof ProductReviewTrustBoxWidgets;

export const TrustBoxWidget: TrustBoxWidgetT = {
  ...EssentialTrustBoxWidgets,
  ...CollectReviewTrustBoxWidgets,
  ...TestimonialTrustBoxWidget,
  ...ProductReviewTrustBoxWidgets,
};
