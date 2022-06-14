import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from ".";

export default {
  title: "components/organisms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const BookList: ComponentStory<typeof Card> = () => (
  <Card
    cardId={1}
    key={1}
    url={"../../Images/books/2.png"}
    bookName={"Book 1"}
    authorName={"Dave"}
    timeRead={"10 minutes Read"}
    width={280}
  />
);
