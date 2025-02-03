import { Meta, StoryFn } from "@storybook/react";
import { TrustBoxWidget } from "../components/TrustBoxWidget";
import {
  TrustBoxWidgeMiniProductReviewsAttributesProps,
  TrustBoxWidgeProductReviewsAttributesProps,
  TrustBoxWidgeProductReviewsCarouselAttributesProps,
  TrustBoxWidgeProductReviewsGalleryAttributesProps,
  TrustBoxWidgeProductReviewsMultiSourceAttributesProps,
  TrustBoxWidgeProductReviewsMultiSourceSEOAttributesProps,
  TrustBoxWidgeProductReviewsSEOAttributesProps,
} from "../interface/trust-box.types";
import React from "react";
import { TrustpilotWidgetProvider } from "../context/TrustpilotWidgetProvider";

export default {
  title: "Trustpilot/ProductReview",
  decorators: [
    (Story) => (
      <TrustpilotWidgetProvider>
        <Story />
      </TrustpilotWidgetProvider>
    ),
  ],
} as Meta;

export const ProductMini: StoryFn<
  TrustBoxWidgeMiniProductReviewsAttributesProps
> = (args: TrustBoxWidgeMiniProductReviewsAttributesProps) => {
  return <TrustBoxWidget.ProductMini {...args} />;
};
ProductMini.args = {
  sku: "PREVIEW",
};

export const ProductMiniMultiSource: StoryFn<
  TrustBoxWidgeMiniProductReviewsAttributesProps
> = (args: TrustBoxWidgeMiniProductReviewsAttributesProps) => {
  return <TrustBoxWidget.ProductMiniMultiSource {...args} />;
};
ProductMiniMultiSource.args = {
  sku: "PREVIEW",
};

export const ProductReviews: StoryFn<
  TrustBoxWidgeProductReviewsAttributesProps
> = (args: TrustBoxWidgeProductReviewsAttributesProps) => {
  return <TrustBoxWidget.ProductReviews {...args} />;
};
ProductReviews.args = {
  sku: "PREVIEW",
};

export const ProductReviewsCarousel: StoryFn<
  TrustBoxWidgeProductReviewsCarouselAttributesProps
> = (args: TrustBoxWidgeProductReviewsCarouselAttributesProps) => {
  return <TrustBoxWidget.ProductReviewsCarousel {...args} />;
};
ProductReviewsCarousel.args = {
  sku: "PREVIEW",
};

export const ProductReviewsGallery: StoryFn<
  TrustBoxWidgeProductReviewsGalleryAttributesProps
> = (args: TrustBoxWidgeProductReviewsGalleryAttributesProps) => {
  return <TrustBoxWidget.ProductReviewsGallery {...args} />;
};
ProductReviewsGallery.args = {
  sku: "PREVIEW",
};

export const ProductReviewsMultiSource: StoryFn<
  TrustBoxWidgeProductReviewsMultiSourceAttributesProps
> = (args: TrustBoxWidgeProductReviewsMultiSourceAttributesProps) => {
  return <TrustBoxWidget.ProductReviewsMultiSource {...args} />;
};
ProductReviewsMultiSource.args = {
  sku: "PREVIEW",
};

export const ProductReviewsMultiSourceSEO: StoryFn<
  TrustBoxWidgeProductReviewsMultiSourceSEOAttributesProps
> = (args: TrustBoxWidgeProductReviewsMultiSourceSEOAttributesProps) => {
  return <TrustBoxWidget.ProductReviewsMultiSourceSEO {...args} />;
};
ProductReviewsMultiSourceSEO.args = {
  sku: "PREVIEW",
};

export const ProductReviewSEO: StoryFn<
  TrustBoxWidgeProductReviewsSEOAttributesProps
> = (args: TrustBoxWidgeProductReviewsSEOAttributesProps) => {
  return <TrustBoxWidget.ProductReviewSEO {...args} />;
};
ProductReviewSEO.args = {
  sku: "PREVIEW",
};
