import WordItem from "@/components/searchModal/WordItem";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WordListBox } from "../components/searchModal/WordList";

export default {
  title: "Components/WordItem",
  component: WordItem,
} as ComponentMeta<typeof WordItem>;

const Template: ComponentStory<typeof WordItem> = (args) => (
  <WordListBox>
    <WordItem {...args} />
    <WordItem {...args} />
    <WordItem {...args} />
    <WordItem {...args} />
    <WordItem {...args} />
    <WordItem {...args} />
    <WordItem {...args} />
    <WordItem {...args} />
  </WordListBox>
);

export const Item = Template.bind({});

Item.args = {
  id: 1,
  title: "맨투맨",
  tag: "NEW",
};
