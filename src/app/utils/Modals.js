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

export { NasaMissionModal, Guide, BonusQuiz, Congrats };
