import Image from "next/image";

import genderIcon from "./img/icon-gender.svg";
import muscleIcon from "./img/icon-muscle.svg";
import pregnancyIcon from "./img/icon-pregnancy.svg";
import raceIcon from "./img/icon-race.svg";
import ageIcon from "./img/icon-age.svg";

import patternLeft from "./img/pattern-curved-line-left.svg";
import patternRight from "./img/pattern-curved-line-right.svg";

export default function FourthRow() {
  return (
    <div className="fourth-row gap-7 md:ml-20 md:mr-20 grid rows-4">
      <div className="left-card lg:w-1/2">
        <h1 className="text-2xl font-bold mb-5">Limitations of BMI</h1>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className="flex flex-col lg:items-end lg:w-1/2">
        <Image
          priority
          src={patternRight}
          alt="Picture of a curved line from left to right"
          className="lg:block hidden mr-20 mb-10 self-right lg:items-end"
        />
      </div>
      <div className="right-cards ml-2 lg:right-4 lg:absolute relative m-2 lg:w-1/2 lg:flex lg:flex-col lg:items-center lg:gap-10">
        <div
          id="right-card-1"
          className="shadow-md rounded-2xl p-5 lg:w-[335px] lg:mx-[15px]"
        >
          <div className="heading flex gap-2">
          <Image src={genderIcon} alt="Gender icon" className="mb-3" />
          <h2 className="text-md font-bold mb-1">Gender</h2>
          </div>
          <p className="text-sm text-gray-500">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child&#39;s BMI is age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        <div className="second-row lg:flex">
          <div
            id="right-card-2"
            className="shadow-md rounded-2xl p-5 lg:w-[335px] lg:mx-[15px]"
          >
            <div className="heading flex gap-2">
            <Image src={ageIcon} alt="Age icon" className="mb-3" />
            <h2 className="text-md font-bold mb-1">Age</h2>
            </div>
            <p className="text-sm text-gray-500">
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </div>
          <div
            id="right-card-3"
            className="shadow-md rounded-2xl p-5 lg:w-[335px] lg:mx-[15px]"
          >
            <div className="heading flex gap-2">
            <Image src={muscleIcon} alt="Muscle icon" className="mb-3" />
            <h2 className="text-md font-bold mb-1">Muscle</h2>
            </div>
            <p className="text-sm text-gray-500">
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn&#39;t differentiate muscle from fat.
            </p>
          </div>
        </div>
        <div className="third-row lg:flex lg:mr-10 lg:-ml-40">
          <div
            id="right-card-4"
            className="shadow-md rounded-2xl p-5 lg:w-[335px] lg:mx-[15px]"
          >
            <div className="heading flex gap-2">
            <Image src={pregnancyIcon} alt="Pregnancy icon" className="mb-3" />
            <h2 className="text-md font-bold mb-1">Pregnancy</h2>
            </div>
            <p className="text-sm text-gray-500">

              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </div>
          <div
            id="right-card-5"
            className="shadow-md rounded-2xl p-5 lg:w-[335px] lg:mx-[15px]"
          >
            <div className="heading flex gap-2">
            <Image src={raceIcon} alt="Race icon" className="mb-3" />
            <h2 className="text-md font-bold mb-1">Race</h2>
            </div>
            <p className="text-sm text-gray-500">
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
