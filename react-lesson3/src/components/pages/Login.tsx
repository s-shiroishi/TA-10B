import React from 'react'
import {useForm} from 'react-hook-form'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'
import Layout from '../layout/Layout'
import LoginFormInput from '../organisms/LoginFormInput'
import Form from '../organisms/Form';
import {RoutePathsType} from '../../types/routePaths';
import {LoginFormType} from '../../types/login';

type LoginProps = {
  getUserInfo: (id: string) => void;
  handleNavigation: (pathKey: keyof RoutePathsType) => void;
}

const Login: React.FC<LoginProps> = ({getUserInfo, handleNavigation}) => {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormType>();

  const loginHandler = async (data: LoginFormType) => {
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        getUserInfo(userCredential.user.uid);
      })
      .catch((error) => {
        if(error.code === 'auth/invalid-credential'){
          alert('メールアドレスもしくはパスワードが間違っています。')
        }else{
          alert(error.message);
          console.error(error);
        };
      })
    };

  return (
    <Layout>
        <Form title='ログイン' submitText='ログイン' toggleText='新規登録はこちらから' onSubmit={handleSubmit(loginHandler)} onClick={() => handleNavigation('register')}>
            <LoginFormInput type={'text'} name={'email'} placeholder={'E-mail'} register={register} errors={errors}>メールアドレス：</LoginFormInput>
            <LoginFormInput type={'password'} name={'password'} placeholder={'Password'} register={register} errors={errors}>パスワード：</LoginFormInput>
        </Form>
    </Layout>
  )
}

export default Login