import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import Question1Component from "./Question1Component";
import Question2Component from "./Question2Component";
import { useRouter } from "next/navigation";

const NasaMissionModal = (props) => {
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
        <div className="w-full h-full pb-16 bg-yellow-800 rounded-lg">
          <div className="w-full h-full bg-yellow-400 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

const Guide = (props) => {
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
        <div className="w-full h-full pb-16 bg-green-800 rounded-lg">
          <div className="w-full h-full bg-green-500 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

const BonusQuiz = (props) => {
  const { offModal } = props;
  const router = useRouter();
  const [quizStep, setQuizStep] = useState(1)

  const handlebeforeStep = () => {
    setQuizStep(prev => prev -1)
  }

  const handleNextStep = () => {
    setQuizStep(prev => prev +1)
  }

  // useEffect(() => {
  //   if (quizStep === 7) {
  //     router.push()
  //   }
  // }, [quizStep])

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
        <div className="w-full h-full pb-16 bg-blue-700 rounded-lg relative" >
          <button   className={`absolute bottom-0 right-12 w-16 h-16 bg-cover ${quizStep === 1 ? 'bg-[url("/assets/button/play_back_disabled.png")]' : 'bg-[url("/assets/button/play_back.png")]'}`}
  onClick={handlebeforeStep}
  disabled={quizStep === 1}/>
          <button className={`absolute bottom-0 right-0 w-16 h-16 ${quizStep === 7 ? 'bg-[url("/assets/button/play_arrow_disabled.png")]' : 'bg-[url("/assets/button/play_arrow.png")]'} bg-cover`} onClick={handleNextStep} disabled={quizStep >= 7} />
          <div className="w-full h-full bg-blue-500 rounded-lg flex-row justify-center items-center" >
            <div className="h-30 flex justify-center relative">
          <Image src={`/assets/bonusQuiz/bonusQuizSub.png`} width="400" height="200" className="my-8" />
          <button className="absolute w-10 h-10 right-4 top-4 bg-[url('/assets/bonusQuiz/closeButton.png')] bg-cover" onClick={offModal} />

            </div>
            <div className="flex justify-center">
          {quizStep <5 && <Image src={`/assets/bonusQuiz/bonusQuizModal-${quizStep}.png`} width="1000" height="800" className="my-8" /> }
          {quizStep === 5 && <Question1Component />}
          {quizStep === 6 && <Question2Component />}
          {quizStep >= 7 && <Image src={`/assets/bonusQuiz/bonusQuizModal-${quizStep}.png`} width="1000" height="800" className="my-8" /> }
            </div>


            
          </div>
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

const ModalComponent = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="flex justify-center items-center h-full"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      {children}
    </Modal>
  );
};

export { NasaMissionModal, Guide, BonusQuiz, Congrats, ModalComponent };
