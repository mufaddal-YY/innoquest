"use client";

import React, { useState } from "react";
import Image from "next/image";
import Network from "./../../public/prof.png";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Stats = ({ homeData }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };

  return (
    <main className="bg-white items-center py-[100px]">
      <section className="container">
        {homeData.map((item) => (
          <article className="flex flex-col gap-4 lg:flex-row">
            <div className="w-full lg:w-4/12 items-center justify-center p-2">
              <VisibilitySensor partialVisibility={true} delayedCall={true}>
                {({ isVisible }) => (
                  <div className="border border-red-400 rounded-xl bg-white p-8">
                    <h1 className=" md:text-5xl lg:text-7xl text-5xl font-semibold items-center flex justify-center text-red-400">
                      {isVisible && (
                        <CountUp start={0} end={parseInt(item.network)} />
                      )}
                      <span>+</span>
                    </h1>
                    <h6 className="my-2 text-center text-lg lg:text-2xl text-gray-700 font-regular ">
                      Professional Network
                    </h6>
                    <Image
                      className="justify-center mx-auto py-6 floating duration-1000"
                      width={500}
                      height={300}
                      src={Network}
                    />
                  </div>
                )}
              </VisibilitySensor>
            </div>
            <div className="w-full lg:w-8/12 items-center">
              <div className="flex flex-wrap">
                <div className="p-2 w-full md:w-1/2 lg:w-1/2">
                  <VisibilitySensor partialVisibility={true} delayedCall={true}>
                    {({ isVisible }) => (
                      <div className="border border-red-400 bg-red-400 rounded-xl h-[150px] lg:h-[250px] flex flex-col justify-center items-center p-2">
                        {" "}
                        <h1 className="md:text-5xl lg:text-7xl text-4xl font-semibold text-white">
                          {isVisible && (
                            <CountUp
                              duration={5}
                              start={0}
                              end={parseInt(item.manYears)}
                            />
                          )}
                          <span>+</span>
                        </h1>
                        <h6 className="my-2 text-center text-sm lg:text-2xl text-gray-100 font-regular">
                          Collective man years of experience
                        </h6>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
                <div className="p-2 w-full md:w-1/2 lg:w-1/2">
                  <VisibilitySensor partialVisibility={true} delayedCall={true}>
                    {({ isVisible }) => (
                      <div className="border border-blue-600 bg-blue-600 rounded-xl h-[150px] lg:h-[250px] flex flex-col justify-center items-center p-2">
                        <h1 className="md:text-5xl lg:text-7xl text-4xl font-semibold text-white">
                          {isVisible && (
                            <CountUp
                              duration={5}
                              start={0}
                              end={parseInt(item.clients)}
                            />
                          )}
                          <span>+</span>
                        </h1>
                        <h6 className="my-2 text-center text-sm lg:text-2xl text-gray-100 font-regular">
                          Clients catered
                        </h6>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
                <div className="p-2 w-full md:w-1/2 lg:w-1/2">
                  <VisibilitySensor partialVisibility={true} delayedCall={true}>
                    {({ isVisible }) => (
                      <div className="border border-yellow-500 bg-yellow-500 rounded-xl h-[150px] lg:h-[250px] flex flex-col justify-center items-center p-2">
                        <h1 className="md:text-5xl lg:text-7xl text-4xl font-semibold text-white">
                          {isVisible && (
                            <CountUp
                              duration={5}
                              start={0}
                              end={parseInt(item.candidates)}
                            />
                          )}
                          <span>+</span>
                        </h1>
                        <h6 className="my-2 text-center text-sm lg:text-2xl text-gray-100 font-regular">
                          Candidates Recruited
                        </h6>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
                <div className="p-2 w-full md:w-1/2 lg:w-1/2">
                  <VisibilitySensor partialVisibility={true} delayedCall={true}>
                    {({ isVisible }) => (
                      <div className="border border-teal-500 bg-teal-500 rounded-xl h-[150px] lg:h-[250px] flex flex-col justify-center items-center p-2">
                        <h1 className="md:text-5xl lg:text-7xl text-4xl font-semibold text-white">
                          {isVisible && (
                            <CountUp
                              duration={5}
                              start={0}
                              end={parseInt(item.clientAssociated)}
                            />
                          )}
                          <span>%</span>
                        </h1>
                        <h6 className="my-2 text-center text-sm lg:text-2xl text-gray-50 font-regular">
                          Client associations through reference
                        </h6>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Stats;
