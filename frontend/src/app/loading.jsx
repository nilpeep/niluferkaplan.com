"use client";
import { usePathname } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loading() {
  const pathname = usePathname();

  const count = {
    "/": 1,
    "/about": 2,
    "/blog": 6,
    "/login": 1,
    "/register": 1,
  }[pathname];

  const width = {
    "/": 500,
    "/about": 200,
    "/blog": 300,
    "/login": 400,
    "/register": 400,
  }[pathname];

  const height = {
    "/": 500,
    "/about": 200,
    "/blog": 300,
    "/login": 400,
    "/register": 500,
  }[pathname];

  return(
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px'}}>
       <Skeleton style={{margin:'10px'}} inline={true} borderRadius='8px' baseColor="#202020" highlightColor="#444" count={count} width={width} height={height}></Skeleton>
    </div>
  )
}
export default Loading;
