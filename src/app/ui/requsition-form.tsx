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

export default function ReqForm({departments}){
    return(
        <form >
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
        
        <div className="w-full">
          <div>
            <label 
              className="mb-2 block text-sm font-medium"
              htmlFor="department"
            >
              Department
            </label>
            <div className="relative">
            <select
              id="department"
              name="departmentId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a Department
              </option>
              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>
            

              <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
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
                type="text"
                name="name"
                placeholder="Item or service"
                required
                
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
                id="Quantity"
                type="number"
                name="Quantity"
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
                name="Price"
                placeholder="price"
                required
              
                
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
                name="description"
                
                
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