import styled from 'styled-components';

export const Root = styled.article`
  display: flex;
  align-items: center;
  padding: 15px 18px 19px 17px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 107px #ad6c48;
`;

export const ImageWrapper = styled.div`
  width: 53px;
  height: 52px;
  border-radius: 9px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  flex-grow: 1;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Category = styled.p`
  font-family: 'Helvetica-Now-Display, sans-serif';
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #c2c2c2;
  margin-top: 0;
  margin-bottom: 1px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  user-select: none;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  cursor: pointer;
  color: inherit;
  text-align: center;
  text-decoration-line: none;
  background-color: transparent;
  transition: color 0.1s ease-in, background-color 0.1s ease-in;
  background-color: #5A6CF3;
  width: 44px;
  height: 44px;
  border-radius: 11px;
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: #494949;
  margin-top: 0;
  margin-bottom: 0;
`;
