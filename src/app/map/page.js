"use client";

import { useState } from "react";
import { NasaMission, Guide, BonusQuiz, Congrats } from "@/app/utils/Modals";

export default function Map() {
  const [modalState, setModalState] = useState(0);

  const offModal = () => setModalState(0);

  return (
    <>
      <div className="bg-[url('/assets/mainMap.png')] bg-cover bg-center w-screen h-screen">
        <div className="absolute top-10 right-10 bg-slate-300 w-[400px] h-30 rounded-lg opacity-80">
          <div className="m-4 mx-6 text-black text-lg font-bold ">
            <div className="flex justify-between gap-4">
              <div className="h-8">Energy</div>
              <div className="w-[260px] h-8 bg-slate-200 rounded-xl">
                <div className="w-40 h-full bg-green-500 rounded-xl" />
              </div>
            </div>
            <div className="mt-2 flex justify-between gap-4">
              <div className="h-8">Money</div>
              <div className="w-[260px] h-8 bg-slate-200 rounded-xl">
                <div className="w-40 h-full bg-yellow-500 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="absolute top-40 left-60 w-12 h-12 bg-[url('/assets/grayPlace.png')] bg-cover rounded-lg text-white" />
      <button className="absolute bottom-40 left-[100px] w-12 h-12 bg-[url('/assets/grayPlace.png')] bg-cover rounded-lg text-white" />
      <button className="absolute top-80 right-60 w-12 h-12 bg-[url('/assets/greenPlace.png')] bg-cover rounded-lg text-white" />
      <button className="absolute top-[120px] right-[800px] w-12 h-12 bg-[url('/assets/greenPlace.png')] bg-cover rounded-lg text-white" />
      <button className="absolute bottom-[1300px] left-[120px] w-12 h-12 bg-[url('/assets/yellowPlace.png')] bg-cover rounded-lg text-white" />
      <button className="absolute top-[170px] right-[860px] w-12 h-12 bg-[url('/assets/yellowPlace.png')] bg-cover rounded-lg text-white" />
      <button className="absolute bottom-[120px] right-60 w-12 h-12 bg-[url('/assets/bluePlace.png')] bg-cover rounded-lg text-white" />
      <button className="absolute bottom-[120px] left-60 w-12 h-12 bg-[url('/assets/bluePlace.png')] bg-cover rounded-lg text-white" />
      <button
        className="absolute right-20 top-60 w-40 h-40 bg-yellow-400 hover:scale-110"
        onClick={() => setModalState(1)}
      />
      <button
        className="absolute right-20 bottom-40 w-40 h-20 bg-green-400 hover:scale-110"
        onClick={() => setModalState(2)}
      />
      <button className="absolute left-20 top-60 w-40 h-20 bg-gray-500 hover:scale-110" />
      <button
        className="absolute left-20 bottom-40 w-40 h-40 bg-blue-500 hover:scale-110"
        onClick={() => setModalState(3)}
      />

      <button
        className="absolute left-60 bottom-0 w-40 h-20 bg-pink-400 hover:scale-110"
        onClick={() => setModalState(4)}
      />

      {modalState === 1 && <NasaMission offModal={offModal}></NasaMission>}
      {modalState === 2 && <Guide offModal={offModal}></Guide>}
      {modalState === 3 && <BonusQuiz offModal={offModal}></BonusQuiz>}
      {modalState === 4 && <Congrats offModal={offModal}></Congrats>}
    </>
  );
}
