import Image from "next/image";
import Logowhite from "@/public/images/Logowhite.png";

export default function Home() {
  return (
    <div
      className="items-center .justify-items-center min-h-screen p-4 bg-cover bg-center .bg-contain "
      style={{ backgroundImage: "url(/images/bg.jpg)" }}
      // style={{
      //   backgroundImage: "url(/images/bg.jpg)",
      //   [`@media (min-width: 1024px)`]: {
      //     backgroundImage: "url(/images/bg-landscape.jpg)",
      //   },
      // }}
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
