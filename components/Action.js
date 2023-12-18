'use client'

/**
 * 主要操作区域
 */

import Image from 'next/image'

import RandomPhrase from '@/lib/RandomPhrase'
import RandomPattern from '@/lib/RandomPattern'

import { Button } from '@nextui-org/react'

import { useEffect } from "react";

/**
 * 修改页面中的文字框
 * 
 * @param {string} phrase 
 */

function PushPhrase(textArea, phrase) {
    textArea.innerText = phrase
}

function GeneratePhrase(words, patterns, textArea) {
    PushPhrase(textArea, RandomPhrase(words,RandomPattern(patterns)))
}

/**
 * 主函数
 * 
 * @returns jsx
 */

export default function Action({ words, patterns }) {
    useEffect(() => {
        const textArea = document.getElementById('text-area')
        GeneratePhrase(words, patterns, textArea)
    })
    return (
        <section className='self-center flex flex-col gap-8 justify-center items-center'>
        
            {/* 文字内容区域 */}
            <div id="text-area" className='text-center text-5xl font-bold tracking-widest'>
                ...
            </div>

            {/* 操作按钮区域 */}
            <div id="actions">
                <Button radius="full" variant="shadow" size="lg" 
                    onPress={() => {
                        const textArea = document.getElementById('text-area')
                        GeneratePhrase(words, patterns, textArea)
                    }}
                    startContent={<Image src="/monkey.png" width={20} height={20} alt="Monkey" />}>
                    噫噫噫哦噫
                </Button>
            </div>

        </section>
    )
}