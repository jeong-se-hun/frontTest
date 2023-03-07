import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const cartItems = [
  {
    id: 1,
    name: 'Item 1',
    price: 10.99,
    image: 'https://via.placeholder.com/80x80',
  },
  {
    id: 2,
    name: 'Item 2',
    price: 5.99,
    image: 'https://via.placeholder.com/80x80',
  },
  {
    id: 3,
    name: 'Item 3',
    price: 7.99,
    image: 'https://via.placeholder.com/80x80',
  },
  {
    id: 4,
    name: 'Item 4',
    price: 15.99,
    image: 'https://via.placeholder.com/80x80',
  },
  {
    id: 5,
    name: 'Item 5',
    price: 9.99,
    image: 'https://via.placeholder.com/80x80',
  },
  {
    id: 6,
    name: 'Item 6',
    price: 11.99,
    image: 'https://via.placeholder.com/80x80',
  },
];

type userInfoType = {
  name: string;
  age: string;
  email: string;
  gender: string;
  birthday: string;
};

const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<userInfoType>();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get('/api/auth');

        if (!res.data) {
          alert('유저 정보를 확인할 수 없습니다. 다시 로그인해 주세요.');
          router.push('/login');
        }

        setIsLoading(true);
        setUserInfo(res.data);
      } catch (error) {
        console.log(error);
        alert('로그인 후 이용 가능합니다.');
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  return (
    <>
      {isLoading && userInfo && (
        <Container>
          <Title>Shopping Cart</Title>
          <UserCard>
            <CardTitle>User Information</CardTitle>
            <CardInfo>
              <div>
                <CardLabel>Name:</CardLabel>
                <CardValue>{userInfo.name}</CardValue>
              </div>
              <div>
                <CardLabel>Email:</CardLabel>
                <CardValue>{userInfo.email}</CardValue>
              </div>
              <div>
                <CardLabel>Age:</CardLabel>
                <CardValue>{userInfo.age}</CardValue>
              </div>
              <div>
                <CardLabel>Gender:</CardLabel>
                <CardValue>{userInfo.gender}</CardValue>
              </div>
              <div>
                <CardLabel>Birthday:</CardLabel>
                <CardValue>{userInfo.birthday}</CardValue>
              </div>
            </CardInfo>
          </UserCard>
          {cartItems.map(item => (
            <CartItem key={item.id}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
              </ItemDetails>
            </CartItem>
          ))}
        </Container>
      )}
    </>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
`;

const ItemImage = styled.img`
  height: 80px;
  width: 80px;
  margin-right: 1rem;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ItemName = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ItemPrice = styled.span`
  font-size: 1rem;
  color: #718096;
`;

const UserCard = styled.div`
  background-color: #edf2f7;
  border-radius: 10px;
  padding: 2rem;
  margin: 2rem 0;
  width: 100%;
  max-width: 600px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

const CardTitle = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 2.4rem;
  margin-bottom: 2rem;
  color: #2d3748;
`;

const CardInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

const CardLabel = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: #4a5568;
  background-color: #e2e8f0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const CardValue = styled.span`
  font-size: 1.3rem;
  margin-left: 4px;
  color: #2d3748;
`;
