import React from 'react'
import {useForm} from 'react-hook-form'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth, db} from '../../firebase'
import Layout from '../layout/Layout'
import LoginFormInput from '../organisms/LoginFormInput'
import Form from '../organisms/Form';
import {RoutePathsType} from '../../types/routePaths';
import {LoginFormType} from '../../types/login';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { UserType } from '../../types/user';

type LoginProps = {
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
  handleNavigation: (pathKey: keyof RoutePathsType) => void;
}

const Login: React.FC<LoginProps> = ({setUser, handleNavigation}) => {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormType>();

  const loginHandler = async (data: LoginFormType) => {
    try{
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
      const q = query(collection(db, 'users'), where('id', '==', userCredential.user.uid))
      const userDoc = (await getDocs(q)).docs[0];
      const loginUser = {
        id: userDoc.data().id,
        name: userDoc.data().name,
        wallet: userDoc.data().wallet,
      };
      setUser(loginUser);
    }
    catch(error: any){
      if(error.code === 'auth/invalid-credential'){
        alert('メールアドレスもしくはパスワードが間違っています。')
      }else{
        alert(error.message);
        console.error(error);
      };
    };
  }

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