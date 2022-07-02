import React from 'react';
import {
  Root,
  ImageWrapper,
  Image,
  Category,
  TextWrapper,
  Name,
  Price,
} from './styles';

const CardProduct = ({ category, name, price }) => {
  console.log('NAME', name);
  return (
    <Root>
      <ImageWrapper>
        <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9wYZ2TJF8aiY0jTzD2oMR7ainVkdTpHIwQ&usqp=CAU'} />
      </ImageWrapper>
      <TextWrapper>
        <Category>{category}</Category>
        <Name>{name}</Name>
      </TextWrapper>
      <Price>-{price}₽</Price>
    </Root>
  );
};

export default CardProduct;
