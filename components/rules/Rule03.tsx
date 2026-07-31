import Image from "next/image";
import { Icon } from "@iconify/react";

export default async function RulePage03() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4 bg-zinc-50 dark:bg-black font-gmk-medium">
      <div className="flex items-center justify-between p-6 gap-20">
        <div className="flex w-50 flex-col items-center justify-center gap-1 p-6 border-3">
          <div className="font-gmk-bold" style={{ fontSize: "28px" }}>
            질문하기
          </div>
          <div className="flex items-center justify-center p-3 gap-1">
            <div style={{ fontSize: "22px" }}>+</div>
            <Icon
              icon="material-symbols:timer-outline"
              style={{ fontSize: "22px" }}
            />
            <div style={{ fontSize: "22px" }}>1min</div>
          </div>
        </div>
        <div
          className="flex w-50 flex-col items-center justify-center gap-1 p-6 border-3"
          style={{ fontSize: "24px" }}
        >
          <div className="font-gmk-bold" style={{ fontSize: "28px" }}>
            정답 발의
          </div>
          <div className="flex items-center justify-center p-3 gap-1">
            <div style={{ fontSize: "22px" }}>+</div>
            <Icon
              icon="material-symbols:timer-outline"
              style={{ fontSize: "22px" }}
            />
            <div style={{ fontSize: "22px" }}>3min</div>
          </div>
        </div>
      </div>
      <Image
        src="/rule/detective.svg"
        alt="detective"
        width={150}
        height={150}
        priority
      />
    </div>
  );
}
