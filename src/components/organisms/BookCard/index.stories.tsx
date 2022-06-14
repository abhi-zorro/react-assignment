import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from ".";

export default {
  title: "components/organisms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const books = [];

for (let i: number = 1; i < 5; i++) {
  const book = {
    id: i,
    state: "reading",
    bookName: "book " + i,
    authorName: "author " + i,
    timeRead: `${i} minute read`,
  };
  books.push(book);
}

export const BookList: ComponentStory<typeof Card> = () => (
  <Card
    cardId={1}
    key={1}
    // imgHeight={240}
    url={"../../Images/books/2.png"}
    bookName={"Book 1"}
    authorName={"Dave"}
    timeRead={"10 minutes Read"}
    width={280}
  />
);
