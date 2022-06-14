import NavIcon from ".";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/molecules/NavItems",
  component: NavIcon,
} as ComponentMeta<typeof NavIcon>;

export const BlueNav: ComponentStory<typeof NavIcon> = () => (
  <NavIcon
    leftIcon={<NotificationsRoundedIcon />}
    label={"Enterpreneurship"}
  ></NavIcon>
);
