'use client'
import { EyeIcon, PencilIcon, PlusIcon, TrashIcon,CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


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
  async function handleDeleteRequistion(reqId: string) {
    const res = await fetch(`http://localhost:1323/admin/deleterequistion/${reqId}`, {
      method: 'DELETE',
      credentials:'include'
    })

    if(!res.ok) {
      console.log("err toast")
    }

    console.log("success toast")
  }

  //const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <form>
      <button onClick={() => handleDeleteRequistion(reqId)} className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
