import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search'
import ReqTable from '../../ui/dep-table';
import { cookies } from 'next/headers';
import { CustomJwtPayload } from '@/app/admin-dashboard/login/page';
import { jwtDecode } from 'jwt-decode';
import { redirect } from 'next/navigation';



export default async function Page(){
    const cookieStore = cookies()
    const rawJwt = cookieStore.get('jwt')?.value
    let decodedJwt: CustomJwtPayload | null = null

    if(!rawJwt) {
        redirect('/department-dashboard/login')
    }
    
    decodedJwt = jwtDecode(rawJwt);
    
    
    return(
        <>
            
        <div className="w-full">
        <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Department Dashboard</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search requsitions..." />
        </div>
        </div>
        <ReqTable departmentId={decodedJwt?.id!}/>
        </>

    )
}