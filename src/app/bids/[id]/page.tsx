import BidForm from "@/app/ui/bid-form";
import { lusitana } from "@/app/ui/fonts";
import { RequisitionType } from "../page";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



export async function getRequisitionById(id: string): Promise<RequisitionType> {
    const cookieStore = cookies()
    const jwt = cookieStore.get('jwt')?.value;

   if(!jwt) {redirect('/')}

      const res = await fetch(`http://localhost:1323/user/requistion/${id}`, {headers: {
        Cookie: `jwt=${jwt};`
    }})

 
  
      if (!res.ok) {
        //todo
      }
  
  
    
      return res.json()
    
   
    }
export default async function Page({ params }: { params: { id: string } }){
    const data = await getRequisitionById(params.id);
    
    return(

        <div className="w-full">
        <div className="mb-6 flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Bid</h1>
        </div>
        <BidForm data={data} />
        </div>
    )
}