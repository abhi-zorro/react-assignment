import React from "react";
import Footer from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/organisms/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const template: ComponentStory<typeof Footer> = (args: any) => (
  <Footer {...args} />
);
export const FooterComponent = template.bind({});
FooterComponent.args = {};
