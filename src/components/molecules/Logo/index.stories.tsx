import Logo from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import image from "./blinkListLogo.png";

const LogoComponent = {
  title: "components/molecules/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const LogoComp: ComponentStory<typeof Logo> = (args: any) => (
  <Logo {...args} />
);

LogoComp.args = {
  height: 30,
  url: image,
};

export default LogoComponent;
