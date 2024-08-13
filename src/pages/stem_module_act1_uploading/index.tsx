import Link from 'next/link';
import { useState } from 'react';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

const images = [
  '/assets/images/stem_mdl_act1_picts/1.png',
  '/assets/images/stem_mdl_act1_picts/2.png',
  '/assets/images/stem_mdl_act1_picts/3.png',
  '/assets/images/stem_mdl_act1_picts/4.png',
  '/assets/images/stem_mdl_act1_picts/5.png',
];

const images_2 = [
  '/assets/images/stem_mdl_act1_picts/6.png',
  '/assets/images/stem_mdl_act1_picts/7.png',
  '/assets/images/stem_mdl_act1_picts/8.png',
  '/assets/images/stem_mdl_act1_picts/9.png',
  '/assets/images/stem_mdl_act1_picts/10.png',
];

const Base = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage2 = () => {
    setCurrentIndex2(
      (prevIndex2) => (prevIndex2 - 1 + images_2.length) % images_2.length,
    );
  };

  const nextImage2 = () => {
    setCurrentIndex2((prevIndex2) => (prevIndex2 + 1) % images_2.length);
  };

  const openModal = (image?: string) => {
    if (image) {
      setModalImage(image);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
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
                <span className="self-center whitespace-nowrap text-2xl font-bold text-blue-950 dark:text-white">
                  TRIOE
                </span>
              </Link>
              <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
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
                className="hidden w-full md:order-1 md:flex md:w-auto"
                id="navbar-sticky"
              ></div>
            </div>
          </nav>
        </Section>

        <Section yPadding="pt-12 pb-0">
          <br />
          <div className="container mx-auto px-4 md:px-0">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-primary-800">
              Setup And First Boot
            </h1>
            <hr className="my-4 border-gray-300 dark:border-gray-700" />
            <div className="grid gap-4 md:grid-cols-1">
              <div className="mb-8">
                If you've just received your TRIOE Smart Home Learning Kit,
                start by installing the Arduino IDE on your computer. This is
                where you'll type and send code to the Arduino using a USB
                cable.
              </div>
            </div>
          </div>
        </Section>

        <Section yPadding="pt-12 pb-3">
          <hr className="my-4 border-gray-300 dark:border-gray-700" />

          <div className="items-center p-1">
            <div className="relative w-full">
              <img
                src={images[currentIndex]}
                alt={`Step ${currentIndex + 1}`}
                className="cursor-pointer rounded-2xl object-none"
                style={{ width: 'auto', maxWidth: '100%' }}
                onClick={() => openModal(images[currentIndex])}
              />
            </div>
            <div className="mt-4 flex w-full justify-between">
              <button
                className="rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={prevImage}
              >
                Previous
              </button>
              <button
                className="rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={nextImage}
              >
                Next
              </button>
            </div>
          </div>
          <div className="container">
            <div className="gap-4">
              <div className="p-4">
                <h3 className="text-xl font-bold">
                  Step 1: Download & Install the Arduino IDE
                </h3>
                <ol className="ml-4 list-decimal">
                  <li>
                    Go to the{' '}
                    <b>
                      <a
                        href="https://www.arduino.cc/en/software"
                        className="text-blue-700 hover:underline"
                      >
                        Arduino Software page
                      </a>
                    </b>
                  </li>
                  <li>
                    Scroll down to find the section for your operating system.
                  </li>
                  <li>
                    Click on the appropriate link to download the installer.
                  </li>
                  <li>
                    Once downloaded, run the installer and follow the on-screen
                    instructions to complete the installation.
                  </li>
                </ol>
                <h3 className="text-xl font-bold">
                  Step 2: Launch the Arduino IDE
                </h3>
                <p>
                  Before you can communicate with your Arduino board, you Here
                  are the steps to install the necessary drivers:
                </p>
                <h3 className="text-xl font-bold">
                  Step 3: Install CP210x Driver
                </h3>
                <ol className="ml-4 list-decimal">
                  <li>
                    <b>
                      <a
                        href="https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads"
                        target="_blank"
                        className="text-blue-700 hover:underline"
                      >
                        Download the Windows CP210x Driver
                      </a>
                    </b>{' '}
                    from the official website or the link provided in your kit
                    documentation.
                  </li>
                  <li>Once downloaded, unzip the file if necessary.</li>
                  <li>
                    Run the driver installer and follow the on-screen
                    instructions to complete the installation.
                  </li>
                </ol>
                Now that you've installed the Arduino IDE and the necessary
                driver, you're ready to start coding and uploading sketches to
                your TRIOE board!
              </div>
            </div>
          </div>
        </Section>

        <Section yPadding="pt-12 pb-3">
          <hr className="my-4 border-gray-300 dark:border-gray-700" />
          <div className="items-center p-1">
            <div className="relative w-full">
              <img
                src={images_2[currentIndex2]}
                alt={`Step ${currentIndex2 + 1}`}
                className="cursor-pointer rounded-2xl object-none"
                style={{ width: 'auto', maxWidth: '100%' }}
                onClick={() => openModal(images_2[currentIndex2])}
              />
            </div>
            <div className="mt-4 flex w-full justify-between">
              <button
                className="rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={prevImage2}
              >
                Previous
              </button>
              <button
                className="rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={nextImage2}
              >
                Next
              </button>
            </div>
          </div>
          <div className="container">
            <div className="gap-4">
              <div className="p-4">
                <h3 className="text-xl font-bold">
                  Step 4: Connect Your Arduino Board
                </h3>
                <ol className="ml-4 list-decimal">
                  <li>Ensure all connections are properly secured.</li>
                  <li>
                    Go to Tools &gt; Board and select ESP32 Dev Module (TRIOE).
                  </li>
                  <li>
                    Go to Tools &gt; Port and select the port to which your
                    TRIOE board is connected.
                  </li>
                </ol>
                <h3 className="text-xl font-bold">
                  Step 5: Select Your Board and Port
                </h3>
                <p>
                  Open the Arduino IDE to enter the world of science and
                  creativity. This software will be your workspace for
                  programming your Arduino.
                </p>
                <h3 className="text-xl font-bold">
                  Step 6: Verify and Upload the Sketch
                </h3>
                <ol className="ml-4 list-decimal">
                  <li>
                    Click the checkmark icon (✔) in the upper left corner of
                    the Arduino IDE to verify (compile) your sketch. This checks
                    for any errors in your code.
                  </li>
                  <li>
                    Once verified successfully, click the right arrow icon (→)
                    next to the checkmark to upload the sketch.
                  </li>
                  <li>
                    You should see status messages in the bottom console of the
                    IDE indicating the progress of the upload.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </Section>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative rounded-lg bg-white p-2 shadow-lg lg:p-12">
              <button
                className="absolute right-2 top-2 text-gray-600"
                onClick={closeModal}
              >
                ✕
              </button>
              <img
                src={modalImage}
                alt="Full Screen"
                className="max-h-screen max-w-full"
              />
            </div>
          </div>
        )}

        <Section yPadding="pt-12 pb-0">
          <br />
          <div className="container mx-auto px-4 md:px-0">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-primary-800">
              Troubleshooting
            </h1>
            <hr className="my-4 border-gray-300 dark:border-gray-700" />

            <div className="grid gap-4 md:grid-cols-1">
              <div className="mb-8">
                <p>Arduino bootloader doesn't respond</p>
                <p>
                  If you get the following error message avrdude:{' '}
                  <span className="rounded bg-red-200 font-bold text-red-600  ">
                    {' '}
                    stk500_recv(): not in sync
                  </span>{' '}
                  or{' '}
                  <span className="rounded bg-red-200 font-bold text-red-600  ">
                    {' '}
                    avrdude: stk500_recv(): programmer is not responding{' '}
                  </span>
                  , that means that the Arduino bootloader is not
                  responding.stk500_getsync(): not in sync or avrdude:
                  stk500_recv(): programmer is not responding, that means that
                  the Arduino bootloader is not responding.
                </p>
                <div className="mx-auto max-w-[800px]">
                  <img
                    src="/assets/images/stem_mdl_act1_picts/11.png"
                    className="mx-auto"
                    alt="Arduino disconnected"
                  />
                </div>
                <p>
                  This error can be caused by a lot of issues. Check the
                  following:
                </p>
                <ul className="ml-4 list-disc">
                  <li>Is the correct Arduino Board selected?</li>
                  <li>Is the correct Serial Port selected?</li>
                  <li>Is the correct driver installed?</li>
                  <li>
                    Is something connected to the Reset pin or pressing the
                    reset button?
                  </li>
                  <li>
                    Try disconnecting all connected shields, jumper wires and
                    components
                  </li>
                  <li>
                    Is the chip inserted into the Arduino properly? (If you
                    built your own Arduino or have burned the bootloader on
                    yourself)
                  </li>
                  <li>
                    Does the chip have the correct bootloader on it? (If you
                    built your own Arduino or have burned the bootloader on
                    yourself)
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-8">
              <p>Can't open serial port device</p>
              <p>
                If you get an error like{' '}
                <span className="rounded bg-red-200 font-bold text-red-600  ">
                  ser_open(): can't open device
                </span>{' '}
                it likely means your Arduino got disconnected from USB somehow
              </p>
              <div className="mx-auto max-w-[800px]">
                <img
                  src="/assets/images/stem_mdl_act1_picts/12.png"
                  className="mx-auto"
                  alt="Arduino disconnected"
                />
              </div>
              <p>
                This error can be caused by a few possible issues. Check the
                following:
              </p>
              <ul className="ml-4 list-disc">
                <li>Is the correct Serial Port selected?</li>
                <li>Is the correct driver installed?</li>
                <li>Try unplugging/replugging the USB cable</li>
                <li>Try another USB cable or USB port</li>
                <li>
                  Your computer's USB system may have crashed. Shutdown your
                  computer, disconnect power, wait 3 minutes then restart it
                </li>
              </ul>
            </div>
          </div>
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
                Address: STEER Hub Building, Batangas State University,
                Alangilan, Batangas City
              </p>
            </div>
          </div>
        </div>
      </Background>
    </div>
  );
};

export default Base;
