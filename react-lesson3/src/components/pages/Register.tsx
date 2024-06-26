import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth
} from '../../firebase'
import Layout from '../layout/Layout'
import RegisterFormInput from '../organisms/RegisterFormInput'
import Form from '../organisms/Form';
import {RoutePathsType} from '../../types/routePaths';
import {RegisterFormType} from '../../types/register';

type RegisterProps = {
  handleNavigation: (pathKey: keyof RoutePathsType) => void;
}

const Login: React.FC<RegisterProps> = ({ handleNavigation}) => {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterFormType>();

  const registerHandler = async (data: RegisterFormType) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) =>{
      console.log(userCredential);
      handleNavigation('dashboard');
    }).catch((error) => {
      if(error.code === 'auth/email-already-in-use'){
        alert('このメールアドレスは既に使用されています。');
      }else{
        alert(error.message);
        console.error(error);
      }
    });
  };

  const onSubmit: SubmitHandler<RegisterFormType> =  (data) => {
    registerHandler(data);
  };

  return (
    <Layout>
        <Form title='新規登録' submitText='新規登録' toggleText='ログインはこちらから' onSubmit={handleSubmit(onSubmit)} onClick={() => handleNavigation('login')}>
            <RegisterFormInput type={'text'} name={'username'} placeholder={'userName'} register={register} errors={errors}>ユーザー名：</RegisterFormInput>
            <RegisterFormInput type={'text'} name={'email'} placeholder={'E-mail'} register={register} errors={errors}>メールアドレス：</RegisterFormInput>
            <RegisterFormInput type={'password'} name={'password'} placeholder={'Password'} register={register} errors={errors}>パスワード：</RegisterFormInput>
        </Form>
    </Layout>
  )
}

export default Login