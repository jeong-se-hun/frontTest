import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewItemList } from '../components/home/newItems/NewItems';
import NewItem from '../components/home/newItems/NewItem';

export default {
  title: 'Components/NewItem',
  component: NewItem,
} as ComponentMeta<typeof NewItem>;

const Template: ComponentStory<typeof NewItem> = args => (
  <NewItemList>
    <NewItem {...args} />
  </NewItemList>
);

export const Default = Template.bind({});
Default.args = {
  name: '캐주얼 남성 항공점퍼',
  price: 10000,
  modelImage:
    'https://static.discovery-expedition.com/images/goods/ec/X23SDMWJ15031KAD/thnail/8746329F1093474CAE8F56E1A14A5F57.png/dims/resize/738x982',
  itemImage:
    'https://static.discovery-expedition.com/images/goods/ec/X23SDMWJ15031KAD/thnail/2AA32FA11952437D800E3E6433720146.png/dims/resize/738x982',
};
