import Image from ".";
import img from "../../../assets/2.png";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const ImageComponent = {
  title: "components/atoms/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

export const ImageTemplate: ComponentStory<typeof Image> = (args: any) => (
  <Image {...args} />
);

ImageTemplate.args = {
  height: 300,
  width: 280,
  src: img,
  alt: "image-description",
  sx: { border: "1px solid grey" },
};

export default ImageComponent;
