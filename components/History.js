'use client'

/**
 * 历史记录
 * 
 * @file components/History
 */

import { getStore } from "@/lib/utils/useLocalStorage";

import { Card, CardBody, ScrollShadow, Divider } from "@nextui-org/react";
import { useEffect } from "react";

/* === 数据 === */

var PhraseHistory;

export default function History() {
    useEffect(()=>{
        const HistoryBox = document.getElementById('phrase-history')

        PhraseHistory = getStore('PhraseHistory') ? getStore('PhraseHistory').split(',') : []
        PhraseHistory.map((item) => {
            const node = new DOMParser().parseFromString(item, "text/html").childNodes[0]
            HistoryBox.appendChild(node)
        })
    })

    return (
        <aside className="absolute left-5 inset-y-0 flex justify-center items-center z-10">
            <Card className="bg-zinc-700 h-96" radius="none">
                <h2 className="font-semibold p-3">笔记簿</h2>
                <Divider />
                <ScrollShadow className="h-96">
                    <CardBody>
                        <div id="phrase-history" />
                    </CardBody>
                </ScrollShadow>
            </Card>
        </aside>
    )
}