"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "./img/logo.svg";

import SecondRow from "./second-row";
import ThirdRow from "./third-row";
import FourthRow from "./fourth-row";

export default function Home() {
  const [units, setUnits] = useState("metric");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [bmi, setBMI] = useState(0);
  const [classification, setClassification] = useState("");
  const [range, setRange] = useState();

  const checkClassification = () => {
    if (bmi > 0) {
      let adjBmi = bmi * 10;
      console.log("weight: " + weight, "Height :" + height);
      console.log(bmi + "adjusted bmi: " + adjBmi);
      if (adjBmi < 18.5) {
        setClassification("Underweight.");
      } else if (adjBmi >= 18.5 && adjBmi <= 24.9) {
        setClassification("Healthy weight.");
      } else if (adjBmi >= 25 && adjBmi <= 29.9) {
        setClassification("Overweight.");
      } else if (adjBmi > 30) {
        setClassification("Obese.");
      } else {
        setClassification("Not defined");
      }
    }
  };

  const calculateBMI = () => {
    let weightInKg, heightInMeters;

    if (units === "imperial") {
      // Convert weight from stones and pounds to kilograms.
      weightInKg = (weight.stones * 14 + weight.pounds) / 2.204622622;

      // Convert height from feet and inches to meters.
      heightInMeters = (heightFeet * 12 + heightInches) * 0.0254;
    } else {
      weightInKg = weight;
      heightInMeters = height / 100;
    }

    const bmi = weightInKg / heightInMeters ** 2;
    //console.log(weightInKg, heightInMeters, bmi);
    setBMI(bmi);
    checkClassification();
  };

  useEffect(() => {
    calculateBMI();
    //if (bmi > 0) console.log(bmi.toFixed(1));
  }, [weight, heightFeet, heightInches]);

  return (
    <main className="grid gap-10 grid-rows-4 ml-4">
      <div className="columns-1">
        <div className="first-row md:columns-1 mr-8 mb-8 w-full">
          <div className="left box-border flex flex-col justify-center bg-gradient-to-r from-sky-50 to-blue-300 rounded-b-lg lg:w-4/5 w-full">
            <div className="lg:w-2/5 lg:p-10 md:w-full md:h-full md:p-4 ">
            <Image
              priority
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="mb-10 mt-10 "
            />
              <h1 className="text-4xl font-bold mb-5">
                Body Mass Index Calculator
              </h1>
              <p>
                Better understand your weight in relation to your height using
                our body mass index (BM) calculator. While BMI is not the sole
                determinant of a healthy weight, it offers a valuable starting
                point to evaluate your overall health and well-being.
              </p>
            </div>

            <div className="right calculator rounded bg-white p-5 shadow-2xl w-2/7 lg:justify-items-center lg:absolute lg:right-3 relative m-2">
              <form>
                <fieldset className="columns-2 p-2">
                  <legend className="text-xl">Enter your details below</legend>
                  <div className="">
                    <input
                      type="radio"
                      id="metric"
                      name="metric"
                      value={"Metric"}
                      checked={units === "metric"}
                      onChange={() => {
                        setUnits("metric");
                      }}
                    />
                    <label htmlFor="metric" className="m-2">
                      Metric
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="imperial"
                      name="imperial"
                      value={"Imperial"}
                      checked={units === "imperial"}
                      onChange={() => {
                        setUnits("imperial");
                      }}
                    />
                    <label htmlFor="imperial" className="m-2">
                      Imperial
                    </label>
                  </div>
                </fieldset>
                {units === "metric" ? (
                  <div className="columns-2 p-2">
                    <div>
                      <input
                        type="number"
                        id="height"
                        name="height"
                        placeholder="Height (cm)"
                        onChange={(e) => {
                          setHeight(e.target.value);
                        }}
                        className="mr-2 border-2 border-gray-300 rounded p-2"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        id="weight"
                        name="weight"
                        placeholder="Weight (kg)"
                        onChange={(e) => {
                          setWeight(e.target.value);
                        }}
                        className="mr-2 border-2 border-gray-300 rounded p-2"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="columns-2 p-2">
                    <input
                      type="text"
                      placeholder="Weight (stones)"
                      value={weight.stones}
                      onChange={(e) => {
                        setWeight({ ...weight, stones: e.target.value });
                      }}
                      className="mr-2 mb-2 border-2 border-gray-300 rounded p-2"
                    />
                    <input
                      type="text"
                      placeholder="Weight (pounds)"
                      value={weight.pounds}
                      onChange={(e) => {
                        setWeight({ ...weight, pounds: e.target.value });
                      }}
                      className="mr-2 border-2 border-gray-300 rounded p-2"
                    />
                    <input
                      type="text"
                      placeholder="Height (feet)"
                      value={heightFeet}
                      onChange={(e) => {
                        setHeightFeet(e.target.value);
                      }}
                      className="mr-2 mb-2 border-2 border-gray-300 rounded p-2"
                    />
                    <input
                      type="text"
                      placeholder="Height (inches)"
                      value={heightInches}
                      onChange={(e) => {
                        setHeightInches(e.target.value);
                      }}
                      className="mr-2 border-2 border-gray-300 rounded p-2"
                    />
                  </div>
                )}
              </form>

              {!bmi ? (
                <div
                  className="box-border rounded-full rounded-l-md bg-blue-500 columns-1 p-7 m-2 text-white"
                  id="output"
                >
                  <h2 className="text-2xl">Welcome!</h2>
                  <p className="text-sm italic ">
                    Enter your height and weight and you&#39;ll see your BMI result
                    here
                  </p>
                </div>
              ) : (
                <div className="box-border rounded-full rounded-l-md bg-blue-500 columns-1 p-7 m-2 text-white" id="output">
                  <div>
                    <p>Your BMI is...</p>
                    <h2 className="text-2xl">{bmi.toFixed(1)}</h2>
                  </div>
                  <div>
                    <p>Your BMI suggests you&#39;re {classification}</p>
                    {console.log(classification)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <SecondRow />
        <ThirdRow />
        <FourthRow />
      </div>
    </main>
  );
}
