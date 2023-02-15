import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NewItem from './NewItem';

it('renders with modelImage and itemImage', () => {
  const name = '새 상품';
  const price = 10000;
  const modelImage = '/public/images/item/newitem/newitem1.png';
  const itemImage = '/public/images/item/newitem/newitem1-1.png';

  render(<NewItem name={name} price={price} modelImage={modelImage} itemImage={itemImage} />);
  const divElement = screen.getByTestId('new-item-wrap');
  expect(divElement).toHaveStyle(`background-image: url(${modelImage})`);

  divElement.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
  expect(divElement).toHaveStyle(`background-image: url(${itemImage})`);
});

it('renders correctly with modelImage and itemImage', () => {
  const name = '새 상품';
  const price = 10000;
  const modelImage = '/public/images/item/newitem/newitem1.png';
  const itemImage = '/public/images/item/newitem/newitem1-1.png';

  const tree = renderer
    .create(<NewItem name={name} price={price} modelImage={modelImage} itemImage={itemImage} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
