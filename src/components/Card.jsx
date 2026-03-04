import Button from "./Button";
import image from "./profilepic1.jpeg";


function Card(){
    return(
        <div className="border rounded-2xl shadow-xl w-96 border-none bg-[#222f54] ">
            <img src={image} alt="house keys" className="w-full h-full"/>
                <div className="flex flex-col items-start p-4">
                     <h2 className="text-xl font-bold text-white">House Keys</h2>
                    <p className="text-white">Central Park, near the fountain</p>
                    <p className="text-white">2/18/2026</p>
                    <hr />
                    <p className="text-green-300 my-3">Contact: 12334567</p>
                </div>
            <div className="p-4">
                <Button title="Claim Item" style="bg-[#f0c929] text-white px-4 py-2 rounded-md w-full" />
            </div>
            
        </div>
    )
}
export default Card;    