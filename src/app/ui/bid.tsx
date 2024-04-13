import { lusitana } from "./fonts";


export default async function Bid({data}){
    return(
        <div className="grid grid-cols-3 gap-4 ml-6 mt-6 ">
            {data.map((data)=>{
                return(
                    <div className="p-4 w-72 h-48 rounded-lg bg-white mt-6">
                    <div className="">
                    <p className={`${lusitana.className}`} ><span className="font-semibold">Name:</span> {data.name}</p>
                    <p className={`${lusitana.className}`}><span className="font-semibold">Quantity:</span> {data.quantity}</p>
                    <p className={`${lusitana.className} mb-4`}><span className="font-semibold">Description:</span> {data.description}</p>
                    <hr className="mb-4"></hr>
                    <div className="flex justify-end">
                     <a href="/bids/bid"><button className="w-20 h-7 rounded-lg text-white bg-blue-500 hover:bg-blue-400">Bid</button></a>
                    </div>
                    
                </div>
            </div>
                )
            })}
            
        </div>
    )
}