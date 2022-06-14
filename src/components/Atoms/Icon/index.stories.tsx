import { ComponentStory, ComponentMeta } from "@storybook/react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";

import Icon from "./index";
import { MoreHoriz } from "@mui/icons-material";
const IconComponent = {
  title: "components/atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const TimerIcon: ComponentStory<typeof Icon> = () => (
  <Icon icon={<AccessAlarmIcon color="primary" />}></Icon>
);
export const DropUpIcon: ComponentStory<typeof Icon> = () => (
  <Icon icon={<KeyboardArrowUpIcon />}></Icon>
);
export const DropDownIcon: ComponentStory<typeof Icon> = () => (
  <Icon icon={<ExpandMoreIcon />}></Icon>
);
export const SearcIcon: ComponentStory<typeof Icon> = () => (
  <Icon icon={<SearchIcon />}></Icon>
);
export const AddIcons: ComponentStory<typeof Icon> = () => (
  <Icon icon={<AddIcon />}></Icon>
);
export const MoreIcon: ComponentStory<typeof Icon> = () => (
  <Icon icon={<MoreHoriz />}></Icon>
);

export default IconComponent;
