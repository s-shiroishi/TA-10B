import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth
} from '../../firebase'
import Layout from '../layout/Layout'
import FormInput from '../bases/FormInput'
import Button from '../bases/Button'
import {RoutePathsType} from '../../types/RoutePaths';
import {FormInputsType} from '../../types/FormInput';

type RegisterProps = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  handleNavigation: (pathKey: keyof RoutePathsType) => void;
}

const Register: React.FC<RegisterProps> = ({isLogin, setIsLogin, handleNavigation}) => {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormInputsType>();

  const registerHandler = async (data: FormInputsType) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) =>{
      console.log(userCredential);
    }).catch((error) => {
      if(error.code === 'auth/email-already-in-use'){
        alert('このメールアドレスは既に使用されています。');
      }else{
        alert(error.message);
        console.error(error);
      }
    });
    handleNavigation('dashboard');
  };

  const loginHandler = async (data: FormInputsType) => {
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential);
        handleNavigation('dashboard');
      })
      .catch((error) => {
        if(error.code === 'auth/invalid-credential'){
          alert('メールアドレスもしくはパスワードが間違っています。')
        }else{
          alert(error.message);
          console.error(error);
        }
      });
  }

  const onSubmit: SubmitHandler<FormInputsType> =  (data) => {
    isLogin ? loginHandler(data) : registerHandler(data);
  };

  return (
    <Layout>
        <section className='container max-w-lg mx-auto py-6 text-center rounded-xl bg-white shadow-md'>
          <h2 className='mb-8 pb-3 font-bold text-xl border-b shadow-sm'>{isLogin ? 'ログイン' : '新規登録'}</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='w-80 mx-auto flex flex-col items-center gap-y-4'>
              {isLogin ? null : <FormInput type={'text'} name={'username'} placeholder={'userName'} register={register} errors={errors}>ユーザー名：</FormInput>}
              <FormInput type={'text'} name={'email'} placeholder={'E-mail'} register={register} errors={errors}>メールアドレス：</FormInput>
              <FormInput type={'password'} name={'password'} placeholder={'Password'} register={register} errors={errors}>パスワード：</FormInput>
              <div className='w-full flex justify-end'>
                <Button type={'submit'} cls={'text-sky-400 border-sky-400 hover:text-white hover:bg-sky-500 text-sm'}>{isLogin ? 'ログイン' : '新規登録'}</Button>
              </div>
              <Button type={'button'} onClick={() => setIsLogin(!isLogin)} cls={'text-sky-400 border-none hover:underline text-sm'}>{isLogin ? '新規登録はこちらから' : 'ログインはこちらから'}</Button>
          </form>
        </section>
    </Layout>
  )
}

export default Register