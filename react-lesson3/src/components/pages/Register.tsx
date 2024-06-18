import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth
} from '../../firebase'
import Layout from '../layout/Layout'
import FormInput from '../bases/FormInput'
import Button from '../bases/Button'
import {RoutePathsType} from '../../types/RoutePaths';
import {FormInputsType} from '../../types/FormInput';

type RegisterProps = {
  handleNavigation: (pathKey: keyof RoutePathsType) => void;
}

const Register: React.FC<RegisterProps> = ({handleNavigation}) => {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormInputsType>();

  const onSubmit: SubmitHandler<FormInputsType> = async (data) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) =>{
        const user = userCredential.user;
        console.log(user);
      }).catch((error) => {
        if(error.code==='auth/email-already-in-use'){
          alert('こののメールアドレスは既に使用されています。');
        }else{
          alert(error.message);
        }
      });
      handleNavigation('dashboard');
  };

  return (
    <Layout>
      <div className='w-screen'>
        <section className='container max-w-lg mx-auto py-6 text-center rounded-xl bg-white shadow-md'>
          <h2 className='mb-8 pb-3 text-xl border-b shadow-sm'>新規登録</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='w-80 mx-auto flex flex-col items-center gap-y-4'>
              <FormInput  text={'ユーザー名：'} type={'text'} name={'username'} placeholder={'userName'} register={register} errors={errors}/>
              <FormInput text={'メールアドレス：'} type={'text'} name={'email'} placeholder={'E-mail'} register={register} errors={errors}/>
              <FormInput text={'パスワード：'} type={'password'} name={'password'} placeholder={'Password'} register={register} errors={errors}/>
              <div className='w-full flex justify-end'>
                <Button type={'submit'} text={'新規登録'} cls={'text-sky-400 border-sky-400 hover:text-white hover:bg-sky-500 text-sm'}/>
              </div>
              <Button type={'button'} text={'ログインはこちらから'} cls={'text-sky-400 border-none hover:underline text-sm'}/>
          </form>
        </section>
       </div>
    </Layout>
  )
}

export default Register