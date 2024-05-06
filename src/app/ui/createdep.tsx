
  import { Button } from '@/app/ui/button';
  
  
  
  export default function CreateDep() {
  
    return (
      <form>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          

        <div className="mb-4">
          <label htmlFor="fname" className="mb-2 block text-sm font-medium">
            First Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="fname"
                name="fname"
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
                name="lname"
                type="text"
                required
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="Uname" className="mb-2 block text-sm font-medium">
            User Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="Uname"
                name="Uname"
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
                        name="email"
                        required
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
                name="password"
                required
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