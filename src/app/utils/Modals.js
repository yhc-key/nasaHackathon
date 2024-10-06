"use client";

import { useState } from "react";
import Image from "next/image";

const NasaMission = (props) => {
  const { offModal } = props;

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center"
      onClick={offModal}
    >
      <div className="absolute w-full h-full bg-black opacity-50 z-0"></div>
      <div
        className="w-3/4 h-3/4 p-5 z-10 bg-white rounded-lg flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full pb-16 bg-yellow-700 rounded-lg relative">
          <div className="w-full h-full px-20 py-5 bg-yellow-400 rounded-lg flex flex-col">
            <div className="text-7xl pb-5 text-white text-center">NASA MISSION</div>
            <div className="w-full h-full pb-5 flex flex-col border-dashed border-2 border-yellow-800">
              <div className="text-5xl p-3 text-center">
                You are the mayor of <a className="font-bold text-amber-800">SEOUL</a>.<br />
                <br />
                As a mayor, think of a way
                <br /> to reduce carbon dioxide emission.
                <br /> You must adjust the <a className="font-bold">ENERGY & MONEY</a>
                <br /> as follows
              </div>
              <div className="flex flex-row justify-center mt-auto">
                <div className="text-5xl p-3 text-center px-10 font-bold">
                  <a className="text-white">ENERGY</a> over 80
                </div>
                <div className="text-5xl p-3 text-center px-10 font-bold">
                  <a className="text-white">MONEY</a> over 60
                </div>
              </div>
            </div>
          </div>
          <button
            className="absolute w-16 h-16 top-4 right-4 bg-[url('/assets/cancel.png')] bg-cover rounded-lg hover:scale-110"
            onClick={offModal}
          ></button>
        </div>
      </div>
    </div>
  );
};

const Guide = (props) => {
  const { offModal } = props;

  const [selectCity, setSelectCity] = useState(true);
  const [selectInfra, setSelectInfra] = useState(false);

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center"
      onClick={offModal}
    >
      <div className="absolute w-full h-full bg-black opacity-50 z-0"></div>
      <div
        className="w-3/4 h-5/6 p-5 z-10 bg-white rounded-lg flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full pb-16 bg-green-800 rounded-lg relative">
          <div className="w-full h-full px-20 py-5 bg-green-500 rounded-lg flex flex-col">
            <div className="text-7xl pb-5 text-white text-center">GUIDE</div>
            <div className="w-full flex flex-row justify-start">
              <div
                className={`w-48 h-16 flex justify-center items-center ${
                  selectCity === true ? `bg-yellow-300` : `bg-yellow-100`
                }  border-solid border-[4px] border-yellow-800 hover:scale-105 rounded-lg`}
                onClick={() => {
                  setSelectCity(true);
                  setSelectInfra(false);
                }}
              >
                <div className="text-3xl">About City</div>
              </div>
              <div
                className={`w-48 h-16 flex justify-center items-center ${
                  selectInfra === true ? `bg-yellow-300` : `bg-yellow-100`
                } border-solid border-[4px] border-yellow-800 hover:scale-105 rounded-lg`}
                onClick={() => {
                  setSelectCity(false);
                  setSelectInfra(true);
                }}
              >
                <div className="text-3xl">About Infra</div>
              </div>
            </div>
            {selectCity && <CityComponent />}
            {selectInfra && <InfraComponent />}
          </div>
          <button
            className="absolute w-16 h-16 top-4 right-4 bg-[url('/assets/cancel.png')] bg-cover rounded-lg hover:scale-110"
            onClick={offModal}
          ></button>
        </div>
      </div>
    </div>
  );
};

const CityComponent = () => {
  return (
    <div className="w-full h-full py-12 px-20 flex flex-row justify-center items-center bg-yellow-100 border-solid border-[4px] border-yellow-800 rounded-lg">
      <Image src="/assets/earth.png" width="400" height="400" className="p-8" />
      <div className="flex flex-col justify-start items-center ml-32 w-[800px] h-full bg-white border-solid border-black border-[4px]">
        <div className="text-6xl p-8">SEOUL</div>
        <div className="text-xl text-center p-12">
          Congested roads and concrete jungles everywhere. People suffer from poor air quality and
          frequent blackouts. Without a proper energy conservation plan, it might be an
          uninhabitable city. But keep in mind that SEOUL is a bustling economic hub. What is
          eco-friendly can sometimes be a harm to the economy.
        </div>
      </div>
    </div>
  );
};

const InfraComponent = () => {
  return (
    <div className="w-full h-full p-4 flex flex-row justify-center items-center bg-yellow-100 border-solid border-[4px] border-yellow-800 rounded-lg">
      <Image src="/assets/guideimage.png" width="1379" height="534" className="w-full h-full" />
    </div>
  );
};

const BonusQuiz = (props) => {
  const { offModal } = props;

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center"
      onClick={offModal}
    >
      <div className="absolute w-full h-full bg-black opacity-50 z-0"></div>
      <div
        className="w-3/4 h-3/4 p-5 z-10 bg-white rounded-lg flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full pb-16 bg-blue-700 rounded-lg">
          <div className="w-full h-full bg-blue-500 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

const Congrats = (props) => {
  const { offModal } = props;

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center"
      onClick={offModal}
    >
      <div className="absolute w-full h-full bg-black opacity-50 z-0"></div>
      <div
        className="w-3/4 h-3/4 p-5 z-10 bg-white rounded-lg flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full pb-16 bg-pink-500 rounded-lg">
          <div className="w-full h-full bg-pink-400 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export { NasaMission, Guide, BonusQuiz, Congrats };
