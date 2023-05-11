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
import { ClockIcon } from "@radix-ui/react-icons";
import HeroGradient from "@/assets/bg-gradient.jpg";

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
        name: "Lola B.",
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
        name: "Valentin C.",
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
            "whitespace-pre-line text-center text-5xl sm:text-7xl font-bold tracking-tighter",
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
        <p className="w-full sm:w-2/3 whitespace-pre-line text-center text-xl sm:text-xl font-normal text-gray-700">
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
            width={1000}
            height={600}
            alt="Desktop App Image"
          />
        </div>
      </div>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-10 bg-transparent">
        <div className="flex flex-col items-center gap-10">
          <h3 className="text-md w-fit rounded-full bg-zinc-700 px-4 py-1 font-normal text-zinc-400">
            01. Choose
          </h3>
          <h1 className="whitespace-pre text-center text-xl sm:text-5xl font-medium text-white">
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
          <button className="rounded-full border px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-black">
            Explore all classes
          </button>
        </div>
      </div>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-10 bg-sky-50">
        <div className="flex flex-col items-center gap-10">
          <h3 className="text-md w-fit rounded-full bg-gray-200 px-4 py-1 font-normal text-zinc-400">
            02. Find
          </h3>
          <h1 className="whitespace-pre text-center text-xl sm:text-5xl font-medium text-black">
            Find the{" "}
            <span style={{ textShadow: "-24px -18px 70px #ffd29b" }}>
              lesson
            </span>{" "}
            you{" "}
            <span style={{ textShadow: "16px -11px 60px #e54cad" }}>need</span>
            {"\n"} <span className="text-gray-500">across all lessons</span>
          </h1>
          <button className="rounded-full border border-black px-6 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
            Explore all lessons
          </button>
        </div>
      </div>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-10 bg-transparent">
        <div className="flex flex-col items-center gap-10">
          <h3 className="text-md w-fit rounded-full bg-zinc-700 px-4 py-1 font-normal text-zinc-400">
            03. Learn
          </h3>
          <h1
            className={classNames(
              heading.className,
              "whitespace-pre text-center text-xl sm:text-5xl font-medium text-white"
            )}
          >
            Explore the{" "}
            <span style={{ textShadow: "30px 0 60px #906eff" }}>graphics</span>{" "}
            and{" "}
            <span style={{ textShadow: "16px -11px 60px #e54cad" }}>
              examples
            </span>
            {"\n"} <span className="text-gray-400">as you wish</span>
          </h1>
          <button className="rounded-full border  px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-black">
            See materials
          </button>
        </div>
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-40 bg-sky-50 py-20 sm:py-40">
        <div className="flex flex-col items-center justify-center gap-10 sm:gap-20">
          <h1
            className={classNames(
              "whitespace-pre-line text-center text-4xl sm:text-6xl font-bold tracking-tighter",
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

          <div className="flex w-full px-4 sm:w-1/2 flex-row flex-wrap items-center justify-center gap-10">
            <div className="flex flex-col items-center gap-10 rounded-lg bg-blue-100 px-8 py-8">
              <div className="flex flex-col items-center gap-5">
                <p className="text-2xl font-medium text-gray-700">
                  “I love the way they{" "}
                  <span className="text-blue-600">teach</span> and{" "}
                  <span className="text-blue-600">explain</span> the{" "}
                  <span className="text-blue-600">lessons</span>”
                </p>

                <p className="text-lg font-medium text-gray-700">
                  <span className="text-blue-600">- John Doe</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-10 rounded-lg bg-purple-100 px-8 py-8">
              <div className="flex flex-col items-center gap-5">
                <p className="text-2xl font-medium text-gray-700">
                  “I love the way they{" "}
                  <span className="text-blue-600">teach</span> and{" "}
                  <span className="text-blue-600">explain</span> the{" "}
                  <span className="text-blue-600">lessons</span>”
                </p>

                <p className="text-lg font-medium text-gray-700">
                  <span className="text-blue-600">- John Doe</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-10 rounded-lg bg-teal-100 px-8 py-8">
              <div className="flex flex-col items-center gap-5">
                <p className="text-2xl font-medium text-gray-700">
                  “I love the way they{" "}
                  <span className="text-blue-600">teach</span> and{" "}
                  <span className="text-blue-600">explain</span> the{" "}
                  <span className="text-blue-600">lessons</span>”
                </p>

                <p className="text-lg font-medium text-gray-700">
                  <span className="text-blue-600">- John Doe</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-10 rounded-lg bg-pink-50 px-8 py-8 shadow-2xl">
              <div className="flex flex-col items-center gap-5">
                <p className="text-2xl font-medium text-gray-700">
                  “I love the way they{" "}
                  <span className="text-blue-600">teach</span> and{" "}
                  <span className="text-blue-600">explain</span> the{" "}
                  <span className="text-blue-600">lessons</span>”
                </p>

                <p className="text-lg font-medium text-gray-700">
                  <span className="text-blue-600">- John Doe</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-screen w-full flex-col items-center gap10 sm:gap-20 bg-transparent py-40 sm:py-80">
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
          <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-4 w-full sm:w-2/3 px-4">
            <div className="flex max-w-lg flex-col items-start gap-8 rounded-lg border border-white/10 bg-gray-700/20 px-8 py-8 text-gray-400 backdrop-blur-md">
              <div className="flex items-center justify-center rounded-xl bg-[linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.06))] p-3 text-white">
                <ClockIcon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Save time</h2>
              <p>
                It&apos;s hard to navigate the chaos of security alerts, and
                it&apos;s even harder to effectively communicate them with your
                team. elba helps you find issues, and fix them. Automate your
                remediation with elba in minutes and save hours of productivity
                every week.
              </p>
            </div>
            <div className="flex max-w-lg flex-col items-start gap-8 rounded-lg bg-gray-700/20 px-8 py-8 text-gray-400 backdrop-blur-md">
              <div className="flex items-center justify-center rounded-xl bg-[linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.06))] p-3 text-white">
                <ClockIcon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Save time</h2>
              <p>
                It&apos;s hard to navigate the chaos of security alerts, and
                it&apos;s even harder to effectively communicate them with your
                team. elba helps you find issues, and fix them. Automate your
                remediation with elba in minutes and save hours of productivity
                every week.
              </p>
            </div>
            <div className="flex max-w-lg flex-col items-start gap-8 rounded-lg border border-white/10 bg-gray-700/20 px-8 py-8 text-gray-400 backdrop-blur-md">
              <div className="flex items-center justify-center rounded-xl bg-[linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.06))] p-3 text-white">
                <ClockIcon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Save time</h2>
              <p>
                It&apos;s hard to navigate the chaos of security alerts, and
                it&apos;s even harder to effectively communicate them with your
                team. elba helps you find issues, and fix them. Automate your
                remediation with elba in minutes and save hours of productivity
                every week.
              </p>
            </div>
            <div className="flex max-w-lg flex-col items-start gap-8 rounded-lg bg-gray-700/20 px-8 py-8 text-gray-400 backdrop-blur-md">
              <div className="flex items-center justify-center rounded-xl bg-[linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.06))] p-3 text-white">
                <ClockIcon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Save time</h2>
              <p>
                It&apos;s hard to navigate the chaos of security alerts, and
                it&apos;s even harder to effectively communicate them with your
                team. elba helps you find issues, and fix them. Automate your
                remediation with elba in minutes and save hours of productivity
                every week.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 sm:px-40 py-10 sm:py-20">
          <div className="relative flex w-full flex-col items-center gap-5 sm:gap-10 rounded-xl overflow-hidden backdrop-blur-sm py-10 sm:py-40">
            <Image
              src={HeroGradient}
              className="absolute bottom-0 -z-10"
              alt="Hero Gradient"
            />
            <h1 className="whitespace-pre text-center text-xl sm:text-5xl font-medium text-white">
              Note-taking but
              {"\n"} <span className="text-gray-600">done correctly </span>
            </h1>
            <button className="rounded-full bg-white px-4 sm:px-8 py-2 sm:py-4 text-md sm:text-lg font-normal text-black transition-all hover:shadow-xl">
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
