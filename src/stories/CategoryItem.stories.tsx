import CategoryList from "@/components/rankCarousel/CategoryList";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "CategoryList",
  component: CategoryList,
} as ComponentMeta<typeof CategoryList>;

const Template: ComponentStory<typeof CategoryList> = (args) => (
  <CategoryList {...args} />
);

export const aaa = Template.bind({});
