/* eslint-disable react/prop-types */

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[280px] md:h-[38rem] rounded-md"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/60  rounded-md">
        <div className="text-center md:w-5/6 ">
          <h1 className="text-xl md:text-4xl font-semibold text-amber-50 lg:text-5xl ">
            {text}
          </h1>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Slide;
