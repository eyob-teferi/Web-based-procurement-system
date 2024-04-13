

import { lusitana } from '@/app/ui/fonts'
import ReqForm from '@/app/ui/requsition-form'

export default async function Page(){
    const departments=[
        {
            name:"CS",
            id:1
        },
        {
            name:"Geology",
            id:2
        }
    ]

    
    return(

        <div className="w-full">
        <div className="mb-6 flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Request an Item or a Service</h1>
        </div>
        <ReqForm departments={departments} />
        </div>
        
    )
}


