'use client'

/**
 * 页眉
 * 
 * @file components/Header
 * @returns jsx
 */

/* === 引入 === */

import Image from "next/image"

import { Ubuntu } from 'next/font/google'

import { IoSettings, IoBook } from "react-icons/io5";
import { Button, ButtonGroup } from "@nextui-org/react";

/* === 使用字体 === */

const font = Ubuntu({
    subsets: ['latin'],
    display: 'swap',
    weight: '700',
})

function ToggleHistory() {
    const HistoryBox = document.getElementById('history-container')
    HistoryBox.classList.toggle('-right-96')
    HistoryBox.classList.toggle('right-5')
}

/* === 主函数 === */

export default function Header() {
    return (
        <nav className="flex justify-between relative z-20">
            <header className="flex items-center gap-3">
                <Image src="/favicon.png" alt="A monkey typist." width={96} height={96}
                    className="w-8 md:w-12 drop-shadow-md" />
                <h1 className={`texl-xl md:text-3xl font-bold drop-shadow-md ${font.className}`}>
                    Monkeytype<span className="text-zinc-600">_</span>
                </h1>
            </header>
            <section>
                <Button isIconOnly variant="ghost" size="lg" onClick={()=>ToggleHistory()}><IoBook /></Button>
                <Button isIconOnly variant="light" size="lg"><IoSettings /></Button>
            </section>
        </nav>
    )
}