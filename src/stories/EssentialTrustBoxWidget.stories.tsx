import { Meta, StoryFn } from "@storybook/react";
import { TrustBoxWidgetAttributesPropsT } from "../interface/trust-box.interface";
import { TrustBoxWidget } from "../components/TrustBoxWidget";
import { TrustPilotProvider } from "../context/TrustpilotProvider";

export default {
  title: "TrustPilot/Essentials",
  decorators: [
    (Story) => (
      <TrustPilotProvider
        businessUnitId={process.env.BUSINESS_UNIT_ID}
        widgetUrl={process.env.WIDGET_URL}>
        <Story />
      </TrustPilotProvider>
    ),
  ],
} as Meta;

export const HorizontalWidget: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.Horizontal {...args} />;
};
HorizontalWidget.args = {};

export const MicroButtonWidget: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.MicroButon {...args} />;
};
MicroButtonWidget.args = {};

export const MicroComboWidget: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.MicroCombo {...args} />;
};
MicroComboWidget.args = {};

export const MicroReviewCountWidget: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.MicroReviewCount {...args} />;
};
MicroReviewCountWidget.args = {
  minReviewCount: 0,
  styleAlignment: "center",
};

export const MicroStarWidget: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.MicroStar {...args} />;
};
MicroStarWidget.args = {};

export const MiniWidget: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.Mini {...args} />;
};
MiniWidget.args = {};

export const StarterWidget: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.Starter {...args} />;
};
StarterWidget.args = {};
