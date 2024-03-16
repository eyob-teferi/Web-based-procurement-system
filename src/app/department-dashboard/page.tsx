import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search'
import ReqTable from '../ui/dep-table';


export default async function Page(){
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
        <ReqTable />
        </>

    )
}