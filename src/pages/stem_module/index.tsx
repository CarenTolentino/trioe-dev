import Link from 'next/link';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

const Base = () => (
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
      <Section yPadding="pt-12 pb-0">
        <div className="container mx-auto px-4 md:px-0">
          <img
            src="/assets/images/placeholder_image.png"
            alt="Steam Module"
            className="center mx-auto w-1/2"
          />
        </div>
        <br />
        <div className="container mx-auto px-4 md:px-0">
          <h1 className="mb-4 text-3xl font-bold leading-tight text-primary-800">
            STEAM LEARNING MODULE
          </h1>

          <hr className="my-4 border-gray-300 dark:border-gray-700" />
          <div className="grid  gap-4 md:grid-cols-2">
            <div className="mb-8">
              TAs a modular electronic platform for quick prototyping, this kit
              contains 6 input modules and 6 output modules with simplify
              wiring. Each module comes with Arduino library for quick
              programming. Creat your own project!
              <ul className="list-inside list-disc">
                <li>Open-Customization and Flexibility</li>
                <li>Open-Source Foundation</li>
                <li>Diverse Connectivity Options</li>
                <li>Accessibility for Developers of All Levels</li>
                <li>Comprehensive Sensor Integration</li>
                <li>Expanding IoT Development Horizons</li>
                <li>Community Building and Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <hr className="my-4 border-gray-300 dark:border-gray-700" />
      <Section yPadding="pt-12 pb-3">
        <h1 className="container mx-auto  mb-4 px-4 text-xl font-bold leading-tight text-green-700 md:px-0">
          Sample outputs
        </h1>
        <div className="container mx-auto  grid grid-cols-2 gap-4 px-4 md:grid-cols-2 md:px-4">
          <div className="overflow-hidden rounded-lg bg-white p-0 shadow hover:bg-gray-100 dark:hover:bg-gray-800">
            <img
              className="max-h-296 h-296 mb-2 w-full object-cover"
              src="/assets/images/placeholder_image.png"
              alt="Card Image"
            />
            <div className="p-4">
              <h4 className="text-lg font-extrabold text-blue-900">
                Setup and First Boot
              </h4>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white p-0 shadow hover:bg-gray-100 dark:hover:bg-gray-800">
            <img
              className="max-h-296 h-296 mb-2 w-full object-cover"
              src="/assets/images/placeholder_image.png"
              alt="Card Image"
            />
            <div className="p-4">
              <h4 className="text-lg font-extrabold text-blue-900">
              Blinking Built-in LED
              </h4>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white p-0 shadow hover:bg-gray-100 dark:hover:bg-gray-800">
            <img
              className="max-h-296 h-296 mb-2 w-full object-cover"
              src="/assets/images/placeholder_image.png"
              alt="Card Image"
            />
            <div className="p-4">
              <h4 className="text-lg font-extrabold text-blue-900">
              Multiple Blinking of LED
              </h4>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white p-0 shadow hover:bg-gray-100 dark:hover:bg-gray-800">
            <img
              className="max-h-296 h-296 mb-2 w-full object-cover"
              src="/assets/images/placeholder_image.png"
              alt="Card Image"
            />
            <div className="p-4">
              <h4 className="text-lg font-extrabold text-blue-900">
              Adjustable BLinking Rate of LED
              </h4>
            </div>
          </div>
          
        </div>
      </Section>

      <hr className="my-4 border-gray-300 dark:border-gray-700" />
      <Section yPadding="pt-12 pb-0">
        <h1 className="container mx-auto  mb-4 px-4 text-xl font-bold leading-tight text-green-700 md:px-0">
          Programming Activity Guide
        </h1>
        <table className="container mx-auto table-auto px-4 md:px-0">
          <tbody>
            <tr>
              <td className="border border-gray-200 p-2">No.</td>
              <td className="border border-gray-200 p-2">Title</td>
              <td className="border border-gray-200 p-2">Learning Hours</td>
              <td className="border border-gray-200 p-2">Class</td>
             
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">1</td>
              <td className="border border-gray-200 p-2">
              <a href="/stem_module_act1_uploading/"><span className="underline text-blue-600">Setup and First Boot with Trioe</span></a>
              </td>
              <td className="border border-gray-200 p-2">20 Mins</td>
              <td className="border border-gray-200 p-2">Beginner</td>
          
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">2</td>
              <td className="border border-gray-200 p-2">
              <a href="/stem_module_act1_uploading/"><span className="underline text-blue-600">Soldering With Trioe</span></a>
              </td>
              <td className="border border-gray-200 p-2">20 Mins</td>
              <td className="border border-gray-200 p-2">Beginner</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">3</td>
              <td className="border border-gray-200 p-2">
              <a href="https://github.com/MJBeltran13/trioe/tree/main/examples/Smart_Building_Kit_Beginner_Blink_Act_1"><span className="underline text-blue-600">Blink Activity 1</span></a>
              </td>
              <td className="border border-gray-200 p-2">20 Mins</td>
              <td className="border border-gray-200 p-2">Beginner</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">4</td>
              <td className="border border-gray-200 p-2"> <a href="https://github.com/MJBeltran13/trioe/tree/main/examples/Smart_Building_Kit_Beginner_Blink_Act_2"><span className="underline text-blue-600">Blink Activity 2</span></a></td>
              <td className="border border-gray-200 p-2">20 Mins</td>
              <td className="border border-gray-200 p-2">Beginner</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">5</td>
              <td className="border border-gray-200 p-2"> <a href="https://github.com/MJBeltran13/trioe/tree/main/examples/Smart_Building_Kit_Beginner_Blink_Act_3"><span className="underline text-blue-600">Blink Activity 3</span></a></td>
              <td className="border border-gray-200 p-2">20 Mins</td>
              <td className="border border-gray-200 p-2">Beginner</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">6</td>
              <td className="border border-gray-200 p-2"> <a href="https://github.com/MJBeltran13/trioe/tree/main/examples/Smart_Building_Kit_Beginner_Blink_Act_4"><span className="underline text-blue-600">Blink Activity 4</span></a></td>
              <td className="border border-gray-200 p-2">20 Mins</td>
              <td className="border border-gray-200 p-2">Beginner</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <hr className="my-4 border-gray-300 dark:border-gray-700" />
      <Section yPadding="pt-12 pb-0">
        <h1 className="container mx-auto  mb-4 px-4 text-xl font-bold leading-tight text-green-700 ">
          Specifications
        </h1>
        <ul className="list-inside list-disc">
          <li>Computer or Laptop with internet connection</li>
          <li>Basic knowledge of electronics</li>
          <li>TRIOE Kit</li>
        </ul>
      </Section>
      <Section yPadding="pt-6 pb-20">
        <h1 className="container mx-auto  mb-4 px-4 text-xl font-bold leading-tight text-green-700 md:px-0">
          Requirements
        </h1>
        <ul className="list-inside list-disc">
          <li>Computer or Laptop with internet connection</li>
          <li>Basic knowledge of electronics</li>
          <li>TRIOE Kit</li>
        </ul>
      </Section>

      <div className="mx-auto mb-10 flex max-w-screen-xl flex-col items-center justify-center bg-white px-4">
        <div className="mt-5 bg-white">
          <h3 className="bg-white text-center text-2xl font-bold tracking-tight">
            Contact Us
          </h3>
          <div className="mt-2 flex flex-col gap-2 bg-white">
            <p className="text-gray-500">Phone: (043) 980 0384 local 1114</p>
            <p className="text-gray-500">Email: bucopi@g.batstate-u.edu.ph</p>
            <p className="text-gray-500">
              Address: STEER Hub Building, Batangas State University, Alangilan,
              Batangas City
            </p>
          </div>
        </div>
      </div>
    </Background>
  </div>
);

export default Base;
