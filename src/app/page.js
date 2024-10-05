"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading]= useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])


  return (
    <div className="bg-customBackGroundColor bg-cover bg-center w-screen h-screen flex justify-center items-center">
      <Image src='/assets/energyGuardians.png' width="1000" height="1000"  />
      {loading ?? <div className="absolute bottom-10 right-10 text-white">loading...</div> }
    
    </div>
  );
}
