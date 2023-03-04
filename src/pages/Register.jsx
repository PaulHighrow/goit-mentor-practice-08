import { Button } from 'components/Contact/Contact.styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Input, Label, Wrapper } from './Register.styled';

// bugamusy@mailinator.com
// Pa$$w0rd!

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSignUp = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    console.log({ name, email, password });
    reset();
  };

  return (
    <Form onSubmit={handleSignUp}>
      <Wrapper>
        <Label>
          <span>Name</span>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </Label>
      </Wrapper>
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
      <Button type="submit" disabled={!name || !email || !password}>
        Sign Up
      </Button>
    </Form>
  );
};
