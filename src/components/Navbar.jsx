import Button from "./Button";

function Navbar(){
    return(
        <nav className="flex items-center justify-between bg-[#1d6192] p-4 text-white">
            <h1 className="font-bold text-2xl">TraceKart</h1>
            <div className="flex space-x-4 ">
                <a href="/"className="hover:underline decoration-[#f0c929]">Home</a>
                <a href="/about" className="hover:underline decoration-[#f0c929]">About</a>
                <a href="/contact" className="hover:underline decoration-[#f0c929]">Contact</a>
            </div>
                <Button title="Report Lost Item" style="bg-[#f0c929] text-black px-4 py-2 rounded-md hover:bg-[#e0b81a]" /> 
        </nav>
        
    );
 }
 export default Navbar;