"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  NasaMissionModal,
  Guide,
  BonusQuiz,
  Congrats,
} from "@/app/utils/Modals";

const GreenBeltComponent = ({ onBuild, onCancel }) => {
  return (
    <div className="absolute top-[150px] right-[600px] w-[300px] h-[150px] bg-[#f5e6c4] rounded-xl shadow-lg p-4 text-center">
      <div className="text-lg font-bold text-green-700 mb-2">GREEN BELT</div>
      <div className="text-sm font-semibold mb-4">
        ENERGY +20 &nbsp;&nbsp;&nbsp; MONEY -30
      </div>
      <div className="flex justify-between">
        <button
          className="w-1/2 p-2 bg-yellow-300 hover:bg-yellow-400 rounded-l-md font-semibold"
          onClick={onBuild}
        >
          BUILD
        </button>
        <button
          className="w-1/2 p-2 bg-gray-300 hover:bg-gray-400 rounded-r-md font-semibold"
          onClick={onCancel}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default function Map() {
  const [modalState, setModalState] = useState(0);

  const offModal = () => setModalState(0);

  const [showComponent, setShowComponent] = useState(false);
  const [buttonImage, setButtonImage] = useState("/assets/greenPlace.png");

  const handleButtonClick = () => {
    if (buttonImage !== "/assets/builtGreenPlace.png") {
      setShowComponent(true);
    }
  };

  const handleBuildClick = () => {
    setButtonImage("/assets/builtGreenPlace.png");
    setShowComponent(false);
  };

  const handleCancelClick = () => {
    setShowComponent(false);
  };

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
      <button
        className="absolute top-[120px] right-[800px] w-12 h-12 bg-cover rounded-lg text-white"
        style={{ backgroundImage: `url(${buttonImage})` }}
        onClick={handleButtonClick}
      />
      {showComponent && (
        <GreenBeltComponent
          onBuild={handleBuildClick}
          onCancel={handleCancelClick}
        />
      )}
      <button className="absolute bottom-[1300px] left-[120px] w-12 h-12 bg-[url('/assets/yellowPlace.png')] bg-cover rounded-lg text-white" />
      <button className="absolute top-[400px] right-[700px] w-12 h-12 bg-[url('/assets/yellowPlace.png')] bg-cover rounded-lg text-white" />
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

      {modalState === 1 && (
        <NasaMissionModal offModal={offModal}></NasaMissionModal>
      )}
      {modalState === 2 && <Guide offModal={offModal}></Guide>}
      {modalState === 3 && <BonusQuiz offModal={offModal}></BonusQuiz>}
      {modalState === 4 && <Congrats offModal={offModal}></Congrats>}
    </>
  );
}
