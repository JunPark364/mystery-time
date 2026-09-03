"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Player from "@/components/ui/Player";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainSeconds = seconds % 60;

  const time = `${String(minutes).padStart(2, "0")}:${String(
    remainSeconds,
  ).padStart(2, "0")}`;

  const players = [
    "Player_1",
    "Player_2",
    "Player_3",
    "Player_4",
    "Player_5",
    "Player_6",
    "Player_7",
    "Player_8",
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-between gap-4 bg-zinc-50 font-kmu dark:bg-black">
      <div className="flex items-center justify-between w-full px-10 pt-10">
        <Link className="flex w-10 justify-center" href="/">
          <Icon icon="material-symbols:home" style={{ fontSize: "32px" }} />
        </Link>
        <div
          className="flex flex-col flex-1 justify-center items-center text-center"
          style={{ fontSize: "40px" }}
        >
          {time}
        </div>
        <div className="w-10"></div>
      </div>

      <main className="flex flex-col flex-1 items-center">{children}</main>
      <div className="flex items-center justify-between gap-2 w-full px-50">
        {players.map((player, index) => (
          <Player key={index} idx={index} name={player} />
        ))}
      </div>
    </div>
  );
}
