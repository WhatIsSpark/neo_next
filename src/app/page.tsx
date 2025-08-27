// import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Test Exp3000",
  description: "Test Exp description",
};

export default function Home() {
  return (
    // <React.Profiler id="hello">
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          test 3000
        </main>
      </div>
    // </React.Profiler>
  );
}
