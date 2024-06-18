import { cookies } from 'next/headers'
import LoginForm from '@/app/ui/login-form'
import React from 'react'
import { JwtPayload, jwtDecode } from "jwt-decode";
import { redirect } from 'next/navigation'
export interface CustomJwtPayload extends JwtPayload {
  id: string;
    role: string;
}

const Page = () => {
    const cookieStore = cookies()
    const rawJwt = cookieStore.get('jwt')?.value
    let decodedJwt: CustomJwtPayload | null = null
    if(rawJwt != undefined) {
    decodedJwt = jwtDecode(rawJwt);

}
if(decodedJwt && decodedJwt.role === 'admin'){
redirect(`/admin-dashboard`) 
}


  return (
   <LoginForm loginEndpoint='http://localhost:1323/admin/login' />
  )
}

export default Page