import React, { useRef, useState } from 'react';
import Button from '../../components/Button/Button';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { Root, Form, Label, Input, Row, Image } from './styles';

const Auth = () => {
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email && password) {
      try {
        setError('');
        setLoading(true);
        const user = await login(email, password);
        setLoading(false);

        if (user) {
          console.log(user.user);
          if (user.user.email === 'admin@gmail.com') {
            navigate('/admin');

          } else {
            navigate('/history');
          }
        }
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);

        toast.error("Неверный логин или пароль", {
          position: toast.POSITION.TOP_CENTER
        });
      }
    }
  }

  return (
    <Root>
      <ToastContainer />
      <Image src="/images/auth.png" />
      <Form>
        <Row>
          <Label htmlFor="email">E-mail*</Label>
          <Input id="email" type="text" name="email" ref={emailRef} />
        </Row>
        <Row>
          <Label htmlFor="password">Пароль</Label>
          <Input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </Row>
        <Button type="submit" onClick={handleSubmit}>
          Войти {loading && '...'}
        </Button>
      </Form>
    </Root>
  );
};

export default Auth;
