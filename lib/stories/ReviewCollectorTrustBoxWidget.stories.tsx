import { Meta, StoryFn } from "@storybook/react";
import { TrustBoxWidget } from "../components/TrustBoxWidget";
import React from "react";
import { TrustBoxWidgetReviewCollectorAttributesProps } from "../interface/trust-box.types";
import { TrustpilotWidgetProvider } from "../context/TrustpilotWidgetProvider";

export default {
  title: "Trustpilot/ReviewCollector",
  decorators: [
    (Story) => (
      <TrustpilotWidgetProvider>
        <Story />
      </TrustpilotWidgetProvider>
    ),
  ],
} as Meta;

export const ReviewCollector: StoryFn<
  TrustBoxWidgetReviewCollectorAttributesProps
> = (args: TrustBoxWidgetReviewCollectorAttributesProps) => {
  return <TrustBoxWidget.ReviewCollector {...args} />;
};
ReviewCollector.args = {};
