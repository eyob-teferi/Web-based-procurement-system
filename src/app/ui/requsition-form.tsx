'use client'
import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  IdentificationIcon,
  CurrencyDollarIcon,
  HashtagIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { Department } from '../admin-dashboard/(adminpage)/setbudget/page';
import { useForm } from 'react-hook-form';

export default function ReqForm(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    return(
        <form onSubmit={handleSubmit(async (data) => {
          console.log(data)
          const res = await fetch('http://localhost:1323/department/createrequistion', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials:'include'
          })

          console.log('succ toast')
        })}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
        
        <div className="w-full">
          {/* <div>
            <label 
              className="mb-2 block text-sm font-medium"
              htmlFor="department"
            >
              Department
            </label>
            <div className="relative"> */}
            {/* <select
              id="department"
             
              {...register('departmentId')}
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a Department
              </option>
              {departments.map((department) => (
                <option key={department.ID} value={department.ID}>
                  {department.departmentName}
                </option>
              ))}
            </select> */}
            

              {/* <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div> */}
          <div className="mt-4">
            <label
              className="mb-2 block text-sm font-medium"
              htmlFor="name"
            >
              Item or service
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                {...register('itemName', {required: true})}
                type="text"
          
                placeholder="Item or service"
            
                
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            </div>
            
          <div className="mt-4">
            <label
              className="mb-2 block text-sm font-medium"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="quantity"
                {...register('quantity', {required: true, valueAsNumber:true})}
                type="number"

                placeholder="if it is an item"
              
                
              />
              <HashtagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            </div>
            <div className="mt-4">
            <label
              className="mb-2 block text-sm font-medium"
              htmlFor="price"
            >
              Price
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="price"
                type="number"
                {...register('price', {required: true, valueAsNumber:true})}
                placeholder="price"
            
              
                
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="mb-2 block text-sm font-medium">
                Description
              </label>
              </div>
              <div>
              <textarea
                id="description"
                
                {...register('description')}
                
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              ></textarea>
            </div>
            <div className="mt-6 flex justify-end gap-4">
            <Button type="submit">Submit</Button>
            </div>
        </div>
  
      </div>
    </form>
    )
}