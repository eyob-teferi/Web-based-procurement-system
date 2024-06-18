import { cookies } from "next/headers";
import Bid from "../ui/bid";
import { lusitana } from "../ui/fonts";
import Search from "../ui/search";
import { redirect } from "next/navigation";

export interface RequisitionType {
    id:string;
    itemName: string;
    quantity: number;
    description: string;
    createdAt: Date
}

export async function getAllBids(itemName: string): Promise<RequisitionType[]> {
    const cookieStore = cookies()
    const jwt = cookieStore.get('jwt')?.value;

   if(!jwt) {redirect('/')}

      const res = await fetch(`http://localhost:1323/user/requistions?status=approved&itemName=${itemName}`, {headers: {
        Cookie: `jwt=${jwt};`
    }})

 
  
      if (!res.ok) {
        //todo
      }
  
  
    
      return res.json()
    
   
    }


export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      itemName?: string;
      page?: number;
      status?: string;
    };
  }){
    const itemName = searchParams?.itemName || '';
  const currentPage = Number(searchParams?.page) || 1;
    const data = await getAllBids(itemName)
    return(
        <>
            
        <div className="w-full">
        <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Bids</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search bids..." />
        </div>
        <Bid data={data} />
        </div>
        </>

    )
}