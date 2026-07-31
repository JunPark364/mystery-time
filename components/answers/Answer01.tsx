"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState, useRef } from "react";

export default function AnswerPage01() {
  const [pageIdx, setPageIdx] = useState(0);
  const currentAudio = useRef<HTMLAudioElement | null>(null);

  const next = () => {
    setPageIdx((prev) => ++prev % 2);
  };

  const playSound = (src: string) => {
    // 이전 오디오 정지
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }

    // 새 오디오 재생
    const audio = new Audio(src);
    currentAudio.current = audio;
    audio.play();
  };

  return (
    <div className="flex flex-col flex-1 items-center gap-8 bg-zinc-50 dark:bg-black font-gmk-medium">
      <Image
        src="/case01/actress_answer.png"
        alt="answer"
        width={700}
        height={150}
      />
      <div
        className="flex flex-col p-4 md:w-[880px] rounded-md font-gmk-light"
        style={{ backgroundColor: "#202020", fontSize: "15px" }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="font-gmk-medium">
            정답 키워드 : 대역 배우 / 마약 거래 / 협박 / 수면제 / 자살 위장
          </div>
          <Icon
            className="cursor-pointer mr-2"
            icon="line-md:arrow-right"
            style={{ fontSize: "20px" }}
            onClick={next}
          />
        </div>
        {pageIdx == 0 && (
          <div
            style={{ fontSize: "15px" }}
            onClick={() => playSound("/case01/case01_answer_tts_1.mp3")}
          >
            <p>
              유명 연극 배우 캐서린은 연극 “햄릿의 오필리아” 주연 배우로
              활동하고 있었다. 캐서린에게는 한가지 비밀이 있었는데, 바로 남편인
              감독 알프레드와 극장에서 코카인 암거래를 하고 있다는 사실이었다.
              지정된 좌석 아래에 코카인을 두면 구매자들이 관객으로 극장에 들어와
              연극을 보는 척 하면서 물건을 챙겨가는 형식으로 거래를 진행해왔다.
            </p>
            <p>
              어느날 캐서린은 부모님의 건강 사정으로 급히 고향으로 돌아가게 되어
              한동안 무대에 못 서게 되었고, 감독 알프레드는 극장 운영을 위해
              대역 배우로 신인 여배우 에슐리를 무대에 세우기로 했다. 여느때처럼
              무대 준비를 하던 애슐리는 캐서린의 분장실에서 비밀 일기장을
              발견하고, 본인의 머리핀을 이용해 자물쇠를 풀어 일기장을
              홈쳐보았다. 일기장에는 캐서린이 남편 알프레드와 함께 코카인 거래를
              하고 있다는 내용이 적혀있었고 사실을 알게된 애슐리는 이를 이용해
              알프레드를 협박하기로한다.
            </p>
          </div>
        )}
        {pageIdx == 1 && (
          <div
            style={{ fontSize: "15px" }}
            onClick={() => playSound("/case01/case01_answer_tts_2.mp3")}
          >
            <p>
              애슐리는 알프레드에게 해당 사실을 경찰에 알리지 않는 대가로
              2억원을 요구하는 협박 쪽지를 알프레드의 감독 사무실에 남겼다.
              메세지를 읽은 알프레드는 요구한 2억원을 주겠다는 답장을 분장실에
              남기고 애슐리를 살해할 계획을 세운다.
            </p>
            <p>
              우선 애슐리의 죽음을 자살로 위장하기 위해 애슐리가 사용하는
              분장실에 몰래카메라를 설치했다. 애슐리의 누드 사진을 확보한
              알프레드는 공연 전 애슐리가 항상 커피를 마신다는 사실을 이용해
              에슐리가 마실 커피에 수면제를 넣었다. 그 후 카메라로 에슐리가 잠든
              모습을 확인한 알프레드는 확보한 에슐리의 누드 사진을 익명으로 여러
              언론에 보냈다. 그 후 분장실로 가 밧줄로 목을 졸라 에슐리를 죽이고
              천장에 매달아 마치 누드사진이 유출된 신인 여배우가 수치심을 이기지
              못하고 스스로 목숨을 끊은 것처럼 위장하였다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
