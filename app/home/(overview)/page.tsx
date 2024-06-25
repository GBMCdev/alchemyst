"use client";
import Image from "next/image";
import { almendra } from "@/app/ui/fonts";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function copyText(data: string) {
  navigator.clipboard.writeText(data);
}

export default function Welcome() {
  const CONTRACT_ADDRESS = "BQJSuGHWhGn69YuscYgxXfGGFGY6ihZ5aBQwHMfXtVsX";
  const TWITTER_LINK = "https://x.com/GBMCCornelius";
  const PUMP_FUN_LINK = "https://dexscreener.com/moonshot";
  const TREASURE_PUBLIC_KEY = "J5wCL5ZnvvLJwbHpuxwSdeyLEuPikCiH5QhjpYZ91559";

  const handleCopy = () => {
    copyText(TREASURE_PUBLIC_KEY);
    toast("Address copied !");
  };

  return (
    <main className="flex flex-col h-full items-center justify-start bg-black overflow-hidden">
      <ToastContainer />
      {/* BACKGROUND */}
      <div className="flex w-screen overflow-hidden justify-center">
        <div className="flex-none w-[1500px] h-[500px]">
          <Image
            src="/background.png"
            alt="background"
            width={3808}
            height={1280}
            priority
          />
        </div>
      </div>
      {/* WELCOME MESSAGE*/}
      <div className="absolute top-[150px] h-[200px] w-[400px] justify-center items-center">
        <p
          className={`absolute top-[-10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-sm `}
        >
          Welcome crypto explorers and SOL farmers !
        </p>
      </div>
      {/* TABLE SHADOW */}
      <motion.div
        className="absolute opacity-95 top-[330px] h-[300px] w-[400px] bg-black rounded-full blur-xl"
        animate={{
          scale: [1, 1.05, 1, 1.15, 1],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0,
        }}
      />
      {/* CANVA */}
      <div className="absolute top-[300px] h-[500px] w-[500px]">
        {/* TABLE */}
        <Image src="/table.png" alt="table" width={500} height={500} priority />
        {/* BOTTLE */}
        <motion.img
          className="absolute top-[15px] left-[350px]"
          whileHover={{ scale: 1.5, y: -20 }}
          key={"bottle"}
          src={"/bottle.png"}
          width={70}
          height={70}
          style={{ rotate: 5 }}
        />
        {/* MOJO */}
        <motion.img
          className="absolute top-[0px] left-[320px]"
          key={"mojo"}
          src={"/mojo.png"}
          width={80}
          height={80}
          animate={{
            y: [0, -35, 0],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
          style={{ rotate: 30 }}
        />

        {/* POPUP BOOK AURA */}
        <motion.div
          className="absolute top-[65px] left-[40px] h-20 w-20  opacity-80 bg-gradient-to-r from-[#A16EE9] via-[#6369C6] to-[#5394EC] rounded-full blur-md"
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 0.4, 1.8, 1.8, 0.4, 0],
            y: [0, -100, -100, -100, 0],
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
        {/* POPUP BOOK */}
        <motion.img
          className="absolute top-[50px] left-[5px]"
          key={"book"}
          src={"/book.png"}
          width={150}
          height={150}
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 0.2, 1.2, 1.2, 0.2, 0],
            y: [0, -100, -100, -100, 0],
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
        {/* LEFT CANDLE LIGHT */}
        <motion.div
          className="absolute top-[55px] left-[130px] h-6 w-6  opacity-80 bg-gradient-to-r from-[#F8ED55] to-[#FEA660] rounded-full blur-md"
          animate={{
            scale: [0.75, 1.5, 0.75, 1, 0.75],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />
        {/* RIGHT CANDLE LIGHT */}
        <motion.div
          className="absolute top-[50px] left-[400px] h-10 w-10  opacity-70 bg-gradient-to-r from-[#F8ED55] to-[#FEA660] rounded-full blur-md"
          animate={{
            scale: [0.75, 1.5, 0.75, 1, 0.75],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />
        {/* LITTLE CANDLE LIGHT */}
        <motion.div
          className="absolute top-[200px] left-[400px] h-10 w-10  opacity-60 bg-gradient-to-r from-[#EE6F55] to-[#FEA660] rounded-full blur-md"
          animate={{
            scale: [2, 0.75, 1.2, 0.75, 2],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />
        {/* CRYSTAL PULSATING LIGHT */}
        <motion.div
          className="absolute top-[130px] left-[50px] h-20 w-20  opacity-50 bg-gradient-to-r from-[#A16EE9] via-[#6369C6] to-[#5394EC] rounded-full blur-md"
          animate={{
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />
        {/* FLASK */}
        <motion.img
          className="absolute top-[165px] left-[300px]"
          whileHover={{ scale: 1.5, y: -20 }}
          key={"flask"}
          src={"/flask.png"}
          exit={{ opacity: 0 }}
          width={120}
          height={120}
          style={{ rotate: 15 }}
        />
        {/* LABEL CONTRACT */}
        <p
          className={`absolute top-[15px] left-[10px] right-[0px] text-center text-white text-lg `}
        >
          Magic contract :
        </p>
        {/* CONTRACT */}
        <div className="absolute top-[100px] left-[190px] right-[200px]justify-center items-center">
          <div className="relative inline-flex group">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#A16EE9] via-[#6369C6] to-[#5394EC] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href={PUMP_FUN_LINK}
              target="_blank"
              title="Magic Contract"
              className={`${almendra.className} text-white w-32 text-wrap text-center break-all relative inline-flex items-center justify-center text-lg text-white `}
              role="button"
            >
              {CONTRACT_ADDRESS}
            </a>
          </div>
        </div>
      </div>
      {/* CONTENT */}
      <div className="absolute top-[720px] h-[400px] w-[500px] p-[50px]">
        {/* TWITTER BOOK */}
        <div className=" flex flex-none flex-row justify-center items-center ">
          <div className="relative inline-flex group">
            <div className="h-[150px] w-[150px] transitiona-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#E30898] via-[#6369C6] to-[#94E0E7] rounded-full blur-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href={TWITTER_LINK}
              title="Go to X.com"
              target="_blank"
              className={"absolute"}
              role="button"
            >
              <motion.img
                alt=""
                src={"/grimTwitter.png"}
                width={150}
                whileHover={{ scale: 1.1 }}
                height={150}
              />
            </a>
          </div>
          <p className={` text-center text-white text-sm `}>
            {
              "Ready for what's next? Click on Elon's book and join us on X! This is just the first page of the story!"
            }
          </p>
        </div>
        {/* CHEST */}
        <div className="flex flex-none flex-row justify-center items-center ">
          <div className="relative inline-flex group">
            <div className="h-[150px] w-[150px] transitiona-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#ED9021] via-[#F7F54C] to-[#F6D331] rounded-full blur-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              onClick={() => handleCopy()}
              title="Click to copy"
              className={"absolute"}
              role="button"
            >
              <motion.img
                alt=""
                key={"chest"}
                src={"/chest.png"}
                width={150}
                whileHover={{ scale: 1.1 }}
                height={150}
              />
            </a>
          </div>
          <p className={`text-center text-white text-sm`}>
            {
              "You have the soul of an investor? Join the adventure and support us! Click on the chest to copy our wallet address"
            }
          </p>
        </div>
        {/* DISCLAIMER */}
        <div className="flex flex-none flex-row justify-center items-center my-[20px] ">
          <p className={`text-center text-zinc-600 text-xs`}>
            {
              "DISCLAIMER: ALCHEMYST WAS MADE FOR ENTERTAINMENT AND HAS NO VALUE. DON’T RISK MONEY YOU ARE AFRAID OF LOSING.THE PRICE MAY GO UP OR IT MAY GO DOWN. WE ARE NOT RESPONSIBLE FOR THE PRICE OF THE TOKEN."
            }
          </p>
        </div>
      </div>
    </main>
  );
}
