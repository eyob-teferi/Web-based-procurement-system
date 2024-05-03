import { cookies } from 'next/headers'
import LoginForm from '@/app/ui/login-form'
import React from 'react'
import { JwtPayload, jwtDecode } from "jwt-decode";
import { redirect } from 'next/navigation'
interface CustomJwtPayload extends JwtPayload {
    role: string;
}

const Page = () => {
    const cookieStore = cookies()
    const rawJwt = cookieStore.get('jwt')?.value
    let decodedJwt: CustomJwtPayload | null = null
    if(rawJwt != undefined) {
    decodedJwt = jwtDecode(rawJwt);

    console.log(decodedJwt)

}
if(decodedJwt && decodedJwt.role === 'department_admin'){
redirect(`/department-dashboard`) 
}


  return (
   <LoginForm loginEndpoint='http://localhost:1323/department/login' />
  )
}

export default Page