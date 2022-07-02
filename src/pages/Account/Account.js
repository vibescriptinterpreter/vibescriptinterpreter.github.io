import React from 'react';
import { useNavigate } from 'react-router-dom';

import { 
    Wrapper,
    Header, 
    Title, 
    Balance, 
    Headline, 
    PaymentCard,
    PaymentCardText,
    PaymentCardWrapper,
    PaymentForm,
    PaymentRow,
    PaymentTitle,
    PaymentCardNumber,
    PaymentCardNumberText,
    PaymentCol,
    PaymentFlex,
    ProfileWrapper,
    ProfileTextWrapper,
    ProfileTitle,
    ProfileSubtitle,
    ProfileImageWrapper,
    ButtonBack
 } from './styles';

import { ReactComponent as DreditCardIcon } from '../../icons/credit-card.svg'; 
import { ReactComponent as AppleIcon } from '../../icons/apple.svg'; 
import { ReactComponent as MasterCardIcon } from '../../icons/master-card.svg';
import { ReactComponent as ScanCardIcon } from '../../icons/scan-card.svg'; 
import { ReactComponent as ArrowLeftIcon } from '../../icons/arrow-left.svg'; 

const Account = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <Wrapper>
            <Header>
                <ButtonBack onClick={handleClick}>
                    <ArrowLeftIcon />
                </ButtonBack>
                <ProfileWrapper>
                    <ProfileTextWrapper>
                        <ProfileTitle>Привет 👋🏻</ProfileTitle>
                        <ProfileSubtitle>Павел Абрамов</ProfileSubtitle>
                    </ProfileTextWrapper>
                    <ProfileImageWrapper>
                        <img src="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg" alt="" />
                    </ProfileImageWrapper>
                </ProfileWrapper>                
                <Headline>
                    <Title>Баланс 💳</Title>
                    <Balance>1,527₽</Balance>
                </Headline>
            </Header>
            <PaymentCardWrapper>
                <PaymentCard theme="accent">
                    <DreditCardIcon />
                    <PaymentCardText>Credit Card</PaymentCardText>
                </PaymentCard>
                <PaymentCard>
                    <AppleIcon theme="default" />
                    <PaymentCardText>Apple Pay</PaymentCardText>
                </PaymentCard>
            </PaymentCardWrapper>
            <PaymentForm>
                <PaymentRow>
                    <PaymentTitle>Номер карты</PaymentTitle>
                    <PaymentCardNumber>
                        <PaymentCardNumberText>
                            5261   4141   0151   8472
                        </PaymentCardNumberText>
                        <MasterCardIcon />
                        <ScanCardIcon />
                    </PaymentCardNumber>
                </PaymentRow>
                <PaymentRow>
                    <PaymentTitle>Владелец карты</PaymentTitle>
                    <PaymentCardNumber>
                        Павел Абрамов
                    </PaymentCardNumber>
                </PaymentRow>
                <PaymentRow>
                    <PaymentFlex>
                        <PaymentCol>
                            <PaymentTitle>Срок</PaymentTitle>
                            <PaymentCardNumber>
                                06   /   2024
                            </PaymentCardNumber>
                        </PaymentCol>
                        <PaymentCol>
                            <PaymentTitle>CVV / CVC</PaymentTitle>
                            <PaymentCardNumber>
                                915
                            </PaymentCardNumber>
                        </PaymentCol>
                    </PaymentFlex>
                </PaymentRow>
            </PaymentForm>
        </Wrapper>
    );
}

export default Account;