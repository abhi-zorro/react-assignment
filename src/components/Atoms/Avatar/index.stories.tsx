import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from ".";

export default {
  title: "components/atoms/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const LightBlueAvatar: ComponentStory<typeof Avatar> = () => (
  <Avatar sx={{ bgcolor: "lightblue" }}>{"A"}</Avatar>
);
export const SkyBlueAvatar: ComponentStory<typeof Avatar> = () => (
  <Avatar sx={{ bgcolor: "skyblue" }}>{"A"}</Avatar>
);
