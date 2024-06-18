import FullInfo from "@/app/ui/full-info";
import { lusitana } from '@/app/ui/fonts';
import { cookies } from "next/headers";
import { Requisition } from "@/app/ui/admin-table";




async function getRequistionById(reqId: string): Promise<Requisition> {
    const cookieStore = cookies()
    const jwt = cookieStore.get('jwt')?.value;
    if (jwt) {
      const res = await fetch(`http://localhost:1323/admin/requistion/${reqId}`, {headers: {
        Cookie: `jwt=${jwt};`
    }})
  
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
      //  redirect('/admin-dashboard/login')
      }
  
  
    console.log(res.status);
      return res.json()
    }
  throw new Error('err')
    }
export default async function Page({ params }: { params: { id: string } }){
    console.log('id:', params.id)
   const requisition = await getRequistionById(params.id)


    return(
        <>
            <div className="flex w-full items-center justify-between mb-8">
            <h1 className={`${lusitana.className} text-2xl`}>Details</h1>
            </div>
            <FullInfo requisition={requisition}/>
        </>
    )
}