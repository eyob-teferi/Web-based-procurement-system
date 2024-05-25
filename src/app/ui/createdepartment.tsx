'use client'
import { Button } from '@/app/ui/button';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast/headless';
  
  
export default function CreateDep() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  return (
    <form onSubmit={handleSubmit(async (data) => {
        console.log(data)
        
        // const formData = new FormData(); 
  
        // formData.append('department_name', data.email);
        // formData.append('department_budget', data.password);
        const res = await fetch(`http://localhost:1323/admin/createdepartment` , {
          method: 'POST',
          credentials:'include',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        }) 
        if(!res.ok) {
       toast.error("something went wrong",{  position: 'top-center'})
        }

        toast.success("department created!",{  position: 'top-center'})
       
      })}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        



 

      <div className="mb-4">
        <label htmlFor="departmentname" className="mb-2 block text-sm font-medium">
          Department Name
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="departmentname"
              {...register('department_name', {required: true})}
              type="text"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium"
            htmlFor="budget"
          >
            Budget
          </label>
          <div className="relative mt-2 rounded-md">
              <div className="relative">
                  <input
                      className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                      id="budget"
                      type="text"
                      {...register('department_budget', {required: true, valueAsNumber:true})}
                     
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