import { Meta, StoryFn } from "@storybook/react";
import { TrustBoxWidgetAttributesPropsT } from "../interface/trust-box.interface";
import { TrustBoxWidget } from "../components/TrustBoxWidget";
import { TrustPilotProvider } from "../context/TrustpilotProvider";

export default {
  title: "TrustPilot/Testimonial",
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

export const Carousel: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.Carousel {...args} />;
};
Carousel.args = {};

export const DropDown: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.DropDown {...args} />;
};
DropDown.args = {};

export const Grid: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.Grid {...args} />;
};
Grid.args = {};

export const List: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.List {...args} />;
};
List.args = {};

export const ListFiltered: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.ListFiltered {...args} />;
};
ListFiltered.args = {};

export const MiniCarousel: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.MiniCarousel {...args} />;
};
MiniCarousel.args = {};

export const PopUp: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.PopUp {...args} />;
};
PopUp.args = {};

export const Quote: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.Quote {...args} />;
};
Quote.args = {};

export const Slider: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.Slider {...args} />;
};
Slider.args = {};
