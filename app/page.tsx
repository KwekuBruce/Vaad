"use client"
import Image from "next/image";
import Logowhite from "@/public/images/Logowhite.png";
import React from "react";

export default function Home() {
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="items-center .justify-items-center min-h-screen p-4 bg-cover  bg-center sm:bg-contain"
      style={{ backgroundImage: isMobile ? "url(/images/bg.jpg)" : "url(/images/bg2.jpg)",
       }}
    
    >
        <nav className="">
          <Image
            // className="dark:invert"
            src={Logowhite}
            alt={"logo"}
            width={100}
            height={100}
          />
        </nav>
      <main className=".border .border-red-500 flex flex-col z-[1000] fixed top-1/2  justify-center  ">
    
          <span className="uppercase mb-6 text-red-500 font-extrabold">The website is under construction</span>
          <h1 className=".scroll-m-20 text-white text-2xl font-extrabold .tracking-tight md:text-5xl ">
            Coming Soon!!!
          </h1>
    <div></div>
      </main>
    </div>
  );
}
