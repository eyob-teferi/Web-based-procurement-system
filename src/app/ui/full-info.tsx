import { Button } from "./button";


export default async function FullInfo(){
    return(
        <div>
            <div className="flex flex-col bg-white p-8 rounded-lg">

                <div className="flex justify-between m-2">
                    <p>ID:</p>
                    <p>THE id of requsition goes here</p>
                </div>
                <div className="flex justify-between m-2">
                    <p>Department:</p>
                    <p>CS</p>
                </div>
                <div className="flex justify-between m-2">
                    <p>Name:</p>
                    <p>Paper</p>
                </div>
                <div className="flex justify-between m-2">
                    <p>Quantity:</p>
                    <p>40</p>
                </div>
                <div className="flex justify-between m-2">
                    <p>Price:</p>
                    <p>$ 4500</p>
                </div>
                <div className="flex justify-between m-2">
                    <p>Description:</p>
                    <p className="h-fit w-80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ullam maxime perspiciatis. Quos consequatur maiores in, magni nulla perspiciatis cumque repudiandae magnam soluta tempora animi, inventore excepturi quidem, placeat fugiat.</p>
                </div>
                <div className="flex justify-between m-2">
                    <p>Date:</p>
                    <p>09/23/2023</p>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
            <Button type="submit">Approve</Button>
            </div>
        </div>
    )
}