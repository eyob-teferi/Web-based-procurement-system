import SetBudget from "@/app/ui/setBudget"
import { lusitana } from '@/app/ui/fonts';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


console.log('set budget page run')
export interface Department {
    id:string;
    departmentName: string;
    departmentBudget: number;
    departmentAdminId?: string;
  }

export async function getAllDepartments(): Promise<Department[] > {
    const cookieStore = cookies()
    const jwt = cookieStore.get('jwt')?.value;

   if(!jwt) {redirect('/admin-dashboard/login')}

      const res = await fetch('http://localhost:1323/admin/departments', {headers: {
        Cookie: `jwt=${jwt};`
    }})

 
  
      if (!res.ok) {
        //todo
      }
  
  
    
      return res.json()
    
   
    }

export default async function Page(){
   
    const departments =await getAllDepartments();
  

    return(
        <div>
            <div className="flex w-full items-center justify-between mb-8">
            <h1 className={`${lusitana.className} text-2xl`}>Set Budget</h1>
            </div>
            <SetBudget departments={departments} />
        </div>
    )
}