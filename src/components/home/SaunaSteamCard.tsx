import man from "../../assets/Images/young-calm-man-relaxing-in-sauna-in-spa.png";
import woman from "../../assets/Images/girl_relaxing.png";

const SaunaSteamCard = () => {
  return (
    <div className="relative flex flex-col md:flex-row gap-4 bg-white p-4 rounded-2xl shadow-lg">
      {/* Left Section (Sauna Content + Woman Image) */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* Sauna Content (50% Height) */}
        <div className="flex flex-col justify-center bg-yellow-200 p-6 rounded-xl text-center w-full h-1/2">
          <h2 className="text-2xl font-semibold">Sauna / Steam</h2>
          <p className="text-gray-700 mt-2">Up to 1 hour = Rs. 1000/-</p>
          <p className="text-gray-500 text-sm">
            Sauna/Steam is separated for male and female
          </p>
        </div>

        {/* Image Container (50% Height) */}
        <div className="w-full h-1/2">
          <img
            src={woman}
            alt="Female in steam bath"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right Section (Man Image) */}
      <div className="w-full md:w-3/4 relative">
        <img
          src={man}
          alt="Male in sauna"
          className="rounded-xl object-cover h-full w-full"
        />
      </div>

      {/* Centered "Male & Female" Text */}
      <div className="absolute top-[45%] right-[58%] sm:top-[40%] sm:right-[55%]">
        <svg
          preserveAspectRatio="xMidYMid meet"
          data-bbox="30 26.999 140 146"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="30 26.999 140 146"
          height="180"
          width="180"
          data-type="color"
          role="presentation"
          aria-hidden="true"
          aria-label=""
        >
          <defs>
            <style>
              {`#comp-luurkmrs4 svg [data-color="1"] {fill: #4F7934;}`}
            </style>
          </defs>
          <g>
            <path
              fill="#4F7934"
              d="M88.303 34.072c4.954-9.43 18.439-9.43 23.394 0 3.336 6.35 11.117 8.88 17.543 5.707 9.544-4.713 20.453 3.224 18.926 13.768-1.029 7.1 3.78 13.727 10.842 14.942 10.488 1.804 14.655 14.645 7.229 22.276-5 5.14-5 13.331 0 18.469 7.426 7.632 3.259 20.473-7.229 22.277-7.062 1.215-11.871 7.842-10.842 14.942 1.527 10.544-9.382 18.481-18.926 13.768-6.426-3.174-14.207-.642-17.543 5.707-4.955 9.429-18.44 9.429-23.394 0-3.336-6.349-11.117-8.881-17.543-5.707-9.544 4.713-20.453-3.224-18.926-13.768 1.029-7.1-3.78-13.727-10.842-14.942-10.488-1.804-14.655-14.645-7.23-22.277 5-5.138 5-13.33 0-18.468-7.425-7.632-3.258-20.473 7.23-22.277 7.062-1.215 11.87-7.842 10.842-14.942-1.527-10.544 9.382-18.48 18.926-13.768 6.426 3.174 14.207.642 17.543-5.707Z"
              data-color="1"
            ></path>
          </g>
        </svg>
      </div>

      <div className="absolute top-[53%] right-[55%] sm:top-[49%] sm:right-[54%] ] transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 py-16 text-lg font-bold">
        Male
        <br /> & <br />
        Female
      </div>
    </div>
  );
};

export default SaunaSteamCard;
