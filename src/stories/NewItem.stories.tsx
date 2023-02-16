import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductItem from '../components/common/ProductItem';
import { NewItemSection, NewItemTitle, NewItemList } from '../components/home/newItems/NewItems';

export default {
  title: 'Components/NewItems',
  component: ProductItem,
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = args => (
  <NewItemSection>
    <NewItemTitle>New Arrivals, New Life</NewItemTitle>
    <NewItemList>
      <ProductItem {...args} />
      <ProductItem {...args} />
      <ProductItem {...args} />
    </NewItemList>
  </NewItemSection>
);

export const Default = Template.bind({});
Default.args = {
  name: '캐주얼 남성 항공점퍼',
  price: 10000,
  imgHeight: 400,
  modelImage:
    'https://static.discovery-expedition.com/images/goods/ec/X23SDMWJ15031KAD/thnail/8746329F1093474CAE8F56E1A14A5F57.png/dims/resize/738x982',
  itemImage:
    'https://static.discovery-expedition.com/images/goods/ec/X23SDMWJ15031KAD/thnail/2AA32FA11952437D800E3E6433720146.png/dims/resize/738x982',
};
