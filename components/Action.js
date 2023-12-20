'use client'

/**
 * 主要操作区域
 * 
 * @file components/Action.js
 */

/* === 引入 === */

//UI
import Image from 'next/image'
import { Button, Tooltip } from '@nextui-org/react'

import { IoShuffle } from "react-icons/io5";

//核心功能
import RandomPhrase from '@/lib/RandomPhrase'
import RandomPattern from '@/lib/RandomPattern'
import KeyBind from '@/lib/KeyBind'
import { PushToHistory, GetHistory } from '@/lib/History'

//使用钩子
import { useEffect, useRef } from "react";

/* === 工具函数 === */

/**
 * 生成随机词组
 * 
 * @param {array} words 
 * @param {array} patterns 
 * 
 * @returns {void}
 */

function GeneratePhrase(words, patterns) {
    //生成词组
    let phrase = RandomPhrase(words,RandomPattern(patterns))

    //放入文本框内
    const textArea = document.getElementById('text-area')
    textArea.innerHTML = ''
    textArea.appendChild(phrase)

    //记录
    PushToHistory(phrase)
}

/**
 * 倒转语序
 */

function ReversePhrase(textArea) {
    //获取最近的历史记录
    const PhraseHistory = GetHistory()
    const len = PhraseHistory.length
    const latest = PhraseHistory[len-1]
    //倒序放入文本框内
    textArea.innerHTML = '' //清空文本框
    latest.reverse().forEach((word) => {
        let span = document.createElement('span')
        span.innerText = word
        textArea.appendChild(span)
    })
}

/* === 主函数 === */

export default function Action({ words, patterns }) {
    //确保 useEffect 只调用一次
    const initialized = useRef(false)
    useEffect(() => {
    if (!initialized.current) {
        initialized.current = true

        GeneratePhrase(words, patterns)
        KeyBind()
    }
    }, [])

    return (
        <section className='self-center flex flex-col gap-8 justify-center items-center'>
        
            {/* 文字内容区域 */}
            <div id="text-area" className='text-center text-5xl font-bold tracking-widest'>
                <p id="phrase">......</p>
            </div>

            {/* 操作按钮区域 */}
            <div id="actions" className='flex flex-rows gap-3'>

                <Button radius="full" size="lg" id="MonkeyButton"
                    onPress={() => GeneratePhrase(words, patterns)} className='outline-none'
                    startContent={<Image src="/monkey.png" width={20} height={20} alt="Monkey" />}>
                    噫噫哦噫噫
                </Button>
                
                <Tooltip content="倒转语序" placement='bottom' showArrow={true}>
                    <Button isIconOnly size="lg" id="reverseButton" radius="full"
                    onPress={() => ReversePhrase(document.getElementById('text-area'))}>
                        <IoShuffle />
                    </Button>
                </Tooltip>
                
            </div>

        </section>
    )
}