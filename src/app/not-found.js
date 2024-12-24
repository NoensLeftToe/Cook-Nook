import Link from "next/link"

export default function NotFound(){
    return( 
    <div>
        <h4>Page Not Found</h4>
        <Link href={"/"} >Go To Home</Link>
      
     </div>
      );
}