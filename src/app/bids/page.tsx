import Bid from "../ui/bid";
import { lusitana } from "../ui/fonts";
import Search from "../ui/search";

const data=[
    {
        name:"paper",
        quantity:45,
        description:"We want 4 dozen of paper"
    },
    {
        name:"paper",
        quantity:45,
        description:"We want 4 dozen of paper"
    },
    {
        name:"paper",
        quantity:45,
        description:"We want 4 dozen of paper"
    },
    {
        name:"paper",
        quantity:45,
        description:"We want 4 dozen of paper"
    },
    {
        name:"paper",
        quantity:45,
        description:"We want 4 dozen of paper"
    },
    {
        name:"paper",
        quantity:45,
        description:"We want 4 dozen of paper"
    },
    {
        name:"paper",
        quantity:45,
        description:"We want 4 dozen of paper"
    },
    {
        name:"paper",
        quantity:45,
        description:"We want 4 dozen of paper"
    },
    {
        name:"paper",
        quantity:45,
        description:"We want 4 dozen of paper"
    },
    {
        name:"paper",
        quantity:45,
        description:"We want 4 dozen of paper"
    }
]
export default async function Page(){
    return(
        <>
            
        <div className="w-full">
        <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Bids</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search bids..." />
        </div>
        <Bid data={data} />
        </div>
        </>

    )
}