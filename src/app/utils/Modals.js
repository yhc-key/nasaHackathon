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
            className="absolute w-16 h-16 top-4 right-4 bg-[url('/assets/cancel.png')] bg-cover rounded-lg"
            onClick={offModal}
          ></button>
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

export { NasaMission, Guide, BonusQuiz, Congrats };
