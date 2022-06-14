import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from ".";
import image from "./blinkListLogo.png";
import { BrowserRouter as Router } from "react-router-dom";

const HeaderComponent = {
  title: "Components/Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = (args: any) => {
  return (
    <Router>
      <Header {...args} exploreOption={false} />
    </Router>
  );
};
Template.args = {
  url: image,
};

export default HeaderComponent;
