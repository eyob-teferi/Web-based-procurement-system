'use client';

import {
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { Department } from '../admin-dashboard/(adminpage)/setbudget/page';
import { useForm } from 'react-hook-form';



export default function SetBudget({departments}: {departments: Department[]}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  return (
    <form onSubmit={handleSubmit(async (data) => {
      console.log(data)
      
      const formData = new FormData(); 


      formData.append('departmentBudget', data.departmentBudget);
      
      const res = await fetch(`http://localhost:1323/admin/updatedepartmentbudget/${data.departmentId}` , {
        method: 'PATCH',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
          },
        credentials:'include',
        body: JSON.stringify({
          departmentBudget: data.departmentBudget
        })
      }) 
      if(!res.ok) {
        console.log(res)
        throw new Error('Failed to fetch data')
      }
     
    })}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        
        <div className="mb-4">
          <label htmlFor="department" className="mb-2 block text-sm font-medium">
            Choose department
          </label>
          <div className="relative">
            <select
              id="department"
           
              {...register('departmentId')}
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            >
              <option value="" disabled>
                Select a department
              </option>
              {departments.map((department) => (
                <option key={department.ID} value={department.ID} >
                  {department.departmentName}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Set an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
             
                {...register('departmentBudget', {required: true, valueAsNumber:true})}
                type="number"
                step="0.01"
                placeholder="Enter Birr amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Button type="submit">Set Budget</Button>
      </div>
    </form>
  );
}