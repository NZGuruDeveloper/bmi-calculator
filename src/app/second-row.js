import Image from "next/image";
import eatingMan from "./img/image-man-eating.webp";
import patternLift from "./img/pattern-curved-line-left.svg";

export default function SecondRow () {
    return (
        <div className="second-row ml-20 mr-20 mb-20 flex justify-center items-center flex-wrap gap-10 sm:flex-nowrap">
          <div className="left lg:min-w-1/2">
            <Image
              priority
              src={eatingMan}
              width={1128}
              height={1066}
              alt="Picture of man eating with chopsticks"
              className=""
            />
          </div>
          <div className="right flex flex-col lg:items-end lg:w-1/2">
          <Image
              priority
              src={patternLift}
              alt="Picture of a curved line from left to right"
              className="lg:block hidden mr-20 mb-10"
            />
            <h1 className="text-4xl font-bold mb-5 lg:self-start">What your BMI result means</h1>
            <p>
              A BMI range of 18.5 to 24.9 is considered a &#39;healthy weight.&#39;
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </p>
          </div>
        </div>
    )
};