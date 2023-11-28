import Image from "next/image";
import healthyEatingIcon from "./img/icon-eating.svg";
import exerciseIcon from "./img/icon-exercise.svg";
import sleepIcon from "./img/icon-sleep.svg";

export default function ThirdRow () {
    return (
        <div className="third-row p-7 sm:ml-4 sm:mr-4 mb-20 bg-gradient-to-r from-transparent to-blue-50 rounded-b-lg flex justify-center items-center flex-wrap gap-10 sm:p-2 md:flex-nowrap">
          <div className="first-col min-w-1/2">
            <Image src={healthyEatingIcon} alt="Healthy eating icon" className="mb-7" />
            <h2 className="text-xl font-bold mb-5">Healthy eating</h2>
            <p>
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
          <div className="secnd-col items-center">
            <Image src={exerciseIcon} alt="Regular exercise icon" className="mb-7" />
            <h2 className="text-xl font-bold mb-5">Regular exercise</h2>
            <p>
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
          <div className="third-col">
            <Image src={sleepIcon} alt="Adequate sleep icon" className="mb-7" />
            <h2 className="text-xl font-bold mb-5">Adequate sleep</h2>
            <p>
              {" "}
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </div>
    )
};