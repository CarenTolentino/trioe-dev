import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import Banner from './Banner';
import FAQ from './FAQ';
import Footer from './Footer';
import LearningModules from './LearningModules';
import StartingGuide from './StartingGuide';
import TrioeKits from './TrioeKits';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    {/* <Hero /> */}
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-gradient-to-r from-[#446EAD] via-[#70A4DA] to-[#C5F4F6] drop-shadow-md dark:border-gray-600 dark:bg-gradient-to-r">
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
                className="rounded-lg bg-blue-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() =>
                  (window.location.href = 'http://atlas.batstate-u.edu.ph:3000')
                }
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
        <div className="mt-10 flex items-center justify-center">
          <div className="flex size-48 items-center justify-center rounded-full bg-white shadow-lg dark:bg-gray-800">
            <Image
              src="/assets/images/New_trioe_small.png"
              alt="Hero Image"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section yPadding="pt-2 pb-32">
        <div className=" md:fflex-col flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center md:flex-col">
            <h1 className="text-4xl font-bold text-primary-700">TRIOE</h1>
            <h2 className="f text-2xl text-black">
              Tinkering Resource For Internet of Everything
            </h2>
            <p className="mt-4 text-center">
              It&apos;s an online platform that teaches Internet of Things (IoT)
              technology. It encourages hands-on learning, where users actively
              use technology to explore and innovate, especially within the
              Internet of Everything (IoE) field. Essentially, it&apos;s a
              practical tool for understanding and building IoE systems.
            </p>
          </div>

          <div className="mt-8 md:w-1/2"></div>
        </div>
      </Section>
    </Background>

    <StartingGuide />

    <TrioeKits />
    <LearningModules />
    <FAQ />
    <Banner />
    <Footer />
  </div>
);

export default Base;
