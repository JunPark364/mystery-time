import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-30 py-32 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-center sm:text-center w-full">
          <h1 className="text-8xl font-kmu leading-10 tracking-tight text-black dark:text-zinc-50">
            미스터리타임
          </h1>
          <div className="flex items-center gap-6 px-20 mt-5 w-full">
            <div className="flex-1 border-1"></div>
            <Icon icon="at-icons:diamond" />
            <div className="flex-1 border-1"></div>
          </div>
          <Icon
            icon="healthicons:magnifying-glass-outline"
            style={{ fontSize: 100 }}
          />
        </div>
        <div className="flex flex-col w-full justify-center gap-4 text-base sm:flex-row">
          <Link
            className="flex h-12 w-full font-kmu items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/rule/1"
            rel="noopener noreferrer"
            style={{ fontSize: 18 }}
          >
            <Icon icon="ion:dice-sharp" style={{ fontSize: 26 }} />
            규칙 설명
          </Link>
          <Link
            className="flex h-12 w-full font-kmu items-center justify-center gap-2 rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/case/1"
            rel="noopener noreferrer"
            style={{ fontSize: 18 }}
          >
            <Icon
              icon="fluent:book-question-mark-20-filled"
              style={{ fontSize: 26 }}
            />
            Case 01
          </Link>
        </div>
      </main>
    </div>
  );
}
