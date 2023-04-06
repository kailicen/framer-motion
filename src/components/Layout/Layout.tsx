import React, { ReactNode } from "react";
import Header from "../Header";
import Head from "next/head";
import { useSelector } from "react-redux";
import { selectPizza } from "@/slices/basketSlice";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  const pizza = useSelector(selectPizza);

  return (
    <div
      className="relative text-white font-mono
      bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
    >
      <Head>
        <title>Pizza Joint</title>
      </Head>

      <Header />

      <main>{children}</main>
    </div>
  );
}

export default Layout;
