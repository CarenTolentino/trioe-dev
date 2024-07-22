import Link from 'next/link';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
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
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Trioe
              </span>
            </Link>
            <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
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
              className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
              id="navbar-sticky"
            >
              <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
                <li>
                  <Link
                    href="#"
                    className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Learn
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Section>

      <Section yPadding="pt-12 pb-0">
        <div className="container mx-auto px-4 md:px-0">
          <h1 className="mb-4 text-3xl font-bold leading-tight">About Us</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="mb-8">
              The TRIOE project is dedicated to providing a highly adaptable,
              open-source IoT circuit board designed to cater to the specific
              needs of developers and makers. Our primary goals include:
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
            <div className="mb-8">
              TRIOE, an open-source customizable circuit board for IoT
              enthusiasts and students. It &apos s designed to be flexible and
              adaptable for a wide range of IoT applications. An open-source
              design for experimentation and innovation. Equipped with various
              sensors and connectivity options including Wi-Fi, and soon
              Bluetooth and Ethernet. Highly customizable with a comprehensive
              GitHub guide designed to assist programmers of all skill levels.
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h1 className="mb-4 text-3xl font-bold leading-tight">Our Team</h1>
        <div className="container mx-auto grid  gap-3 md:grid-cols-2 lg:grid-cols-2 ">
          {[1, 2, 3, 4, 5].map((item) => {
            let title;
            let description;
            switch (item) {
              case 1:
                title = 'Dr. Tirso A. Ronquillo';
                description = 'University President';
                break;
              case 2:
                title = 'Engr. Albertson Amante';
                description =
                  'VP for Research, Development and Extension Services';
                break;
              case 3:
                title = 'Engr. John Carlo Catilo';
                description = 'University Research Associate';
                break;
              case 4:
                title = 'Engr. Marc James Beltran';
                description = 'University Research Associate';
                break;
              case 5:
                title = 'Engr. John Paul Heje';
                description = 'University Research Associate';
                break;
              default:
                title = `Card ${item}`;
                description =
                  'Lorem ipsum dolor sit are quos similique assumenda atque, distinctio placeat.';
            }

            return (
              <div
                key={item}
                className="max-h-50 mx-auto grid w-full grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-white p-1 shadow-md dark:border-gray-700 dark:bg-gray-800 "
                // style={{ maxWidth: '280px' }}
              >
                <img
                  src={`/assets/images/team/president.jpg`}
                  alt={title}
                  className="size-full rounded-full object-cover"
                />

                <div className="gap-2">
                  <h5 className=" mb-1 mt-6 text-2xl font-bold tracking-tight">
                    {title}
                  </h5>
                  <p className="text-gray-500">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <div className="mx-auto mb-10 flex max-w-screen-xl flex-col items-center justify-center bg-white p-4 dark:bg-gray-50">
        <div className="mt-5">
          <h3 className="text-center text-2xl font-bold tracking-tight ">
            Contact Us
          </h3>
          <div className="mt-2 flex flex-col gap-2">
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
