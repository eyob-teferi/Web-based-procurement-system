'use client'
import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useForm } from 'react-hook-form';
import { redirect } from 'next/navigation';

import { useRouter } from 'next/navigation'

interface LoginFormProps {
  loginEndpoint: string;
}

export default function LoginForm(props: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter()
  return (
    
    <form onSubmit={handleSubmit(async (data, ) => {
      console.log(data)
      
      const formData = new FormData(); 

      formData.append('email', data.email);
      formData.append('password', data.password);
      const res = await fetch(props.loginEndpoint , {
        method: 'POST',
        credentials:'include',
        body: formData
      }) 
      if(!res.ok) {
        console.log(res)
        throw new Error('Failed to fetch data')
      }
      if(props.loginEndpoint.includes('admin')){
        console.log('hey')
      router.replace('/admin-dashboard')
      }
    })} className="space-y-3 m-8">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
               
                {...register('email', {required: true})}
                placeholder="Enter your email address"
                
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                {...register('password', {required: true})}
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <Button type='submit' className="mt-4 w-full">
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
        {/* <LoginButton /> */}
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  return (
    <Button className="mt-4 w-full">
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}