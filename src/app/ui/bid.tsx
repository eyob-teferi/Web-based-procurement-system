import { lusitana } from "./fonts";


export default async function Bid(){
    return(
        <>
            <div className="p-4 w-72 h-48 rounded-lg bg-white mt-6">
                <div className="">
                    <p className={`${lusitana.className}`} ><span className="font-semibold">Name:</span> Paper</p>
                    <p className={`${lusitana.className}`}><span className="font-semibold">Quantity:</span> 45</p>
                    <p className={`${lusitana.className} mb-4`}><span className="font-semibold">Description:</span> We want 4 dozen of paper</p>
                    <hr className="mb-4"></hr>
                    <div className="flex justify-end">
                     <button className="w-20 h-7 rounded-lg text-white bg-blue-500 hover:bg-blue-400">Bid</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}