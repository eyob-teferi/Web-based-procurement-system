
import { AcceptBid } from '@/app/ui/buttons';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

export interface BidType {
    id: string;
    supplierId: string;
    requistionId: string;
    price: number;
    status: string;
    createdAt: Date;
    documentUrl: string;
}
export async function getbidsByReqId(reqId: string): Promise<BidType[]> {
    const cookieStore = cookies()
    const jwt = cookieStore.get('jwt')?.value;

   if(!jwt) {redirect('/')}

      const res = await fetch(`http://localhost:1323/admin/getbids/${reqId}`, {headers: {
        Cookie: `jwt=${jwt};`
    }})

 
  
      if (!res.ok) {
        //todo
        console.log("Error")
      }
  
  
    
      return res.json()
    
   
    }

const Page = async({ params }: { params: { id: string } }) => {
    console.log(params.id)
    const bids = await getbidsByReqId(params.id)
    console.log(bids)
    if (bids.length == 0) {
        return (
            <div className='flex justify-center items-center'>There are no bids for this requisition</div>
        )
    }
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Supplier Id
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                 document image
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Price
                </th>
            
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {bids.map((bid, index) => {
                return <tr key={index}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <p>{bid.supplierId}</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <Link href={bid.documentUrl} target='_blank'>{bid.documentUrl}</Link>
                </td>
             
                <td className="whitespace-nowrap px-3 py-3">
                  <p>$ {bid.price}</p>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <p>{new Date(bid.createdAt).toLocaleDateString()}</p>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <p>{bid.status}</p>
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                
                   {bid.status == 'pending' && <AcceptBid bidId={bid.id}/> }
                    {/* <DeleteReq  reqId={requistion.id}/>  */}
                  </div>
                </td>
              </tr>
              })}
               
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Page