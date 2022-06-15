import Tabs from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { lightGreen } from "@mui/material/colors";
const TabsComponent = {
  title: "components/Molecules/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const tabStateHandler = {};
export const Template: ComponentStory<typeof Tabs> = (args: any) => (
  <Tabs {...args} statusHandler={tabStateHandler} />
);

const tabData = [
  {
    value: "category",
    label: "Explore by category",
  },
  {
    value: "recent",
    label: "recently added",
  },
  {
    value: "popular",
    label: "See popular titles",
  },
];

Template.args = {
  color: lightGreen,

  tabData: tabData,
};

export default TabsComponent;
