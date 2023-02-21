import {Link} from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import {TbMovie} from "react-icons/tb";
import {FiBarChart2} from "react-icons/fi";
import {GiNewspaper} from "react-icons/gi";
const Navbar = ()=>{
    return <div className="flex bg-white justify-between px-6 py-4 fixed w-full">
       <div className="text-3xl font-extrabold">NEWS</div>
       <div className="flex space-x-6 text-2xl">    
            <Link className="hover:scale-110 transition-all duration-150"   to="/"><AiOutlineHome size={30} className="inline align-middle pb-1 " /> Home</Link>
            <Link className="hover:scale-110 transition-all duration-150"   to="/"><TbMovie size={30} className="inline align-middle pb-1 " /> Video</Link>
            <Link className="hover:scale-110 transition-all duration-150"   to="/"><FiBarChart2 size={30} className="inline align-middle pb-1 " /> Pools</Link>
            <Link className="hover:scale-110 transition-all duration-150"   to="/"><GiNewspaper size={30} className="inline align-middle pb-1 " /> Megazine</Link>
       </div>
       <div className="flex">
            <input type="text" name="" placeholder="Search.." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="" />
            <button onClick={()=>alert("Tensu")} type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span className="sr-only">Search</span>
            </button>
       </div>
       
    </div>
}

export default Navbar