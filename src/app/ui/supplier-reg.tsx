import { lusitana } from '@/app/ui/fonts';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';

export default function SupplierRegForm() {
  return (
    
    <form className="space-y-3 m-8 ">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Supplier Registration
        </h1>
        <div className="w-full">

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
          <label htmlFor="Cname" className="mb-2 block text-sm font-medium">
            Company Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="Cname"
                name="Compname"
                type="text"
                required
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="doc" className="mb-2 block text-sm font-medium">
          BuisnessLicense
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="doc"
                name="Documents"
                type="file"
                required
                placeholder="In PDF format"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="Phone" className="mb-2 block text-sm font-medium">
            Phone
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="Phone"
                name="Phone"
                type="tel"
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

          <div className="mt-4 mb-4">
          <label htmlFor="Country" className="mb-2 block text-sm font-medium">
            Country
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="Country"
                name="Country"
                type="text"
                required
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

          <div className="mb-4">
          <label htmlFor="Region" className="mb-2 block text-sm font-medium">
            Region
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="Region"
                name="Region"
                type="text"
                required
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="City" className="mb-2 block text-sm font-medium">
            City
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="City"
                name="City"
                type="text"
                required
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>


        </div>
        <RegistorButton />
      </div>
    </form>
  );
}

function RegistorButton() {
  return (
    <Button className="mt-4 w-full">
      Register <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}