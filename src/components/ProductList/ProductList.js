import React from 'react';
import { List, Item, Root } from './styles';
import CardProduct from '../CardProduct/CardProduct';

const ProductList = ({ items }) => {
  return (
    <Root>
      <List>
        {items.map((item) => (
          <Item key={item.id}>
            <CardProduct {...item} />
          </Item>
        ))}
      </List>
    </Root>
  );
};

export default ProductList;
