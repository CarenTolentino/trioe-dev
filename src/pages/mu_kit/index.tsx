import Link from 'next/link';
import { useState } from 'react';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

const Base = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/assets/images/Trioe_pict/3.png',
    '/assets/images/Trioe_pict/4.png',
    '/assets/images/Trioe_pict/mu_kit4.png',
    '/assets/images/Trioe_pict/mu_kit3.png',
    // Add more images as needed
  ];

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="text-gray-600 antialiased">
      <Background color="bg-gray-100">
        <Section yPadding="py-6">
          <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-gradient-to-r from-[#446EAD] via-[#70A4DA] to-[#F0F4F5] drop-shadow-md dark:border-gray-600 dark:bg-gradient-to-r">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
              <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="/assets/images/New_trioe_small.png"
                  className="size-8"
                  alt="Trioe Logo"
                />
                <span className="self-center whitespace-nowrap text-2xl  font-bold text-blue-950  dark:text-white">
                  TRIOE
                </span>
              </Link>
              <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                <button
                  type="button"
                  className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Community
                </button>
                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                  aria-controls="navbar-sticky"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="size-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="hidden w-full  md:order-1 md:flex md:w-auto"
                id="navbar-sticky"
              ></div>
            </div>
          </nav>
        </Section>

        <Section yPadding="pt-10">
          <h1 className=" mt-12 text-center text-3xl font-bold leading-tight text-gray-700">
            LEARNING KIT
          </h1>
          <div className="container mx-auto py-20 md:px-0">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-4 shadow-md">
                <div className="flex items-center justify-between"></div>
                <div className="relative mt-2">
                  <img
                    className="w-full rounded-lg shadow-md"
                    src="/assets/images/Trioe_pict/trioe_kit_mu.png"
                    alt="Trioe kit"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4"></div>
                </div>
              </div>

              <div className="mb-2 leading-tight text-black">
                <h2 className="mt-10 text-6xl font-bold ">
                  <span className="text-primary-600">Standard</span>
                  <br />
                  <span className="text-primary-700 ">MU KIT</span>
                </h2>
                <p>
                  A comprehensive learning tools & kit designed for advanced
                  knowledge expertise required for DIY projects where users are
                  working with various frequencies of technology and exploring
                  diverse wavelengths of innovation.
                </p>
                <br />
                <button
                  type="button"
                  className="mt-10 inline-block rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 ease-linear hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-800 dark:focus:ring-blue-800"
                  onClick={togglePopup}
                >
                  What&apos;s inside?
                </button>
                {isPopupOpen && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 pb-40"
                    onClick={closePopup}
                  >
                    <div
                      className="mt-32 max-h-full w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-4  shadow-md dark:bg-gray-800"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          What&apos;s inside?
                        </h3>
                        <button
                          type="button"
                          className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={closePopup}
                        >
                          <svg
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="mt-4 flex justify-center">
                        <img
                          src={images[currentImageIndex]}
                          alt="MU Kit"
                          className="mx-auto max-w-xl rounded-lg shadow-md"
                        />
                      </div>
                      <div className="mt-4 flex justify-center space-x-4">
                        <button
                          type="button"
                          className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-400"
                          onClick={handlePreviousImage}
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-400"
                          onClick={handleNextImage}
                        >
                          Next
                        </button>
                      </div>

                      <h5 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                        Package include:
                      </h5>
                      <table className="mt-4 w-full border-collapse border-gray-300">
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2 font-bold">
                              Quantity
                            </td>
                            <td className="border px-4 py-2 font-bold">Name</td>
                            <td className="border px-4 py-2 font-bold">
                              Specifications
                            </td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">1</td>
                            <td className="border px-4 py-2">
                              Trioe - Main Board
                            </td>
                            <td className="border px-4 py-2">
                              Microcontroller Board
                            </td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">5</td>
                            <td className="border px-4 py-2">
                              Trioe - General Purpose Slice
                            </td>
                            <td className="border px-4 py-2">Custom pcb</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">1</td>
                            <td className="border px-4 py-2">
                              BME280 Sensor (I2C)
                            </td>
                            <td className="border px-4 py-2">generic</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">1</td>
                            <td className="border px-4 py-2">
                              0.96 SSD1306 OLED Display
                            </td>
                            <td className="border px-4 py-2">
                              Generic, 128x64
                            </td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">1</td>
                            <td className="border px-4 py-2">Servo Motor</td>
                            <td className="border px-4 py-2">SG90</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">1</td>
                            <td className="border px-4 py-2">
                              Ultrasonic Sensor
                            </td>
                            <td className="border px-4 py-2">HCSR04</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">1</td>
                            <td className="border px-4 py-2">
                              470 Ohm Resistors
                            </td>
                            <td className="border px-4 py-2">
                              Through Hole; 1/4 watt
                            </td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">1</td>
                            <td className="border px-4 py-2">
                              10k Ohm Resistors
                            </td>
                            <td className="border px-4 py-2">
                              Through Hole; 1/4 watt
                            </td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">1</td>
                            <td className="border px-4 py-2">LED Assorted</td>
                            <td className="border px-4 py-2">
                              5mm Red Green Blue
                            </td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">10</td>
                            <td className="border px-4 py-2">
                              2-pin tactile push buttons
                            </td>
                            <td className="border px-4 py-2">Generic</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">2</td>
                            <td className="border px-4 py-2">
                              10k Potentiometer
                            </td>
                            <td className="border px-4 py-2">Generic</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">1</td>
                            <td className="border px-4 py-2">
                              Soldering Iron with, stand and lead
                            </td>
                            <td className="border px-4 py-2">
                              60W - temp adjustable
                            </td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">1</td>
                            <td className="border px-4 py-2">
                              Small Side Cutter
                            </td>
                            <td className="border px-4 py-2">Generic/Plato</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">3</td>
                            <td className="border px-4 py-2">
                              1x20 dupont cables
                            </td>
                            <td className="border px-4 py-2">
                              100mm, male to male <br></br>female to female{' '}
                              <br></br>
                              female to male
                            </td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">8</td>
                            <td className="border px-4 py-2">1x40 headers</td>
                            <td className="border px-4 py-2">
                              2.54mm, male and female
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                      <button
                        type="button"
                        className="mt-4 inline-flex justify-center rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 ease-linear hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-800 dark:focus:ring-blue-800"
                        onClick={closePopup}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Section>
      </Background>
    </div>
  );
};

export default Base;
