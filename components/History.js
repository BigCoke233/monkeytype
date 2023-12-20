'use client'

/**
 * 历史记录
 * 
 * @file components/History
 */

import { ScrollShadow, Divider } from "@nextui-org/react";
import { useEffect } from "react";

import { InitHistroyBox } from "@/lib/History";

/* === 数据 === */

export default function History() {
    useEffect(()=>{
        InitHistroyBox()
    })

    return (
        <>
            <aside className="absolute -right-96 inset-y-0 
            flex justify-center items-center z-10 transition-all"
            id="history-container">
                <div className="bg-zinc-800/[0.5] backdrop-blur-md rounded-sm w-[20rem]" radius="none">
                    <h2 className="font-semibold p-3 text-center">笔记簿</h2>
                    <Divider />
                    <ScrollShadow className="h-96 px-5">
                        <div id="phrase-history"
                        className="flex flex-col-reverse" />
                    </ScrollShadow>
                </div>
            </aside>
        </>
    )
}