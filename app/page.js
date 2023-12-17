/**
 * 用户界面
 * 
 * @returns jsx
 */

import Image from "next/image"

import { Ubuntu } from 'next/font/google'
import { IoSettings } from "react-icons/io5";

import { Button, ButtonGroup } from "@nextui-org/react";
 
// If loading a variable font, you don't need to specify the font weight
const font = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
})

export default function Home() {
  return (
    <main className="">

      <nav className="p-3 md:py-5 md:px-8 flex justify-between">
        <header className="flex items-center gap-3">
          <Image src="/favicon.png" alt="A monkey typist." width={96} height={96}
            className="w-8 md:w-12 drop-shadow-md" />
          <h1 className={`texl-xl md:text-3xl font-bold drop-shadow ${font.className}`}>
            Monkeytype<span className="text-zinc-600">_</span>
          </h1>
        </header>
        <section>
          <Button isIconOnly variant="light" size="lg"><IoSettings /></Button>
        </section>
      </nav>

    </main>
  )
}
