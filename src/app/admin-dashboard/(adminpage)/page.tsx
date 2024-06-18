import ReqTable from '@/app/ui/admin-table'
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search'
import { cookies } from 'next/headers';
import { redirect, useRouter } from 'next/navigation';
import { CustomJwtPayload } from '../login/page';
import { jwtDecode } from 'jwt-decode';

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      itemName?: string;
      page?: number;
      status?: string;
    };
  }){
    const itemName = searchParams?.itemName || '';
  const currentPage = Number(searchParams?.page) || 1;
  const status = searchParams?.status || '';
    const cookieStore = cookies()
    const jwt = cookieStore.get('jwt')?.value;
    let decodedJwt: CustomJwtPayload | null = null

    console.log(jwt)

    if(!jwt) {
        redirect('/admin-dashboard/login')
    }
    decodedJwt = jwtDecode(jwt);
    if(decodedJwt && decodedJwt.role !== 'admin'){
        redirect(`/admin-dashboard/login`) 
        }
    return(
        <>
        <div className="w-full">
        <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Admin Dashboard</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search requsitions..." />
        </div>
        </div>
        <ReqTable itemName={itemName} currentPage={currentPage} status={status}/>
        
        </>
    )
    
}


