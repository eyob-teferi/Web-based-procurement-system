

import { Department } from '@/app/admin-dashboard/(adminpage)/setbudget/page';
import { lusitana } from '@/app/ui/fonts'
import ReqForm from '@/app/ui/requsition-form'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
async function getAllDepartments(): Promise<Department[] > {
    const cookieStore = cookies()
    const jwt = cookieStore.get('jwt')?.value;

   if(!jwt) {redirect('/department-dashboard/login')}

      const res = await fetch('http://localhost:1323/admin/departments', {headers: {
        Cookie: `jwt=${jwt};`
    }})

 
  
      if (!res.ok) {
        //todo
      }

      console.log('hey')
      console.log(res.status)
  
  
    
      return res.json()
    
   
    }

export default async function Page(){
    const cookieStore = cookies()
    const rawJwt = cookieStore.get('jwt')?.value
    

    if(!rawJwt) {
        redirect('/department-dashboard/login')
    }
    // const departments =await getAllDepartments();
   

    
    return(

        <div className="w-full">
        <div className="mb-6 flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Request an Item or a Service</h1>
        </div>
        <ReqForm  />
        </div>
        
    )
}


