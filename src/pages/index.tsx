import { type NextPage } from "next";
import bgGradient from "@/assets/bg-gradient.jpg";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Logo from "@/assets/logo-blue.png";
import { body, heading } from "@/utils/fonts";
import Marquee from "react-fast-marquee";
import classNames from "classnames";
import { useMemo } from "react";
import DesktopImage from "@/assets/desktop.png";
import {
  ClockIcon,
  HandIcon,
  LightningBoltIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";
import HeroGradient from "@/assets/bg-gradient.jpg";
import * as Tabs from "@radix-ui/react-tabs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clement&apos;s Notes</title>
        <meta name="description" content="Made only for you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex min-h-screen flex-col">
        <Image
          src={bgGradient}
          className="fixed bottom-0 -z-10 h-screen w-screen"
          loading="lazy"
          alt="Purple and Blue gradient"
        />
        <Navbar />
        <HeroSection />
      </main>
    </>
  );
};

const HeroSection = () => {
  const feedbacks = useMemo(
    () => [
      {
        name: "Clement L.",
        image:
          "https://api.dicebear.com/6.x/notionists/svg?seed=Felix&backgroundColor=b6e3f4",
      },
      {
        name: "Ella H.",
        image:
          "https://api.dicebear.com/6.x/notionists/svg?seed=Gizmo&backgroundColor=8294C4",
      },
      {
        name: "Simon S.",
        image:
          "https://api.dicebear.com/6.x/notionists/svg?seed=Jack&backgroundColor=C7E9B0",
      },
      {
        name: "Lola A.",
        image:
          "https://api.dicebear.com/6.x/notionists/svg?seed=Coco&backgroundColor=85586F",
      },
      {
        name: "Charlie M.",
        image:
          "https://api.dicebear.com/6.x/notionists/svg?seed=Abby&backgroundColor=FCF9BE",
      },
      {
        name: "Julia H.",
        image:
          "https://api.dicebear.com/6.x/notionists/svg?seed=Molly&backgroundColor=FD8A8A",
      },
      {
        name: "Vadim M.",
        image:
          "https://api.dicebear.com/6.x/notionists/svg?seed=Sam&backgroundColor=7286D3",
      },
      {
        name: "Maelle B.",
        image:
          "https://api.dicebear.com/6.x/notionists/svg?seed=Lucy&hair=variant41&brows=variant01&backgroundColor=B5D5C5",
      },
      {
        name: "Benjamin T.",
        image:
          "https://api.dicebear.com/6.x/notionists/svg?seed=Spooky&backgroundColor=EDDBC7",
      },
      {
        name: "Lyla B.",
        image:
          "https://api.dicebear.com/6.x/notionists/svg?seed=Jasmine&backgroundColor=FFCEFE",
      },
      {
        name: "Jocelyn W.",
        image:
          "https://api.dicebear.com/6.x/notionists/svg?seed=Muffin&backgroundColor=804674",
      },
      {
        name: "Ines P.",
        image:
          "https://api.dicebear.com/6.x/notionists/svg?seed=Coco&hair=variant47&brows=variant01&backgroundColor=6096B4",
      },
    ],
    []
  );
  return (
    <div
      className={classNames(
        "flex w-screen flex-col items-center justify-center bg-transparent",
        body.className
      )}
    >
      <div className="flex flex-col items-center justify-center gap-10 bg-sky-50 py-20">
        <h1
          className={classNames(
            "whitespace-pre-line text-center text-5xl font-bold tracking-tighter text-black sm:text-7xl",
            heading.className
          )}
        >
          <span
            style={{
              textShadow: "0 -20px 100px #ffce6d",
            }}
          >
            Modern notes for
          </span>{" "}
          {"\n"}
          <span
            style={{
              textShadow: "-16px 0 70px #d61db1",
            }}
          >
            modern
          </span>{" "}
          <span
            className="text-blue-700"
            style={{
              textShadow:
                "0 0 2px rgba(255,255,255,.11), 0 0 80px rgb(29, 78, 216), 0 -1px 4px rgba(255,255,255,.2), 0 0 5px rgba(255,255,255,.5)",
            }}
          >
            students
          </span>
        </h1>
        <p className="w-full whitespace-pre-line text-center text-xl font-normal text-gray-700 sm:w-2/3 sm:text-xl">
          With these hand-written and understable notes, you&apos;ll be able to{" "}
          {"\n"}
          ace your exams and get ahead with ease.
        </p>
        <button className="rounded-full bg-black px-8 py-4 text-lg font-normal text-white transition-all hover:shadow-xl">
          Get Started
        </button>
        <div className="relative flex flex-col items-center gap-10">
          <p className="text-md font-medium text-blue-600">
            Trusted by excellent students
          </p>
          <Marquee
            pauseOnHover={true}
            style={{
              width: "100vw",
            }}
          >
            {feedbacks.map((feedback) => (
              <div
                key={feedback.name}
                className="flex flex-col items-center gap-2"
              >
                <Image
                  src={feedback.image}
                  width={100}
                  height={100}
                  className="mx-5 rounded-full"
                  alt={feedback.name}
                />
                <p className="font-medium text-gray-700">{feedback.name}</p>
              </div>
            ))}
          </Marquee>
          <Image
            src={DesktopImage}
            className="rounded-xl border border-gray-200 shadow-xl"
            width={1541 * 0.75}
            height={1399 * 0.75}
            alt="Desktop App Image"
          />
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 overflow-hidden py-10 sm:h-screen sm:py-0">
        <div className="flex flex-col items-center gap-10">
          <h3 className="text-md w-fit rounded-full bg-zinc-700 px-4 py-1 font-normal text-zinc-400">
            01. Choose
          </h3>
          <h1 className="whitespace-pre text-center text-xl font-medium text-white sm:text-5xl">
            <span
              style={{
                textShadow:
                  "0 0 2px rgba(255,255,255,.11), 0 0 80px #5b03ff, 0 -1px 4px rgba(255,255,255,.2), 0 0 5px rgba(255,255,255,.5)",
              }}
            >
              Choose what you are looking for
            </span>{" "}
            {"\n"} across all classes
          </h1>
          <Tabs.Root className="flex flex-col items-center" defaultValue="tab1">
            <Tabs.List
              className="flex w-fit shrink-0"
              aria-label="Manage your account"
            >
              <Tabs.Trigger
                className="whitespace-wrap flex h-[100px] flex-1 cursor-pointer items-center justify-center border-b border-transparent px-5 text-[15px] leading-none text-gray-200 focus:border-white data-[state=active]:border-white sm:h-[45px] sm:whitespace-nowrap"
                value="tab1"
              >
                International Business Competencies & Methods
              </Tabs.Trigger>
              <Tabs.Trigger
                className="flex h-[100px] flex-1 cursor-pointer items-center justify-center border-b border-transparent px-5 text-[15px] leading-none text-gray-200 focus:border-white data-[state=active]:border-white sm:h-[45px]"
                value="tab2"
              >
                International Management and Personal Skills
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
              className="grid grow grid-cols-1 gap-4 rounded-b-md p-5 text-gray-200 outline-none sm:grid-cols-3"
              value="tab1"
            >
              <div className="flex max-w-sm flex-col items-start gap-4 rounded-lg bg-gray-700/20 px-8 py-8 text-gray-400 backdrop-blur-md">
                <h2 className="text-xl font-semibold text-white">
                  Accounting and Financial Management
                </h2>
                <p>
                  It&apos;s hard to navigate the chaos of security alerts, and
                  it&apos;s even harder to effectively communicate them with
                  your team.
                </p>
              </div>
              <div className="flex max-w-sm flex-col items-start gap-4 rounded-lg bg-gray-700/20 px-8 py-8 text-gray-400 backdrop-blur-md">
                <h2 className="text-xl font-semibold text-white">
                  Fundamentals of Finance
                </h2>
                <p>
                  It&apos;s hard to navigate the chaos of security alerts, and
                  it&apos;s even harder to effectively communicate them with
                  your team.
                </p>
              </div>
              <div className="flex max-w-sm flex-col items-start gap-4 rounded-lg bg-gray-700/20 px-8 py-8 text-gray-400 backdrop-blur-md">
                <h2 className="text-xl font-semibold text-white">
                  Introduction to Statistics
                </h2>
                <p>
                  It&apos;s hard to navigate the chaos of security alerts, and
                  it&apos;s even harder to effectively communicate them with
                  your team.
                </p>
              </div>
              <div className="flex max-w-sm flex-col items-start gap-4 rounded-lg bg-gray-700/20 px-8 py-8 text-gray-400 backdrop-blur-md">
                <h2 className="text-xl font-semibold text-white">
                  International Marketing and Sales Techniques
                </h2>
                <p>
                  It&apos;s hard to navigate the chaos of security alerts, and
                  it&apos;s even harder to effectively communicate them with
                  your team.
                </p>
              </div>
              <div className="flex max-w-sm flex-col items-start gap-4 rounded-lg bg-gray-700/20 px-8 py-8 text-gray-400 backdrop-blur-md">
                <h2 className="text-xl font-semibold text-white">
                  Accounting and Financial Management
                </h2>
                <p>
                  It&apos;s hard to navigate the chaos of security alerts, and
                  it&apos;s even harder to effectively communicate them with
                  your team.
                </p>
              </div>
              <div className="flex max-w-sm flex-col items-start gap-4 rounded-lg bg-gray-700/20 px-8 py-8 text-gray-400 backdrop-blur-md">
                <h2 className="text-xl font-semibold text-white">
                  Statistics and Marketing Research Methods
                </h2>
                <p>
                  It&apos;s hard to navigate the chaos of security alerts, and
                  it&apos;s even harder to effectively communicate them with
                  your team.
                </p>
              </div>
            </Tabs.Content>
            <Tabs.Content
              className="grid grow grid-cols-1 gap-4 rounded-b-md p-5 text-gray-200 outline-none sm:grid-cols-3"
              value="tab2"
            >
              <div className="flex max-w-sm flex-col items-start gap-4 rounded-lg bg-gray-700/20 px-8 py-8 text-gray-400 backdrop-blur-md">
                <h2 className="text-xl font-semibold text-white">
                  Statistics and Marketing Research Methods
                </h2>
                <p>
                  It&apos;s hard to navigate the chaos of security alerts, and
                  it&apos;s even harder to effectively communicate them with
                  your team.
                </p>
              </div>
            </Tabs.Content>
          </Tabs.Root>
          <button className="rounded-full border px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-black">
            Explore all classes
          </button>
        </div>
      </div>
      <div className="flex h-full w-full sm:h-screen flex-col items-center justify-center gap-40 bg-sky-50 py-10 sm:py-0">
        <div className="flex flex-col items-center gap-10">
          <h3 className="text-md w-fit rounded-full bg-gray-200 px-4 py-1 font-normal text-zinc-800">
            02. Find
          </h3>
          <h1 className="whitespace-pre text-center text-xl font-medium text-black sm:text-5xl">
            Find the{" "}
            <span style={{ textShadow: "-24px -18px 70px #ffd29b" }}>
              lesson
            </span>{" "}
            you{" "}
            <span style={{ textShadow: "16px -11px 60px #e54cad" }}>need</span>
            {"\n"} <span className="text-gray-500">across all lessons</span>
          </h1>
          <Image
            src="/folders.png"
            width={1492 / 2}
            height={1084 / 2}
            alt="Folders Image"
          />
          <button className="rounded-full border border-white px-6 py-3 font-medium transition-all bg-white text-black hover:shadow-lg">
            Explore all lessons
          </button>
        </div>
      </div>
      <div className="flex h-full sm:h-screen w-full flex-col items-center justify-center gap-40 py-10 sm:py-0 bg-[#161a22]">
        <div className="flex flex-col items-center gap-10">
          <h3 className="text-md w-fit rounded-full bg-gray-700 px-4 py-1 font-normal text-zinc-100">
            03. Learn
          </h3>
          <h1
            className={classNames(
              heading.className,
              "whitespace-pre text-center text-xl font-medium text-white sm:text-5xl"
            )}
          >
            Explore the{" "}
            <span style={{ textShadow: "30px 0 60px #906eff" }}>graphics</span>{" "}
            and{" "}
            <span style={{ textShadow: "16px -11px 60px #e54cad" }}>
              examples
            </span>
            {"\n"} <span className="text-gray-300">as you wish</span>
          </h1>
          <button className="rounded-full border  bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
            See materials
          </button>
        </div>
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-40 bg-sky-50 py-20 sm:py-40">
        <div className="flex flex-col items-center justify-center gap-10 sm:gap-20">
          <h1
            className={classNames(
              "whitespace-pre-line text-center text-4xl font-bold tracking-tighter text-black sm:text-6xl",
              heading.className
            )}
          >
            <span
              style={{
                textShadow: "0 -20px 100px #ffce6d",
              }}
            >
              They are talking
            </span>{" "}
            {"\n"}
            <span
              style={{
                textShadow: "-16px 0 70px #d61db1",
              }}
            >
              about
            </span>{" "}
            <span
              style={{
                textShadow:
                  "0 0 2px rgba(255,255,255,.11), 0 0 80px rgb(29, 78, 216), 0 -1px 4px rgba(255,255,255,.2), 0 0 5px rgba(255,255,255,.5)",
              }}
            >
              us
            </span>
          </h1>

          <div className="flex w-full flex-row flex-wrap items-center justify-center gap-10 px-4 sm:w-1/2">
            <div className="flex w-full flex-col items-center gap-10 rounded-lg bg-blue-100 px-8 py-8">
              <div className="flex flex-col items-center gap-5">
                <p className="text-2xl font-medium text-gray-700">
                  “A really life-saving resource. I can&apos;t live without it.”
                </p>

                <p className="text-lg font-medium text-gray-700">
                  <span className="text-blue-600">- Lola A.</span>
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-10 rounded-lg bg-purple-100 px-8 py-8">
              <div className="flex flex-col items-center gap-5">
                <p className="text-2xl font-medium text-gray-700">
                  “This has saved me so many hours of revisions. I love it!”
                </p>

                <p className="text-lg font-medium text-gray-700">
                  <span className="text-blue-600">- Ella H.</span>
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-10 rounded-lg bg-teal-100 px-8 py-8">
              <div className="flex flex-col items-center gap-5">
                <p className="text-2xl font-medium text-gray-700">
                  “These notes are much better than mine. It helps a lot!”
                </p>

                <p className="text-lg font-medium text-gray-700">
                  <span className="text-blue-600">- Benjamin T.</span>
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-10 rounded-lg bg-pink-50 px-8 py-8">
              <div className="flex flex-col items-center gap-5">
                <p className="text-2xl font-medium text-gray-700">
                  “I can finally understand all the classes and lessons.”
                </p>

                <p className="text-lg font-medium text-gray-700">
                  <span className="text-blue-600">- Simon S.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gap10 flex h-screen w-full flex-col items-center bg-transparent py-40 sm:gap-20 sm:py-80">
        <div className="flex flex-col items-center gap-10">
          <h1
            className={classNames(
              heading.className,
              "whitespace-pre text-center text-5xl font-medium text-white"
            )}
          >
            Concretely,{"\n"}
            <span style={{ textShadow: "30px 0 60px #906eff" }}>I</span>{" "}
            <span style={{ textShadow: "16px -11px 60px #e54cad" }}>help</span>{" "}
            you...
          </h1>
          <div className="flex w-full flex-row flex-wrap items-center justify-center gap-x-4 gap-y-4 px-4 sm:w-2/3">
            <div className="flex max-w-lg flex-col items-start gap-8 rounded-lg border border-white/10 bg-gray-700/20 px-8 py-8 text-gray-400 backdrop-blur-md">
              <div className="flex items-center justify-center rounded-xl bg-[linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.06))] p-3 text-white">
                <ClockIcon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Save time</h2>
              <p>
                It&apos;s hard to navigate the chaos of paper notes, and
                it&apos;s even harder to effectively understand them. My notes
                helps you learn your lessons, and understand them. Understand
                all your lessons with my notes in minutes and save hours of
                productivity.
              </p>
            </div>
            <div className="flex max-w-lg flex-col items-start gap-8 rounded-lg bg-gray-700/20 px-8 py-8 text-gray-400 backdrop-blur-md">
              <div className="flex items-center justify-center rounded-xl bg-[linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.06))] p-3 text-white">
                <HandIcon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Accessible</h2>
              <p>
                You can get rid of your folders full of paper notes. My notes
                are available on all your devices, and you can access them
                anywhere, anytime. Everything you need to know for your next
                test is in your pocket. You are always one click away to your
                next 20/20.
              </p>
            </div>
            <div className="flex max-w-lg flex-col items-start gap-8 rounded-lg border border-white/10 bg-gray-700/20 px-8 py-8 text-gray-400 backdrop-blur-md">
              <div className="flex items-center justify-center rounded-xl bg-[linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.06))] p-3 text-white">
                <LightningBoltIcon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white">
                Understandable
              </h2>
              <p>
                You often scribble your notes. Abbreviations, drawings, and
                other things that only you can understand. My notes are
                understandable by everyone. You can share them with your friends
                and they will understand them. You can even share them with your
                teacher, and he will understand them.
              </p>
            </div>
            <div className="flex max-w-lg flex-col items-start gap-8 rounded-lg bg-gray-700/20 px-8 py-8 text-gray-400 backdrop-blur-md">
              <div className="flex items-center justify-center rounded-xl bg-[linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.06))] p-3 text-white">
                <MagicWandIcon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Accurate</h2>
              <p>
                You often miss important information in your notes. My notes are
                accurate and complete. It only contains the essential and
                accurate information that you need. You will never miss any
                information again. You will have all the important information
                you need to get a 20/20 in your next test.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 py-10 sm:px-40 sm:py-20">
          <div className="relative flex w-full flex-col items-center gap-5 overflow-hidden rounded-xl py-10 backdrop-blur-sm sm:gap-10 sm:py-40">
            <Image
              src={HeroGradient}
              className="absolute bottom-0 -z-10"
              alt="Hero Gradient"
            />
            <h1 className="whitespace-pre text-center text-xl font-medium text-white sm:text-5xl">
              Note-taking but
              {"\n"} <span className="text-gray-400">done correctly </span>
            </h1>
            <button className="text-md rounded-full bg-white px-4 py-2 font-normal text-black transition-all hover:shadow-xl sm:px-8 sm:py-4 sm:text-lg">
              Get Started
            </button>
          </div>
        </div>
        <footer className="flex w-full justify-between p-10">
          <Image src={Logo} alt="Clement's Notes" width={100} height={50} />
          <p>Made by Clement ✨</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
