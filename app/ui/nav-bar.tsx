"use client";

import NavLinks from "./nav-links";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <div className="flex absolute left-0 right-0 justify-center p-10">
      <div className="flex flex-none flex-row items-center justify-center bg-gradient-to-r from-zinc-950/80 to-zinc-900/80 w-[300px] rounded-full border-solid border border-zinc-400">
        <NavLinks />
        <a
          href="https://pump.fun/board"
          target="_blank"
          title="pump.fun"
          className={"p-2"}
          role="button"
        >
          <motion.img
            alt="pump logo"
            src={"/pump.png"}
            width={32}
            height={32}
            whileHover={{ scale: 1.2 }}
          />
        </a>
        <a
          href="https://phantom.app/"
          target="_blank"
          title="phantom"
          className={"p-2"}
          role="button"
        >
          <motion.img
            alt="phantom logo"
            src={"/phantom.png"}
            width={32}
            height={32}
            whileHover={{ scale: 1.2 }}
          />
        </a>
        <a
          href="https://dexscreener.com/"
          target="_blank"
          title="dexscreener"
          className={"p-2"}
          role="button"
        >
          <motion.img
            alt="dex screener logo"
            src={"/dexscreener.png"}
            width={28}
            height={28}
            whileHover={{ scale: 1.2 }}
          />
        </a>
        <a
          href="https://photon-sol.tinyastro.io/"
          target="_blank"
          title="photon"
          className={"p-2"}
          role="button"
        >
          <motion.img
            alt="photon logo"
            src={"/photon.png"}
            width={32}
            height={32}
            whileHover={{ scale: 1.2 }}
          />
        </a>
      </div>
    </div>
  );
}
