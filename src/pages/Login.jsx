import { Button } from 'components/Contact/Contact.styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Input, Label, Wrapper } from './Register.styled';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleLogIn = async e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    console.log({ email, password });
    reset();
  };

  return (
    <Form onSubmit={handleLogIn}>
      <Wrapper>
        <Label>
          <span>Mail</span>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </Label>
      </Wrapper>
      <Wrapper>
        <Label>
          <span>Pass</span>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </Label>
      </Wrapper>
      <Button type="submit" disabled={!email || !password}>
        Sign Up
      </Button>
    </Form>
  );
};
