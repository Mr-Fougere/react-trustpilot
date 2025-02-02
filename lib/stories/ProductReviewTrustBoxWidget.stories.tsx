import { Meta, StoryFn } from "@storybook/react";
import { TrustBoxWidget } from "../components/TrustBoxWidget";
import { TrustpilotProvider } from "../context/TrustpilotProvider";
import {
  TrustBoxWidgeProductReviewsMultiSourceAttributesProps,
  TrustBoxWidgeProductReviewsSEOAttributesProps,
  TrustBoxWidgetBasicProductAttributesProps,
} from "../interface/trust-box.types";
import React from "react";

export default {
  title: "Trustpilot/ProductReview",
  decorators: [
    (Story) => (
      <TrustpilotProvider>
        <Story />
      </TrustpilotProvider>
    ),
  ],
} as Meta;

export const ProductMini: StoryFn<TrustBoxWidgetBasicProductAttributesProps> = (
  args: TrustBoxWidgetBasicProductAttributesProps
) => {
  return <TrustBoxWidget.ProductMini {...args} />;
};
ProductMini.args = {
  sku: "PREVIEW",
};

export const ProductMiniMultiSource: StoryFn<
  TrustBoxWidgetBasicProductAttributesProps
> = (args: TrustBoxWidgetBasicProductAttributesProps) => {
  return <TrustBoxWidget.ProductMiniMultiSource {...args} />;
};
ProductMiniMultiSource.args = {
  sku: "PREVIEW",
};

export const ProductReviews: StoryFn<
  TrustBoxWidgetBasicProductAttributesProps
> = (args: TrustBoxWidgetBasicProductAttributesProps) => {
  return <TrustBoxWidget.ProductReviews {...args} />;
};
ProductReviews.args = {
  sku: "PREVIEW",
};

export const ProductReviewsCarousel: StoryFn<
  TrustBoxWidgetBasicProductAttributesProps
> = (args: TrustBoxWidgetBasicProductAttributesProps) => {
  return <TrustBoxWidget.ProductReviewsCarousel {...args} />;
};
ProductReviewsCarousel.args = {
  sku: "PREVIEW",
};

export const ProductReviewsGallery: StoryFn<
  TrustBoxWidgetBasicProductAttributesProps
> = (args: TrustBoxWidgetBasicProductAttributesProps) => {
  return <TrustBoxWidget.ProductReviewsGallery {...args} />;
};
ProductReviewsGallery.args = {
  sku: "PREVIEW",
};

export const ProductReviewsMultiSource: StoryFn<
  TrustBoxWidgetBasicProductAttributesProps
> = (args: TrustBoxWidgeProductReviewsMultiSourceAttributesProps) => {
  return <TrustBoxWidget.ProductReviewsMultiSource {...args} />;
};
ProductReviewsMultiSource.args = {
  sku: "PREVIEW",
};

export const ProductReviewsMultiSourceSEO: StoryFn<
  TrustBoxWidgetBasicProductAttributesProps
> = (args: TrustBoxWidgeProductReviewsSEOAttributesProps) => {
  return <TrustBoxWidget.ProductReviewsMultiSourceSEO {...args} />;
};
ProductReviewsMultiSourceSEO.args = {
  sku: "PREVIEW",
};

export const ProductReviewSEO: StoryFn<
  TrustBoxWidgetBasicProductAttributesProps
> = (args: TrustBoxWidgeProductReviewsSEOAttributesProps) => {
  return <TrustBoxWidget.ProductReviewSEO {...args} />;
};
ProductReviewSEO.args = {
  sku: "PREVIEW",
};
