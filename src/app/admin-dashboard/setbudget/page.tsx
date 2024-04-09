import SetBudget from "@/app/ui/setBudget"
import { lusitana } from '@/app/ui/fonts';


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
        <div>
            <div className="flex w-full items-center justify-between mb-8">
            <h1 className={`${lusitana.className} text-2xl`}>Set Budget</h1>
            </div>
            <SetBudget departments={departments} />
        </div>
    )
}