import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer class="bg-[#1d6192] flex items-center justify-center text-white mt-10 p-6">
          <div class="">
            <h1 class="flex justify-center my-4 text-2xl font-bold">TraceKart</h1>
            <p class="flex justify-center">Helping people to reconnect with their belongings</p>
             <ul class="flex justify-between w-100 my-4 font-bold">
              <li><Link to="/" className="hover:bg-[#f0c929]">Home</Link></li>
              <li><Link to="/about" className="hover:bg-[#f0c929]" >About</Link></li>
              <li><Link to="/contact" className="hover:bg-[#f0c929]">Contact</Link></li>
              <li><Link to="/services" className="hover:bg-[#f0c929]">Terms of service</Link></li>
             </ul>
             <p class="mb-4 text-gray-400 flex justify-center">© 2026 TraceKart. All rights reserved.</p>
          </div>
      </footer>
    )
}
export default Footer;