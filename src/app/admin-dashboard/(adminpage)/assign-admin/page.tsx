import CreateDepAdmin from '@/app/ui/createdepadmin';
import { lusitana } from '@/app/ui/fonts';


export default async function Page(){
    return(
        <div>
            <div className="flex w-full items-center justify-between mb-8">
            <h1 className={`${lusitana.className} text-2xl`}>Create Department Admin</h1>
            </div>
            <CreateDepAdmin />
        </div>
    )
}