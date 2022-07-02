import React, { useEffect, useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import { ReactComponent as IconBack } from '../../icons/arrow-left.svg';
import Footer from '../../components/Footer/Footer';

import {
  Title,
  Root,
  ProductWrapper,
  Date,
  Header,
  Container,
  Back,
} from './styles';

import { getPurchaseList } from '../../api/purchase';

const PRODUCTS_BY_DATE = {
  'Сегодня 13 апреля': [
    {
      id: 1,
      category: 'Lauren’s',
      name: 'Orange Juice',
      price: 149,
      image: {
        src: '/images/product-01.png',
        alt: 'Orange Juice',
      },
    },
  ],
  'Вчера 12 апреля': [
    {
      id: 2,
      category: 'Baskin’s',
      name: 'Skimmed Milk',
      price: 129,
      image: {
        src: '/images/product-02.png',
        alt: 'Skimmed Milk',
      },
    },
    {
      id: 3,
      category: 'Marley’s',
      name: 'Aloe Vera Lotion',
      price: 129,
      image: {
        src: '/images/product-03.png',
        alt: '1249',
      },
    },
    {
      id: 4,
      category: 'Marley’s',
      name: 'Aloe Vera Lotion',
      price: 129,
      image: {
        src: '/images/product-03.png',
        alt: '1249',
      },
    },
    {
      id: 5,
      category: 'Marley’s',
      name: 'Aloe Vera Lotion',
      price: 129,
      image: {
        src: '/images/product-03.png',
        alt: '1249',
      },
    },
    {
      id: 6,
      category: 'Marley’s',
      name: 'Aloe Vera Lotion',
      price: 129,
      image: {
        src: '/images/product-03.png',
        alt: '1249',
      },
    },
  ],
};

const PurchaseHistory = () => {
  const localProducts = JSON.parse(localStorage.getItem('purchase')) || [];
  let [products, setProducts] = useState(localProducts);


  return (
    <Root>
      <Header>
        <Back>
          <IconBack />
        </Back>
        <Title>История👍🏻</Title>
      </Header>
      <Container>
        <ProductList items={products} />
      </Container>
      <Footer>Footer</Footer>
    </Root>
  );
};

export default PurchaseHistory;
