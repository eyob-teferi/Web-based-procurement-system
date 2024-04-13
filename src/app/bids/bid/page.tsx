import BidForm from "@/app/ui/bid-form";
import { lusitana } from "@/app/ui/fonts";


const data=[
    {
        name:"paper",
        quantity:45,
        description:"We want 4 dozen of paper"
    }
]

export default async function Page(){
    return(

        <div className="w-full">
        <div className="mb-6 flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Bid</h1>
        </div>
        <BidForm data={data} />
        </div>
    )
}