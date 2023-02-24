import ProductItem from "@/components/rankCarousel/ProductItem";
import { ProductListContainer } from "../components/rankCarousel/ProductList";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/ProductItem",
  component: ProductItem,
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => (
  <ProductListContainer>
    <ProductItem {...args} />
    <ProductItem {...args} />
    <ProductItem {...args} />
  </ProductListContainer>
);

export const Item = Template.bind({});

export const Test = Template.bind({});

Item.args = {
  title: "카코포켓 남성 트레이닝 팬츠",
  price: "119,000원",
  image:
    "https://static.discovery-expedition.com/images/goods/ec/X23SDMPD31031BKS/thnail/3E3CC238A821498EA27AE73BE8334F83.png/dims/resize/738x982",
  hover:
    "https://static.discovery-expedition.com/images/goods/ec/X23SDMTP27031BKS/thnail/0C5CB332CA1343F2A85D666BE90DD323.png/dims/resize/738x982",
};

Test.args = {
  title: "이거는 테스트",
  price: "999원",
  image:
    "https://static.discovery-expedition.com/images/goods/ec/X23SDMPD31031BKS/thnail/3E3CC238A821498EA27AE73BE8334F83.png/dims/resize/738x982",
  hover:
    "https://static.discovery-expedition.com/images/goods/ec/X23SDMTP27031BKS/thnail/0C5CB332CA1343F2A85D666BE90DD323.png/dims/resize/738x982",
};
