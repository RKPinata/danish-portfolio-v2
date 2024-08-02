import Head from "next/head";
import React from "react";
import Navbar from "./Navigation/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Danish Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Software Engineer" />
        {/* Other meta tags */}
      </Head>
      {/* TODO: Remove default dark mode class */}
      <div className="relative flex flex-col antialiased bg-background min-h-screen">
        <Navbar />
        <main className="relative flex flex-col flex-grow text-foreground">
          {children}
        </main>
        {/** TODO: footer */}
        <footer></footer>
      </div>
    </>
  );
}

export default Layout;
