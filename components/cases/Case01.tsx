"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/ui/Modal";

type HintProps = {
  type: string;
  content: string;
};

const hints: HintProps[] = [
  {
    type: "picture",
    content: "/case01/actress_hint_01.png",
  },
  {
    type: "sentence",
    content: "캐서린은 매일 일기를 쓴다",
  },
  {
    type: "sentence",
    content: "캐서린은 사건 당일 부모님을 간병하러 고향에 내려가 있었다",
  },
  {
    type: "picture",
    content: "/case01/actress_hint_02.png",
  },
  {
    type: "sentence",
    content: "부검 결과, 에슐리에게 저항의 흔적은 없었다",
  },
  {
    type: "picture",
    content: "/case01/actress_hint_03.png",
  },
];

export default function CasePage01() {
  const [isOpen, setIsOpen] = useState(false);
  const [currHint, setCurrHint] = useState<HintProps>({
    type: "sentence",
    content: "",
  });

  const openHint = (hint: HintProps) => {
    setCurrHint(hint);
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col flex-1 items-center gap-4 bg-zinc-50 font-gmk-medium dark:bg-black">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {currHint.type == "sentence" ? (
          <div
            className="text-black font-kmu py-10 px-20"
            style={{ fontSize: "40px" }}
          >
            {currHint.content}
          </div>
        ) : (
          <Image
            src={currHint.content}
            alt="hint-modal"
            width={1000}
            height={150}
            className="h-auto"
            priority
          />
        )}
      </Modal>
      <div
        className="flex flex-col py-2 px-8 gap-1 rounded-md"
        style={{ backgroundColor: "#202020", fontSize: "18px" }}
      >
        <p>
          밤발리나 극장 분장실에서 에슐리가 목을 매단 상태로 숨진 채 발견되었다.
          사건의 전말은? (키워드 5개)
        </p>
      </div>
      <div className="flex gap-6">
        <Image
          src="/case01/actress_main.png"
          alt="actress-main"
          width={800}
          height={150}
          className="h-auto"
          priority
        />
        <div className="flex flex-col gap-4 py-4">
          {hints.map((hint, index) => (
            <button
              key={index}
              className="rounded-sm p-2 border-1 cursor-pointer transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              onClick={() => openHint(hint)}
            >
              Hint {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
