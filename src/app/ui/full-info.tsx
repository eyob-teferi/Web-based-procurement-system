'use client'
import { Requisition } from "./admin-table";
import { Button } from "./button";


export default  function FullInfo({requisition}: {requisition: Requisition}){

    async function handleApproveClick(requistionId: string) {
      const res =  await fetch(`http://localhost:1323/admin/approverequistion/${requistionId}` , {
        method: 'PATCH',
        credentials:'include',
      }) 
      if(!res.ok) {
        console.log(res)
        throw new Error('Failed to fetch data')
      }

      console.log('success toast')
    }
    return(
        <div>
            <div className="flex flex-col bg-white p-8 rounded-lg">

                <div className="flex justify-between m-2">
                    <p>ID:</p>
                    <p>{requisition.id}</p>
                </div>
                <div className="flex justify-between m-2">
                    <p>Department:</p>
                    <p>{requisition.departmentName}</p>
                </div>
                <div className="flex justify-between m-2">
                    <p>Name:</p>
                    <p>{requisition.itemName}</p>
                </div>
                <div className="flex justify-between m-2">
                    <p>Quantity:</p>
                    <p>{requisition.quantity}</p>
                </div>
                <div className="flex justify-between m-2">
                    <p>Price:</p>
                    <p>$ {requisition.price}</p>
                </div>
                <div className="flex justify-between m-2">
                    <p>Description:</p>
                    <p className="h-fit w-80">{requisition.description}</p>
                </div>
                <div className="flex justify-between m-2">
                    <p>Date:</p>
                    <p>{new Date(requisition.createdAt).toLocaleDateString()}</p>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
           {requisition.status == 'pending' ? <Button onClick={() => handleApproveClick(requisition.id)}>Approve</Button>: <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:pointer-events-none" disabled>approved</Button>}
            </div>
        </div>
    )
}