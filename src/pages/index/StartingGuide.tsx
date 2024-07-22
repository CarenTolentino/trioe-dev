import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const StartingGuide = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-11 grid grid-cols-1 gap-4 p-8 md:grid-cols-2">
      <div className="col-span-1 rounded-lg bg-gray-100 p-2">
        <h2 className="mb-4 text-2xl font-bold">
          <span className="text-blue-900">STARTING GUIDE</span>
        </h2>
        <p className="text-gray-600">
          TRIOE, an open-source customizable circuit board for IoT enthusiasts
          and students. It&#39;s designed to be flexible and adaptable for a
          wide range of IoT applications.
        </p>
        <div id="accordion-collapse" className="mt-4">
          {/* Accordion 1 */}
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 rounded-t-xl border border-b-0 border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
              onClick={() => toggleAccordion(1)}
              aria-expanded={activeIndex === 1}
              aria-controls="accordion-collapse-body-1"
            >
              <span className="text-blue-500">01 Hardware Setup</span>
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
              <p className="mb-2 text-black">
                Step 1: Gather Your Tools TRIOE Kit:
              </p>
              <p className="text-black">Purchase a TRIOE Kit or TRIOE Slice.</p>
              <p className="mb-2 text-black">Step 2: USB to Serial Adapter:</p>
              <p className="text-black">
                Get a USB to Serial Adapter for connecting the TRIOE Slice to
                your computer.
              </p>
            </div>
          </CSSTransition>

          {/* Accordion 2 */}
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 border border-b-0 border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
              onClick={() => toggleAccordion(2)}
              aria-expanded={activeIndex === 2}
              aria-controls="accordion-collapse-body-2"
            >
              <span className="text-blue-500">02 Software Setup</span>
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
              <p className="mb-2 text-black">Step 3: Download Arduino IDE:</p>
              <p className="text-black">
                Go to Arduino IDE and download the latest version.
              </p>
              <p className="mb-2 text-black">
                Step 4: Install ESP8266 Board Support:
              </p>
              <p className="text-black">
                Open Arduino IDE. Go to &quot;File&quot; &gt;
                &quot;Preferences.&quot; Add this URL to &quot;Additional Boards
                Manager URLs&quot;:
                <code>
                  http://arduino.esp8266.com/stable/package_esp8266com_index.json
                </code>
                Go to &quot;Tools&quot; &gt; &quot;Board&quot; &gt; &quot;Boards
                Manager&quot; and install &quot;esp8266&quot; package.
              </p>
            </div>
          </CSSTransition>

          {/* Accordion 3 */}
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 border border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
              onClick={() => toggleAccordion(3)}
              aria-expanded={activeIndex === 3}
              aria-controls="accordion-collapse-body-3"
            >
              <span className="text-blue-500">03 Write your first program</span>
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
              <p className="mb-2 text-black">Step 5: Connect TRIOE:</p>
              <p className="text-black">
                Connect the TRIOE to your computer using the USB to Serial
                Adapter. Choose Board and Port: In Arduino IDE, go to
                &quot;Tools&quot;&gt; &quot;Board&quot; and select your TRIOE
                model. Choose the correct port under &quot;Tools&quot;&gt;
                &quot;Port.&quot;
              </p>
              <p className="mb-2 text-black">
                Step 6: Upload Code: Click the &quot;Upload&quot; button to send
                the code to the TRIOE.
              </p>
              <p className="text-black">
                Step 7: Explore and Have Fun! Learn as you go
              </p>
            </div>
          </CSSTransition>
        </div>
      </div>
      <div className="aspect-w-1 aspect-h-1">
        <model-viewer
          alt=""
          src="/assets/images/TRIOE_glb.glb"
          ar
          shadow-intensity="4"
          camera-controls
          touch-action="pan-y"
          style={{ width: '100%', height: '100%' }}
          exposure={0.5}
          camera-orbit="0deg 70deg 0.2m"
        ></model-viewer>
      </div>
    </div>
  );
};

export default StartingGuide;
