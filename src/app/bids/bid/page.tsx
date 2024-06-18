import BidForm from "@/app/ui/bid-form";
import { lusitana } from "@/app/ui/fonts";
import { getAllBids } from "../page";



export default async function Page(){
    // const data = await getAllBids();
    return(

        <div className="w-full">
        <div className="mb-6 flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Bid</h1>
        </div>
        {/* <BidForm data={data} /> */}
        </div>
    )
}