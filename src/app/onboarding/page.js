import Image from "next/image";

export default function Onboarding() {
  return <>
    <div className="bg-customBackGroundColor bg-cover bg-center w-screen h-screen flex justify-center items-center ">
      <Image src='/assets/energyGuardians.png' width="1000" height="1000" className="opacity-50"  />
      <Image src='/assets/character.png' width="400" height="1000" className="absolute left-80" />
    </div>
  </>
}