import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="flex items-center justify-between bg-[#1d6192] p-4 text-white sticky top-0 z-10">
            <h1 className="font-bold text-2xl">TraceKart</h1>
            <div className="flex space-x-4 ">
                <Link to="/" className="hover:underline decoration-[#f0c929]">Home</Link>
                <Link to="/about" className="hover:underline decoration-[#f0c929]">About</Link>
                <Link to="/contact" className="hover:underline decoration-[#f0c929]">Contact</Link>
            </div>
                <Button title="Report Lost Item" style="bg-[#f0c929] text-black px-4 py-2 rounded-md hover:bg-[#e0b81a]" /> 
        </nav>
        
    );
 }
 export default Navbar;