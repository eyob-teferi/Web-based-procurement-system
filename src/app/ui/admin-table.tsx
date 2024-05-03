// import { getAllRequistions } from "@/utils/get-all-requistions";
import { redirect } from "next/navigation";
import { ExamineReq,DeleteReq,AcceptReq } from "./buttons";
import { cookies } from 'next/headers'

import { RequisitionTable } from "@/app/lib/definition"

export interface Requisition {
  id:string;
  departmentName: string;
  departmentId:string;
  itemName: string;
  quantity: number;
  price: number;
  createdAt:Date;
  status: string;
  description: string;
}

async function getAllRequistions(itemName: string, currentPage: number, status: string): Promise<Requisition[]> {
  const cookieStore = cookies()
  const jwt = cookieStore.get('jwt')?.value;
  if (jwt) {
    const res = await fetch(`http://localhost:1323/admin/getrequistions?itemName=${itemName}&status=${status}`, {headers: {
      Cookie: `jwt=${jwt};`
  }})

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
    //  redirect('/admin-dashboard/login')
    }


  
    return res.json()
  }
throw new Error('err')
  }


export default async function ReqTable({
  itemName,
  currentPage,
  status
}: {
  itemName: string;
  currentPage: number;
  status: string;
}) {
  const requisitions = await getAllRequistions(itemName, currentPage, status);
 

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Dep Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Item or Service
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Quantity
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
              {requisitions.map((requistion, index) => {
                return <tr key={index}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <p>{requistion.departmentName}</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <p>{requistion.itemName}</p>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <p>{requistion.quantity}</p>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <p>$ {requistion.price}</p>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <p>{new Date(requistion.createdAt).toLocaleDateString()}</p>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <p>{requistion.status}</p>
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <ExamineReq  reqId={requistion.id}/>
                    {/* <AcceptReq /> */}
                    <DeleteReq  reqId={requistion.id}/>
                  </div>
                </td>
              </tr>
              })}
               
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
