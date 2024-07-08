import React from 'react'
import {useForm} from 'react-hook-form'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from '../../firebase'
import Layout from '../layout/Layout'
import RegisterFormInput from '../organisms/RegisterFormInput'
import Form from '../organisms/Form';
import {RoutePathsType} from '../../types/routePaths';
import {RegisterFormType} from '../../types/register';
import { addDoc, collection } from 'firebase/firestore';
import { UserType } from '../../types/user';

type RegisterProps = {
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
  handleNavigation: (pathKey: keyof RoutePathsType) => void;
}

const Register: React.FC<RegisterProps> = ({setUser, handleNavigation}) => {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterFormType>();

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const registerHandler = async (data: RegisterFormType) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const loginUser = {
        id: userCredential.user.uid,
        name: data.username,
        wallet: getRandomInt(100, 1000),
      };
      await addDoc(collection(db, 'users'), loginUser);
      setUser(loginUser);
    } 
    catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        alert('このメールアドレスは既に使用されています。');
      } else {
        alert(error.message);
        console.error(error);
      }
    }
  };

  return (
    <Layout>
        <Form title='新規登録' submitText='新規登録' toggleText='ログインはこちらから' onSubmit={handleSubmit(registerHandler)} onClick={() => handleNavigation('login')}>
            <RegisterFormInput type={'text'} name={'username'} placeholder={'userName'} register={register} errors={errors}>ユーザー名：</RegisterFormInput>
            <RegisterFormInput type={'text'} name={'email'} placeholder={'E-mail'} register={register} errors={errors}>メールアドレス：</RegisterFormInput>
            <RegisterFormInput type={'password'} name={'password'} placeholder={'Password'} register={register} errors={errors}>パスワード：</RegisterFormInput>
        </Form>
    </Layout>
  )
}

export default Register