import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url('/assets/mainMap.png')] bg-cover bg-center w-screen h-screen">
      <Link href="/line">
        <button>Go to line Page</button>
      </Link>
    </div>
  );
}
