import { Meta, StoryFn } from "@storybook/react";
import { TrustBoxWidget } from "../components/TrustBoxWidget";
import { TrustpilotWidgetProvider } from "../context/TrustpilotWidgetProvider";
import React from "react";
import {
  TrustBoxWidgetBasicAttributesProps,
  TrustBoxWidgetMicroButtonAttributesProps,
  TrustBoxWidgetMicroReviewCountAttributesProps,
} from "../interface/trust-box.types";

export default {
  title: "Trustpilot/Essentials",
  decorators: [
    (Story) => (
      <TrustpilotWidgetProvider>
        <Story />
      </TrustpilotWidgetProvider>
    ),
  ],
} as Meta;

export const HorizontalWidget: StoryFn<TrustBoxWidgetBasicAttributesProps> = (
  args: TrustBoxWidgetBasicAttributesProps
) => {
  return <TrustBoxWidget.Horizontal {...args} />;
};
HorizontalWidget.args = {};

export const MicroButtonWidget: StoryFn<
  TrustBoxWidgetMicroButtonAttributesProps
> = (args: TrustBoxWidgetMicroButtonAttributesProps) => {
  return <TrustBoxWidget.MicroButton {...args} />;
};
MicroButtonWidget.args = {};

export const MicroComboWidget: StoryFn<TrustBoxWidgetBasicAttributesProps> = (
  args: TrustBoxWidgetBasicAttributesProps
) => {
  return <TrustBoxWidget.MicroCombo {...args} />;
};
MicroComboWidget.args = {};

export const MicroReviewCountWidget: StoryFn<
  TrustBoxWidgetMicroReviewCountAttributesProps
> = (args: TrustBoxWidgetMicroReviewCountAttributesProps) => {
  return <TrustBoxWidget.MicroReviewCount {...args} />;
};
MicroReviewCountWidget.args = {
  minReviewCount: 0,
  styleAlignment: "center",
};

export const MicroStarWidget: StoryFn<TrustBoxWidgetBasicAttributesProps> = (
  args: TrustBoxWidgetBasicAttributesProps
) => {
  return <TrustBoxWidget.MicroStar {...args} />;
};
MicroStarWidget.args = {};

export const MicroTrustScoreWidget: StoryFn<
  TrustBoxWidgetBasicAttributesProps
> = (args: TrustBoxWidgetBasicAttributesProps) => {
  return <TrustBoxWidget.MicroTrustScore {...args} />;
};
MicroTrustScoreWidget.args = {};

export const MiniWidget: StoryFn<TrustBoxWidgetBasicAttributesProps> = (
  args: TrustBoxWidgetBasicAttributesProps
) => {
  return <TrustBoxWidget.Mini {...args} />;
};
MiniWidget.args = {};

export const StarterWidget: StoryFn<TrustBoxWidgetBasicAttributesProps> = (
  args: TrustBoxWidgetBasicAttributesProps
) => {
  return <TrustBoxWidget.Starter {...args} />;
};
StarterWidget.args = {};
