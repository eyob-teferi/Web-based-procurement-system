

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
        <>
            <ReqForm departments={departments} />
        </>
    )
}


