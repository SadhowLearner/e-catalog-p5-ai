// import Image from "next/image";
import Image from "next/image";
import { PinContainer } from "./components/ui/3d-pin";
import { HeroParallax } from "./components/ui/hero-parallax";
import { Cover } from "./components/ui/cover";
import { ExpandableCard } from "./components/ui/expandable-card";
// import { motion } from "framer-motion";

export default function Home() {


  const products = [
    {
      title: "Cryo Chat AI",
      link: "https://cryo-chat-ai.vercel.app/",
      thumbnail: "cryo-thumb.png",
    },
    {
      title: "E-Fast",
      link: "https://e-fast.vercel.app/",
      thumbnail: "e-fast-thumb.svg",
    },
    {
      title: "DoxSummarizer",
      link: "https://doxsummarizer.vercel.app/",
      thumbnail: "doxsummarizer-thumb.jpg",
    },

    {
      title: "PyroTrip",
      link: "https://pyrotrip.vercel.app/",
      thumbnail: "pyrotrip-thumb.png",
    },
    {
      title: "Quizion AI",
      link: "https://quizion-ai.vercel.app/",
      thumbnail: "quizion-thumb.png",
    },
    {
      title: "ClassBot",
      link: "https://chatbot-git-main-ayoms-projects.vercel.app/",
      thumbnail: "classbot-thumb.png",
    },
    {
      title: "Lingua",
      link: "https://linguaa.vercel.app/",
      thumbnail: "lingua-thumb.png",
    },
    {
      title: "StoryAI",
      link: "https://story-ai-sable.vercel.app/",
      thumbnail: "storyai-thumb.jpg",
    },
    {
      title: "quizion",
      link: "https://quizion.vercel.app/",
      thumbnail: "quizion-thumb2.png",
    },
    {
      title: "Cryo Chat AI",
      link: "https://cryo-chat-ai.vercel.app/",
      thumbnail: "cyro-thumb2.png",
    },
  ];
  return (
    <> 
      <main className="flex flex-col gap-8 mb-8 items-center justify-between overflow-x-hidden">

        <article className="w-full flex flex-col justify-center gap-20">
          <section>
            <HeroParallax products={products} />
          </section>
          <section className="w-full grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center">
            <h1 className="max-w-2xl col-span-full mb-6 text-center text-4xl font-bold mx-auto">
              Lets See Some Of Our Work, See The Amazing
              <Cover>AI Project.</Cover>
            </h1>
            <PinContainer
              className=""
              title="Quizllon"
              href="https://quizion-ai.vercel.app/"
            >
              <Image
                src="/logo/quizion.svg"
                height="600"
                width="600"
                alt="quizion"
                className="object-fill object-center h-full w-full inset-0"
              />
            </PinContainer>
            <PinContainer
              className="p-7"
              title="Pyrotrip"
              href="https://pyrotrip.vercel.app/"
            >
              <Image
                src={`/logo/pyrotrip.svg`}
                height="600"
                width="600"
                alt="pyrotrip ai"
                className="object-fill  object-center inset-10"
              />
            </PinContainer>
            <PinContainer
              className="p-7"
              title="Doxsummarizer"
              href="https://doxsummarizer.vercel.app/"
            >
              <Image
                src={`/logo/doxsummarizer.svg`}
                height="200"
                width="200"
                alt="quizion"
                className="object-cover object-center h-full w-full inset-0"
              />
            </PinContainer>
            <PinContainer title="Linguaa" href="https://linguaa.vercel.app/">
              <Image
                src={`/logo/lingua.png`}
                height="200"
                width="200"
                alt="quizion"
                className="object-cover object-center h-full w-full inset-0"
              />
            </PinContainer>
            <PinContainer
              title="ClassBot"
              href="https://chatbot-git-main-ayoms-projects.vercel.app/"
            >
              <Image
                src={`/logo/classbot.png`}
                height="200"
                width="200"
                alt="classbot"
                className="object-cover object-center absolute rounded-xl h-full w-full inset-0"
              />
            </PinContainer>
            <PinContainer
              title="StoryAI"
              href="https://story-ai-sable.vercel.app/"
            >
              <Image
                src={`/logo/storyai.jpeg`}
                height="200"
                width="200"
                alt="quizion"
                className="object-cover object-center rounded-2xl absolute h-full w-full inset-0"
              />
            </PinContainer>
            <PinContainer title="E-Fast" href="https://e-fast.vercel.app/">
              <Image
                src={`/logo/e-fast.png`}
                height="200"
                width="200"
                alt="E-Fast"
                className="object-cover object-center absolute h-full w-full inset-0"
              />
            </PinContainer>
            <PinContainer
              className="p-7"
              title="Cryo Chat"
              href="https://cryo-chat-ai.vercel.app/"
            >
              <Image
                src={`/logo/cryo.svg`}
                height="60"
                width="60"
                alt="quizion"
                className="object-contain object-center max-h-[150px] w-52 inset-10"
              />
            </PinContainer>
          </section>
          <section className="w-full flex flex-col">
            <div className="relative h-[20rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="absolute -inset-10 z-0 bg-gradient-to-t from-black via-[#0f172a] to-tranparent blur-2xl opacity-50"></div>
              <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
                Explore More
              </h1>
              <div className="w-[40rem] h-20 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Radial Gradient for smooth edges */}
    
              </div>

              {/* Gradient on outer edge for blending */}
              <div className="absolute -inset-10 z-0 bg-gradient-to-b from-black via-[#0f172a] to-transparent blur-2xl opacity-50"></div>
            </div>

            <ExpandableCard />
          </section>
        </article>
      </main>
    </>
  );
}
