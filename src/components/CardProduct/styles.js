import styled from 'styled-components';

export const Root = styled.article`
  display: flex;
  background: #f8f8fb;
  border-radius: 16px;
  padding: 13px;
`;

export const ImageWrapper = styled.div`
  width: 61px;
  height: 60px;
  overflow: hidden;
  margin-right: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #494949;
  margin: 0;
`;

export const Category = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  color: #b1b1b1;
  margin: 0;
`;

export const TextWrapper = styled.div`
  flex-grow: 1;
`;

export const Price = styled.p`
  margin: 0;
  align-self: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #f08f5f;
`;
