'use client'
import { Button } from '@/app/ui/button';
import { UserCircleIcon } from '@heroicons/react/16/solid';
import { useForm } from 'react-hook-form';
import { Department, getAllDepartments } from '../admin-dashboard/(adminpage)/setbudget/page';
import useSWR from 'swr'
import   {fetchWithCredentials}  from '@/utils/fetcher';
import toast from 'react-hot-toast/headless';
  
  
export default function CreateDepAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const url = 'http://localhost:1323/admin/departments';

  
  const { data, error, isLoading } = useSWR(url, fetchWithCredentials); 

   if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  console.log("data",data)
  const filteredData = data.filter(data => data.departmentAdminId == null)
  console.log(filteredData)
  return (
    <form onSubmit={handleSubmit(async (data) => {
      console.log(data)
    
      const res = await fetch(`http://localhost:1323/admin/createdepartmentadmin/${data.departmentId}`, {
        method: 'POST',
        credentials:'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }) 
      if(!res.ok) {
        console.log(res)
       toast.error("something went wrong")
      }
   
  toast.success("admin has been created!")
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
              {filteredData.map((department:Department) => (
                <option key={department.id} value={department.id} >
                  {department.departmentName}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

      <div className="mb-4">
        <label htmlFor="fname" className="mb-2 block text-sm font-medium">
          First Name
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="fname"
              {...register('first_name', {required: true})}    
                        type="text"
              required
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="lname" className="mb-2 block text-sm font-medium">
          Last Name
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="lname"
              {...register('last_name', {required: true})} 
                           type="text"
              required
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>
      </div>

      

      <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative mt-2 rounded-md">
              <div className="relative">
                  <input
                      className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                      id="email"
                      type="email"
                      {...register('email', {required: true})}
                    
                    
                  />
            </div>
          </div>
        </div>


        <div className="mt-4">
          <label
            className="mb-2 block text-sm font-medium"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="password"
              type="password"
              {...register('password', {required: true})}      
              minLength={6}
            />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label
            className="mb-2 block text-sm font-medium"
            htmlFor="confirm_password"
          >
           Confirm Password
          </label>
          <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="confirm_password"
              type="password"
              {...register('confirm_password', {required: true})}
             
              minLength={6}
            />
            </div>
          </div>
        </div>
        
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}