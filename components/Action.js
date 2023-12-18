'use client'

/**
 * 主要操作区域
 * 
 * @file components/Action.js
 */

/* === 引入 === */

import Image from 'next/image'

import { setStore, getStore } from '@/lib/utils/useLocalStorage'

import RandomPhrase from '@/lib/RandomPhrase'
import RandomPattern from '@/lib/RandomPattern'
import KeyBind from '@/lib/KeyBind'

import { Button } from '@nextui-org/react'

import { useEffect } from "react";

/* === 数据 === */

var PhraseHistory = getStore('PhraseHistory') ? getStore('PhraseHistory').split(',') : []

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
    PushToHistory(phrase.innerHTML)
}

/**
 * 记入生成历史
 * 
 * @param {node} phrase 
 */

function PushToHistory(phrase) {
    PhraseHistory.push(phrase);
    setStore('PhraseHistory', PhraseHistory)
}

/* === 主函数 === */

export default function Action({ words, patterns }) {
    useEffect(() => {
        GeneratePhrase(words, patterns)
        KeyBind()
    })
    return (
        <section className='self-center flex flex-col gap-8 justify-center items-center'>
        
            {/* 文字内容区域 */}
            <div id="text-area" className='text-center text-5xl font-bold tracking-widest'>
                <p id="phrase">......</p>
            </div>

            {/* 操作按钮区域 */}
            <div id="actions">
                <Button radius="full" variant="shadow" size="lg" id="MonkeyButton"
                    onPress={() => GeneratePhrase(words, patterns)} className='outline-none'
                    startContent={<Image src="/monkey.png" width={20} height={20} alt="Monkey" />}>
                    噫噫噫哦噫
                </Button>
            </div>

        </section>
    )
}