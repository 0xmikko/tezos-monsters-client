/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from 'react';
import {useHistory} from 'react-router-dom';

import {Button, Container} from 'react-bootstrap';
import {BACKEND_ADDR, SSO_ADDR} from '../../config';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as yup from "yup";
import logo from "../../logo.png"

interface Props {
  onSubmit: (email: string, password: string) => void;
}

const formSchema = yup.object({
  email: yup
      .string()
      .required()
      .email(),
  password: yup
      .string()
      .required()
});

type FormValues = yup.InferType<typeof formSchema>;

/**
 * LoginFom renders login form for Login screen
 * @param onSubmit {Function} Submit login data
 * @constructor
 */
export const LoginForm: React.FC<Props> = ({onSubmit}: Props) => {

  return (
    <Container className={'login-form'}>
        <img src={logo} alt={"logo"} style={{height: '40px'}}/>

        <div className="divider-text">login to admin panel</div>
            <Button className="btn-outline-google btn-block" onClick={() => {window.location.assign(SSO_ADDR + '/auth/login/google/')}}>
                Sign in with Google
            </Button>
        {/*<Button className="btn-outline-apple btn-block">*/}
        {/*    Sign in with Apple*/}
        {/*</Button>*/}
        <div className="tx-13 mg-t-20 tx-center">
            (c) 2020, Mikhail Lazarev
        </div>
    </Container>
  );
};

export default LoginForm;
