import styled from 'styled-components';

export const Root = styled.div``;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #363636;
  margin: 0 0 34px;
  font-weight: 700;
  margin-bottom: 0;
`;

export const ProductWrapper = styled.div`
  padding-bottom: 24px;
`;

export const Date = styled.div`
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 12px 20px 32px;
  background: #ffffff;
  box-shadow: 0px 2px 27px rgba(1, 118, 63, 0.4);
  border-radius: 0px 0px 30px 30px;
`;

export const Container = styled.div`
  height: calc(100vh - 100px);
  padding: 160px 20px 100px 20px;
  overflow: scroll;
`;

export const Back = styled.button`
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

  // &:hover,
  // &:focus {
  //   color: inherit;
  //   text-decoration-line: none;
  // }

  width: 45px;
  height: 44px;

  background: #f8f8fb;
  border-radius: 9px;

  color: #f08f5f;
  margin-bottom: 10px;

  svg {
    width: 24px;
    height: 24px;
  }
`;
