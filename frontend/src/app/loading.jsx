"use client";
import { usePathname } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loading() {
  const pathname = usePathname();
  console.log(pathname);

  const count = {
    "/": 1,
    "/about": 2,
    "/blog": 6,
  }[pathname];

  const width = {
    "/": 500,
    "/about": 200,
    "/blog": 300,
  }[pathname];

  const height = {
    "/": 500,
    "/about": 200,
    "/blog": 300,
  }[pathname];

  return(
    <div style={{display:'flex'}}>
       <Skeleton count={count} width={width} height={height}></Skeleton>
    </div>
  )
}
export default Loading;
