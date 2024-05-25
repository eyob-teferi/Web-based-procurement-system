'use client'
import { EyeIcon, PencilIcon, PlusIcon, TrashIcon,CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import toast from 'react-hot-toast/headless';


export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function ExamineReq({reqId}:{reqId:string}){
  return(
    <a href={`/admin-dashboard/fullinfo/${reqId}`} className="rounded-md border p-2 hover:bg-gray-100">
      <EyeIcon className="w-5" />
    </a>
  )
}

export function AcceptReq(){
  return(
    <form>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <CheckIcon className="w-5" />
      </button>
    </form>
  )
}
export function AcceptBid({bidId}: {bidId: string}){
  async function handleAcceptBid() {
    const res = await fetch(`http://localhost:1323/admin/approvebid/${bidId}`, {
      method: 'PATCH',
      credentials:'include'
    })

    if(!res.ok) {
      toast.error("something went wrong",{  position: 'top-center'})
    }

    toast.success("bid has been accepted!",{  position: 'top-center'})
  }
  return(
    <form>
      <button onClick={handleAcceptBid} className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <CheckIcon className="w-5" />
      </button>
    </form>
  )
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}
export function UpdateReq() {
  return (
    <Link
      href="department-dashboard"
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteReq({reqId}: {reqId: string}) {
  async function handleDeleteRequistion() {
    const res = await fetch(`http://localhost:1323/admin/deleterequistion/${reqId}`, {
      method: 'DELETE',
      credentials:'include'
    })

    if(!res.ok) {
    
      if(!res.ok) {
        toast.error("something went wrong",{  position: 'top-center'})
      }
  
      toast.success("bid has been accepted!",{  position: 'top-center'})
  }
}

  //const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <form>
      <button onClick={() => handleDeleteRequistion()} className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
export function DeleteDeptAdmin({id}: {id: string}) {
  async function handleDeleteRequistion() {
    const res = await fetch(`http://localhost:1323/admin/deletedeptadmin/${id}`, {
      method: 'DELETE',
      credentials:'include'
    })

    if(!res.ok) {
      toast.error('something went wrong',{  position: 'top-center'})
    }

   toast.success("admin deleted",{  position: 'top-center'})
  }

  //const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <form>
      <button onClick={() => handleDeleteRequistion()} className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
