// import { getAllRequistions } from "@/utils/get-all-requistions";
import { redirect } from "next/navigation";

import { cookies } from 'next/headers'

import { RequisitionTable } from "@/app/lib/definition"
import { DeleteDeptAdmin } from "@/app/ui/buttons";

export interface DeptAdmin {
  id:string;
email: string;
first_name:string;
  last_name: string;
  departmentId: string;
  departmentName: string;
 
}


async function getAllDeptAdmin(): Promise<DeptAdmin[]> {
    const cookieStore = cookies()
    const jwt = cookieStore.get('jwt')?.value;
    if (jwt) {
      const res = await fetch(`http://localhost:1323/admin/depAdmins`, {
        headers: {
          Cookie: `jwt=${jwt};`,
        },
      });
  
      if (!res.ok) {
        // Handle error
      }
  
      const deptAdmins: DeptAdmin[] = await res.json();
  
      if (deptAdmins.length > 0) {
        // Fetch department details for each departmentAdmin
        const deptAdminsWithDeptNamePromises = deptAdmins.map(async (admin) => {
          const departmentRes = await fetch(`http://localhost:1323/admin/department/${admin.departmentId}`, {
            headers: {
                Cookie: `jwt=${jwt};`,
            },
          });
  
          if (!departmentRes.ok) {
            // Handle error
          }
  
          const department: { departmentName: string } = await departmentRes.json();
          admin.departmentName = department.departmentName
  
          return admin;
        });
  
        // Wait for all department details to be fetched
        return Promise.all(deptAdminsWithDeptNamePromises);
      }
    }
    return [];
  }


export default async function ReqTable({
  itemName,
  currentPage,
  status
}: {
  itemName: string;
  currentPage: number;
  status: string;
}) {
  const deptAdmins = await getAllDeptAdmin();
 if (deptAdmins.length == 0)  {
    return <div className="flex justify-center">There are no admins, please create one</div>
 }

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  First Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                 LastName
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  DepartmentName
                </th>
                {/* <th scope="col" className="px-3 py-5 font-medium">
                  Price
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th> */}
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {deptAdmins.map((admin, index) => {
                return <tr key={index}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <p>{admin.first_name}</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <p>{admin.last_name}</p>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <p>{admin.email}</p>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <p>{admin.departmentName}</p>
                </td>
                {/* <td className="whitespace-nowrap px-3 py-3">
                  <p>$ {requistion.price}</p>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <p>{new Date(requistion.createdAt).toLocaleDateString()}</p>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <p>{requistion.status}</p>
                </td> */}
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    {/* <ExamineReq  reqId={requistion.id}/> */}
                    {/* <AcceptReq /> */}
                    <DeleteDeptAdmin  id={admin.id}/>
                  </div>
                </td>
              </tr>
              })}
               
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
