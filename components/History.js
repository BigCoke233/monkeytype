'use client'

/**
 * 历史记录
 * 
 * @file components/History
 */

import { getStore } from "@/lib/utils/useLocalStorage";

import {Card, CardBody, useAccordion} from "@nextui-org/react";
import { useEffect } from "react";

/* === 数据 === */

var PhraseHistory;

export default function History() {
    useEffect(()=>{
        PhraseHistory = getStore('PhraseHistory') ? getStore('PhraseHistory').split(',') : []
    
    })

    return (
        <aside className="absolute left-0 inset-y-0">
            <Card>
                <CardBody>
                    <div id="test" />
                </CardBody>
            </Card>
        </aside>
    )
}