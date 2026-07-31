"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

type PlayerProps = {
  idx: number;
  name: string;
};

const playerIcons = [
  "emojione-monotone:bear-face",
  "emojione-monotone:frog-face",
  "emojione-monotone:lion-face",
  "emojione-monotone:wolf-face",
  "emojione-monotone:cat-face",
  "emojione-monotone:dog-face",
  "emojione-monotone:pig-face",
  "emojione-monotone:fox-face",
];

const prizeIcons = [
  "",
  "hugeicons:medal-first-place",
  "hugeicons:medal-second-place",
  "hugeicons:medal-third-place",
];

const prizeColors = ["", "#E6AF00", "#BDBDBD", "#A83816"];

export default function Player({ idx, name }: PlayerProps) {
  const [seconds, setSeconds] = useState(0);
  const [prize, setPrize] = useState(0);

  // 시간이 있을 때만 카운트다운
  useEffect(() => {
    if (seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const addMinute = () => {
    setSeconds((prev) => prev + 60);
  };

  const resetTimer = () => {
    setSeconds(() => 0);
  };

  const changePrize = () => {
    setPrize((prev) => ++prev % 4);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainSeconds,
    ).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center gap-1 md:w-[120px] md:h-[130px]">
      <Icon
        icon={playerIcons[idx]}
        style={{ fontSize: "50px", cursor: "pointer" }}
        onClick={addMinute}
      />
      <div style={{ fontSize: "20px", cursor: "pointer" }} onClick={resetTimer}>
        {name}
      </div>
      {prize == 0 ? (
        seconds === 0 ? (
          <div
            className="bg-white text-black px-2 px-1 cursor-pointer"
            onClick={changePrize}
          >
            행동 가능
          </div>
        ) : (
          <div
            style={{ fontSize: "18px", color: "#F2D007", cursor: "pointer" }}
            onClick={changePrize}
          >
            {formatTime(seconds)}
          </div>
        )
      ) : (
        <Icon
          icon={prizeIcons[prize]}
          style={{
            color: prizeColors[prize],
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={changePrize}
        />
      )}
    </div>
  );
}
