import styled from 'styled-components';

export const Root = styled.div`
  height: 100vh;
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #3a3c3f;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  display: inline-flex;
  width: 100%;
  height: 56px;
  border-radius: 16px;
  background: #f8f8fb;
  border: none;
  padding: 16px 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #424d59;
`;

export const Row = styled.div`
  margin-bottom: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 70px;
`;
