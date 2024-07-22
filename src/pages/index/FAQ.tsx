import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CSSTransition } from 'react-transition-group';

import { Section } from '@/layout/Section';

interface FAQProps {}

const FAQ: React.FC<FAQProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section>
      <div className="col-span-1 rounded-lg bg-gray-100 p-4">
        <h2 className="mb-4 text-2xl font-bold">
          <span className="text-blue-900">FREQUENTLY ASKED QUESTION</span>
        </h2>
        <p className="text-gray-600">
          TRIOE, an open-source customizable circuit board for IoT enthusiasts
          and students. It&apos;s designed to be flexible and adaptable for a
          wide range of IoT applications.
        </p>
        <div id="accordion-collapse" className="mt-4">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 rounded-t-xl border border-b-0 border-gray-200  p-5 font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
              onClick={() => toggleAccordion(1)}
              aria-expanded={activeIndex === 1}
              aria-controls="accordion-collapse-body-1"
            >
              <span className="font-bold text-blue-500">
                How do I program the TRIOE Slice
              </span>
              <svg
                className={`size-3 shrink-0 ${activeIndex === 1 ? 'rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <CSSTransition
            in={activeIndex === 1}
            timeout={300}
            classNames="accordion"
            unmountOnExit
          >
            <div
              id="accordion-collapse-body-1"
              className="border border-b-0 border-gray-200 p-5 dark:border-gray-700 dark:bg-gray-900"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <p className="text-black">
                You can program the TRIOE Slice using the Arduino IDE,
                PlatformIO, or other compatible development environments. First,
                install the necessary board support in the IDE and then write
                your code using C++.
              </p>
            </div>
          </CSSTransition>
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 border border-b-0 border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
              onClick={() => toggleAccordion(2)}
              aria-expanded={activeIndex === 2}
              aria-controls="accordion-collapse-body-2"
            >
              <span className="font-bold text-blue-500">
                How do I power the TRIOE Slice?
              </span>
              <svg
                className={`size-3 shrink-0 ${activeIndex === 2 ? 'rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <CSSTransition
            in={activeIndex === 2}
            timeout={300}
            classNames="accordion"
            unmountOnExit
          >
            <div
              id="accordion-collapse-body-2"
              className="border border-b-0 border-gray-200 p-5 dark:border-gray-700 dark:bg-gray-900"
              aria-labelledby="accordion-collapse-heading-2"
            >
              <p className="text-black">
                It can be powered through a USB to Serial Adapter, a dedicated
                power supply, or from the 3.3V pin on some development boards.
                Ensure that the power source provides the required voltage and
                current.
              </p>
            </div>
          </CSSTransition>
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 border border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
              onClick={() => toggleAccordion(3)}
              aria-expanded={activeIndex === 3}
              aria-controls="accordion-collapse-body-3"
            >
              <span className="font-bold text-blue-500">
                What are GPIO pins, and how do I use them?
              </span>
              <svg
                className={`size-3 shrink-0 ${activeIndex === 3 ? 'rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <CSSTransition
            in={activeIndex === 3}
            timeout={300}
            classNames="accordion"
            unmountOnExit
          >
            <div
              id="accordion-collapse-body-3"
              className="border border-t-0 border-gray-200 p-5 dark:border-gray-700 dark:bg-gray-900"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <p className="mb-2 text-black">
                General Purpose Input/Output (GPIO) pins can be used to control
                external components like LEDs, sensors, and actuators. You can
                set them as input or output in your code to read or send
                signals.
              </p>
            </div>
          </CSSTransition>
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 border border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
              onClick={() => toggleAccordion(4)}
              aria-expanded={activeIndex === 4}
              aria-controls="accordion-collapse-body-3"
            >
              <span className="font-bold text-blue-500">
                Can I connect the TRIOE Slice to Wi-Fi??
              </span>
              <svg
                className={`size-3 shrink-0 ${activeIndex === 4 ? 'rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <CSSTransition
            in={activeIndex === 4}
            timeout={300}
            classNames="accordion"
            unmountOnExit
          >
            <div
              id="accordion-collapse-body-3"
              className="border border-t-0 border-gray-200 p-5 dark:border-gray-700 dark:bg-gray-900"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <p className="mb-2 text-black">
                Yes, the it has built-in Wi-Fi capabilities. You can connect to
                a Wi-Fi network in your code, allowing your device to
                communicate with other devices and the internet.
              </p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
