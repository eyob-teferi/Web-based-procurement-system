import FullInfo from "@/app/ui/full-info";
import { lusitana } from '@/app/ui/fonts';



export default async function Page(){
    return(
        <>
            <div className="flex w-full items-center justify-between mb-8">
            <h1 className={`${lusitana.className} text-2xl`}>Details</h1>
            </div>
            <FullInfo />
        </>
    )
}