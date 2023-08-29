

import Link from "next/link"

export default function Header2(){

return (
    <>
 

<div className="bg-cyan-800  navbar text-white">
  <div className="navbar-start">
  <img src="/portal.png" alt="Logo" class="h-24 w-48 mr-2"></img>
    <Link href="/" className=" normal-case text-4xl  ">EduPortal</Link> 
  </div>
  
  <button>

  
  <Link href="/" className="text-base border-2 p-2 ml-[700px] rounded-lg"> SignOut </Link> 
  </button>
</div>


       </>
)

}