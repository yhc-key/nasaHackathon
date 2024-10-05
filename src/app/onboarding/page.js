"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Onboarding() {
  const [openingNumber, setOpenNumber] = useState(1)
  const router = useRouter()
  
  useEffect(() => {
    if (openingNumber < 6) {
      const timer = setTimeout(() => {
        setOpenNumber(prev => prev + 1);
      }, 2500); // 2.5초마다 실행
      return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
    } else {
      // openingNumber가 6이 되면 'map' 페이지로 이동
      router.push('/map');
    }
  }, [openingNumber, router]);


  return <>
    <div className="bg-customBackGroundColor bg-cover bg-center w-screen h-screen flex justify-center items-center ">
      <Image src='/assets/energyGuardians.png' width="1000" height="1000" className="absolute opacity-50"  />
      <Image src='/assets/character.png' width="400" height="1000" className="z-10 left-80" />
      <Image src={`/assets/opening/opening-${openingNumber}.png`} width="800" height="1000" className="z-10 mb-[400px] opacity-0 transition-opacity duration-1000 ease-in-out" onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
 />
    </div>
  </>
}