import ProductItem from "@/components/rankCarousel/ProductItem";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProductList from "@/components/rankCarousel/ProductList";

export default {
  title: "Components/ProductItem",
  component: ProductItem,
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => (
  <>
    {/* <ProductList> */}
    <ProductItem {...args} />
    <ProductItem {...args} />
    <ProductItem {...args} />
    {/* </ProductList> */}
  </>
);

export const Item = Template.bind({});

Item.args = {
  title: "카코포켓 남성 트레이닝 팬츠",
  price: "119,000원",
  image:
    "https://static.discovery-expedition.com/images/goods/ec/X23SDMPD31031BKS/thnail/3E3CC238A821498EA27AE73BE8334F83.png/dims/resize/738x982",
  hover:
    "https://static.discovery-expedition.com/images/goods/ec/X23SDMSWA1033BKS/thnail/B685DDDE89284A89AAAECB3BBEF7643C.png/dims/resize/738x982",
};
