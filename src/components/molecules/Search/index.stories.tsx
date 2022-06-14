import { ComponentStory, ComponentMeta } from "@storybook/react";
import SearchBar from ".";

export default {
  title: "components/molecules/search",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

export const TempSearchBar: ComponentStory<typeof SearchBar> = () => (
  <SearchBar></SearchBar>
);
