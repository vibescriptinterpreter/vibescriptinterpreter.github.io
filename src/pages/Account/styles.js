import styled from 'styled-components';

export const Wrapper = styled.div`

`;

export const Header = styled.header`
    background: #FFFFFF;
    box-shadow: 0px 2px 27px rgba(1, 118, 63, 0.4);
    border-radius: 0px 0px 30px 30px;
    padding: 12px 20px 32px;
`;

export const Title = styled.h1`
    font-family: 'Helvetica Now Display', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0.03em;
    color: #363636;
    margin: 0;
`;

export const Balance = styled.p`
    font-family: 'Helvetica Now Display', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    text-align: right;
    letter-spacing: 0.03em;
    color: #25D482;
    margin: 0;
`;

export const Headline = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 44px;
    margin-top: 14px;
`;

export const PaymentCard = styled.div` 
    min-width: 170px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: ${({theme}) => theme === 'accent' ? '#25D482' : '#fff'};
    box-shadow: 4px 0px 4px rgba(37, 212, 130, 0.2);
    border-radius: 16px;
    font-family: 'Helvetica Now Display', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: ${({theme}) => theme === 'accent' ? '#FFFFFF' : '#3A3C3F'};
    padding: 18px;
`;

export const PaymentCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: -30px;
`;

export const PaymentCardText = styled.p`
    margin: 0;
    margin-left: 10px;
`;

export const PaymentForm = styled.div`
    padding: 0 20px;
`;

export const PaymentRow = styled.div`
    margin-bottom: 24px;
`;

export const PaymentTitle = styled.h2`
    font-family: 'Helvetica Now Display', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #3A3C3F;
    margin-top: 0;
    margin-bottom: 3px;
`;

export const PaymentCardNumber = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;        
    font-family: 'Helvetica Now Display', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #424D59;
`;

export const PaymentCardNumberText = styled.div`

`;

export const PaymentCol = styled.div`
    width: 50%;
`;

export const PaymentFlex = styled.div`
    display: flex;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ProfileTextWrapper = styled.div``

export const ProfileTitle = styled.div`
    font-family: 'Helvetica Now Display', sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: 0.03em;
    color: #363636;
`;

export const ProfileSubtitle = styled.div`
    font-family: 'Helvetica Now Display', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 32px;
    letter-spacing: 0.03em;
    color: #363636;
`;

export const ProfileImageWrapper = styled.div`
    position: relative;
    width: 47px;
    height: 47px;
    border-radius: 10px;
    overflow: hidden;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const ButtonBack = styled.button`
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
    width: 44px;
    height: 44px;
    background: #F8F8FB;
    border-radius: 9px;
    margin-bottom: 10px;
    color: #25D482;
`;