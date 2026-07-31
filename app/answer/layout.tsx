"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Layout({ children }: { children: React.ReactNode }) {
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
          사건의 전말
        </div>
      </div>

      <main className="flex flex-col flex-1 items-center">{children}</main>
    </div>
  );
}
