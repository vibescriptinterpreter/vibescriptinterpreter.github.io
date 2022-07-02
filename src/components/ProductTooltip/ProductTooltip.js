import React from 'react';
import {
  Root,
  ImageWrapper,
  Image,
  TextWrapper,
  Title,
  Category,
  Button
} from './styles';
import { ReactComponent as IconPlus } from '../../icons/plus.svg';

const ProductTooltip = ({ title, category, onPayment }) => {
  return (
    <Root>
      <ImageWrapper>
        <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9wYZ2TJF8aiY0jTzD2oMR7ainVkdTpHIwQ&usqp=CAU'} />
      </ImageWrapper>
      <TextWrapper>
        <Category>{category}</Category>
        <Title>{title}</Title>
      </TextWrapper>
      <Button onClick={onPayment}>
        <IconPlus />
      </Button>
    </Root>
  );
};

export default ProductTooltip;
