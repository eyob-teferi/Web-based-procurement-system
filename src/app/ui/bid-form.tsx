'use client'
import {
    CurrencyDollarIcon,
    UserCircleIcon,
  } from '@heroicons/react/24/outline';
import { Button } from './button';
import {  RequisitionType } from '../bids/page';
import { useForm } from 'react-hook-form';

export default function BidForm({data}: {data: RequisitionType}){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    return(
        <div>
            <form onSubmit={handleSubmit(async (formdata) => {
formdata.requistionId = data.id
const formData = new FormData(); 
formData.append('price', formdata.price)
formData.append('requistionId', data.id)
formData.append("imageFile", formdata.imageFile[0])
console.log(formdata.imageFile[0])

      
      const res = await fetch('http://localhost:1323/user/createbid' , {
        method: 'POST',
     
        credentials:'include',
        body: formData
      }) 
      if(!res.ok) {
        console.log(res)
        throw new Error('Failed to fetch data')
      }
      //todo
      console.log('success toast todo')

    })}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        
      <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name of Item or Service
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={data.itemName}
                placeholder="Item Service Name"
                disabled
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        
        <div className="mb-4">
          <label htmlFor="quantity" className="mb-2 block text-sm font-medium">
            Quantity
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="quantity"
                name="quantity"
                type="number"
                defaultValue={data.quantity}
                placeholder="Enter Quantity"
                disabled
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
              
            </div>
          </div>
        </div>


        <div className="mb-4">
          <label htmlFor="price" className="mb-2 block text-sm font-medium">
            Price offer
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="price"
                
                type="number"
                step="0.01"
                {...register('price', {required: true, valueAsNumber: true})}
                placeholder="Enter Birr amount"
                required
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>



        {/* <div className="mb-4">
          <label htmlFor="range" className="mb-2 block text-sm font-medium">
            Delivery range
          </label>
          <div className="relative">
            <select
              id="range"
              name="range"
             
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            >
                <option value="" disabled>
                    Select range
                </option>
              
                <option value="less than 1 week">
                  Less than 1 week
                </option>
                <option value="less than 2 week">
                  Less than 2 weeks
                </option>
                <option value="less than 3 week">
                  Less than 3 weeks
                </option>
                <option value="less than 4 week">
                  Less than 4 weeks
                </option>
                <option value="greater than 4 weeks">
                  Greater than 4 weeks
                </option>
              
            </select>
            
          </div>
        </div> */}



        <div className="mb-4">
          <label htmlFor="doc" className="mb-2 block text-sm font-medium">
            Your documents
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="doc"
                {...register('imageFile', {required: true})}
                type="file"
                placeholder="In PDF format"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
              
            </div>
          </div>
        </div>



        <div className="mb-4">
              <label htmlFor="description" className="mb-2 block text-sm font-medium">
                Description of your product or service
              </label>
              <textarea
                id="description"
                name="description"
               
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-6 text-sm outline-2 placeholder:text-gray-500"
              ></textarea>
        </div>

        <div className="mt-6 flex justify-end gap-4">
        <Button type="submit">Submit Bid</Button>
        </div>

      </div>
      
    </form>
        </div>
    )
}