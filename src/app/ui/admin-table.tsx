import { ExamineReq,DeleteReq,AcceptReq } from "./buttons";





export default async function ReqTable() {
  

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Dep Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Item or Service
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Quantity
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Price
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              
                <tr
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>CS</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>Paper Towel</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>45</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>$ 4564</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>09/23/2023</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>Pending</p>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <ExamineReq  />
                      <AcceptReq />
                      <DeleteReq  />
                    </div>
                  </td>
                </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
