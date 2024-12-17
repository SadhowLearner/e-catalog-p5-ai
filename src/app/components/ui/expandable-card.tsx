"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";

export function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={`/cover/${active.src}`}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 items-start gap-10">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col justify-center w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={200}
                  height={200}
                  src={`/cover/${card.src}`}
                  alt={card.title}
                  className="h-full w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Ease Your Learning Path with Quizion.",
    title: "Quizion AI",
    src: "quizion.png",
    ctaText: "Look Poster",
    ctaLink:
      "https://quizion-ai.vercel.app/",
    content: () => {
      return (
        <p>
          The Quizion AI website is an artificial intelligence website designed
          to to generate quizzes from materials uploaded in PDF format. This
          website is able to analyze the content of the document, understand the
          main content and generate relevant multiple-choice quiz questions.
          Generate relevant multiple-choice quiz questions. Objectives Make it
          easier for teachers or students to efficiently create assessment
          materials and support more adaptive learning. and support more
          adaptive and effective learning. effective learning. Quizion is also
          designed to support the modern educational environment that is which
          is based on technology.
        </p>
      );
    },
  },
  {
    description: "Vacations become fun using PyroTrip",
    title: "PyroTrip",
    src: "pyrotrip.png",
    ctaText: "Look Poster",
    ctaLink:
      "https://pyrotrip.vercel.app/",
    content: () => {
      return (
        <p className="text-justify">
          Get intelligent AI assistance to plan your trip or vacation easily
          through a user-friendly interface. Enjoy intuitive features, take
          advantage of powerful AI that is ready to provide the best suggestions
          at any time. Try it now and experience a new experience in planning a
          practical and efficient trip. Following are the benefits provided by
          AI PyroTrip: o Recommendations for the best holiday destinations
          according to your budget. o Can quickly plan a holiday closest to your
          destination city or country. o Can determine the exact time to the
          destination.
        </p>
      );
    },
  },

  {
    description: "Best for summarize any document",
    title: "Doxsummarizer",
    src: "doxsummarizer.png",
    ctaText: "Look Poster",
    ctaLink:
      "https://doxsummarizer.vercel.app/",
    content: () => {
      return (
        <p className="text-justify">
          Doxsummarizer is an AI-based tool designed to summarize long documents
          efficiently. The platform uses natural language translation (NLP)
          technology to understand the content of a document and generate a
          relevant and concise summary. The website is suitable for various
          types of documents, such as reports, articles, or academic papers, so
          users can quickly understand the gist of the text without having to
          read the entire document.
        </p>
      );
    },
  },
  {
    description: "Lingua: Your smart conversational companion.",
    title: "Lingua",
    src: "lingua.png",
    ctaText: "Look Poster",
    ctaLink:
      "https://linguaa.vercel.app/",
    content: () => {
      return (
        <p className="text-justify">
          Lingua is an innovative chatbot designed to assist you with a variety
          of conversational needs. With its ability to understand context and
          deliver intelligent responses, Lingua is ready to be your companion
          for answering everyday questions, providing recommendations, or simply
          engaging in meaningful conversations. Powered by cutting-edge
          technology, Lingua offers a natural, fast, and informative interaction
          experience.
        </p>
      );
    },
  },
  {
    description: "ClassBot AI helper for students ",
    title: "ClassBot",
    src: "classbot.png",
    ctaText: "Look Poster",
    ctaLink:
      "https://chatbot-git-main-ayoms-projects.vercel.app/",
    content: () => {
      return (
        <p className="text-justify">
          the learning process. This ClassBot can conduct text-based
          conversations and is frequently used to assist in learning, serve as a
          virtual assistant, act as an educational intermediary tool, and more.
          ClassBot can provide many benefits and functionalities, such as:
          <ul>
            <li>ClassBot can respond to questions quickly </li>
            <li>
              Provide support anytime without human intervention (except when
              typing prompts)
            </li>
            <li>Able to deliver multiple benefits and functionalities </li>
          </ul>
          Overall, ClassBot AI is a tool that can be used as a learning
          assistant by helping to answer questions.
        </p>
      );
    },
  },
  {
    description: "Create Unlimited Stories",
    title: "StoryAI",
    src: "storyai.jpg",
    ctaText: "Look Poster",
    ctaLink:
      "https://story-ai-sable.vercel.app/",
    content: () => {
      return (
        <p className="text-justify">
          StoryAI is a powerful tool born from the development of the Gemini
          API, designed to help users turn their imaginations into engaging
          stories. With extraordinary natural language processing capabilities,
          StoryAI can generate various types of stories, from science fiction to
          romance, with just a few keywords or opening sentences. Whether you
          are an experienced writer or just want to try writing short stories,
          StoryAI is ready to be your creative friend.
        </p>
      );
    },
  },
  {
    description: "Fast and easy AI solutions",
    title: "E-Fast",
    src: "e-fast.png",
    ctaText: "Look Poster",
    ctaLink:
      "https://e-fast.vercel.app/",
    content: () => {
      return (
        <p className="text-justify">
          E-Fast AI is a web-based AI platform designed to help users in their
          work. provides features such as chatbots, image generators, text
          processing and many others. With a user-friendly and intuitive
          interface, E-Fast AI allows users to harness the power of AI easily
          and quickly
        </p>
      );
    },
  },
  {
    description: "Chat with Cryo to supercharge your ideas.",
    title: "Cryo AI",
    src: "cryo.png",
    ctaText: "Look Poster",
    ctaLink:
      "https://cryo-chat-ai.vercel.app/",
    content: () => {
      return (
        <p className="text-justify">
          Boost your productivity with our free AI chatbot. Say goodbye to
          tedious tasks and hello to effortless assistance. Our user-friendly
          interface, chat history saving, and powerful AI capabilities make
          getting things done simpler than ever.
          <ul>
            <li>
              Multi-lingual support: Support for multiple languages (mention the
              specific languages if applicable)
            </li>
            <li>24/7 availability: Always available to assist you</li>
            <li>Personalized experience: AI adapts to your needs over time</li>
            <li>Secure and private: Ensures data privacy and security</li>
          </ul>
        </p>
      );
    },
  },
];
