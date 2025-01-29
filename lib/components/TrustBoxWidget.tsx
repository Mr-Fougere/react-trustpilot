import { CollectReviewTrustBoxWidgets } from "./CollectReviewTrustBoxWidget";
import { EssentialTrustBoxWidgets } from "./EssentialTrustBoxWidget";
import { ProductReviewTrustBoxWidgets } from "./ProductReviewTrustBoxWidget";
import { TestimonialTrustBoxWidget } from "./TestimonialTrustBoxWidget";

/**
 * @params {JSXElement} children - Be used until the widget is loaded ( by default nothing )
 */
export const TrustBoxWidget = {
  ...EssentialTrustBoxWidgets,
  ...CollectReviewTrustBoxWidgets,
  ...TestimonialTrustBoxWidget,
  ...ProductReviewTrustBoxWidgets,
};
