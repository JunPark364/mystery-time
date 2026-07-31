"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useParams, useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const params = useParams();

  const currentPage = Number(params.id);

  const movePrev = () => {
    if (currentPage > 1) {
      router.push(`/rule/${currentPage - 1}`);
    }
  };

  const moveNext = () => {
    if (currentPage < 6) {
      router.push(`/rule/${currentPage + 1}`);
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-between gap-4 pb-20 bg-zinc-50 font-kmu dark:bg-black">
      <div className="flex items-center justify-between w-full px-10 pt-10">
        <Link className="flex w-10 justify-center" href="/">
          <Icon icon="material-symbols:home" style={{ fontSize: "32px" }} />
        </Link>
        <div
          className="flex flex-col flex-1 justify-center items-center text-center"
          style={{ fontSize: "40px" }}
        >
          규칙 설명
        </div>
        <div className="w-10"></div>
      </div>

      <main className="flex flex-col flex-1 items-center">{children}</main>
      <div className="flex items-center justify-between gap-2 w-full px-50">
        <div className="flex justify-center md:w-[120px]">
          <button
            className="flex h-8 font-kmu items-center justify-center gap-2 rounded-full bg-foreground px-2 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] cursor-pointer"
            onClick={movePrev}
            disabled={currentPage <= 1}
          >
            <Icon icon="mingcute:left-fill" style={{ fontSize: "24px" }} />
          </button>
        </div>
        <div className="flex-1 text-center">{currentPage} / 6</div>
        <div className="flex justify-center md:w-[120px]">
          <button
            className="flex h-8 font-kmu items-center justify-center gap-2 rounded-full bg-foreground px-2 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] cursor-pointer"
            onClick={moveNext}
            disabled={currentPage >= 6}
          >
            <Icon icon="mingcute:right-fill" style={{ fontSize: "24px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
