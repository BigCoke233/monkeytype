'use client'

/**
 * 处理历史记录
 * 
 * @file lib/History
 * @exports function
 */

/* === 引入 === */
var ls = require('local-storage');

/* === 数据 === */

var originalData = ls.get('PhraseHistory')
var PhraseHistory = originalData ? JSON.parse(originalData) : []

const phraseClassName = 'text-lg border-b border-zinc-600 py-2'

const MaxHistory = 100 //最大记录数

/* === 函数 === */

/**
 * 获取历史记录
 * 
 * @returns {array}
 */

export function GetHistory() {
    return PhraseHistory
}

/**
 * 向生成历史添加新的记录
 * 
 * @param {node} phrase
 */

export function PushToHistory(phrase) {
    /* 检查记录数量，若超限则删除最老的一个 */
    while (PhraseHistory.length >= MaxHistory) PhraseHistory.shift()

    /* 添加新记录 */
    //创建一个空数组，用来记录组成这一词组的词素
    let phraseArray = []
    //将每一个词素推入这个词组的数组
    phrase.childNodes.forEach(element => {
        phraseArray.push(element.innerText)
    })
    UpdateHistoryBox(phrase.childNodes)                      //更新历史记录盒子
    PhraseHistory.push(phraseArray)                          //将词组推入历史记录
    ls('PhraseHistory', JSON.stringify(PhraseHistory)) //将数组转为 JSON 字符，然后存入 localStorage
}

/**
 * 初始化历史记录盒子
 * called in useEffect()
 */

export function InitHistroyBox() {
    const HistoryBox = document.getElementById('phrase-history')
    //获取历史数据
    var originalData = ls.get('PhraseHistory')
    var PhraseHistory = originalData ? JSON.parse(originalData) : []
    //生成列表
    PhraseHistory.map((phrase) => {
        //为一个词组创建 P 标签
        let phraseHTML = document.createElement('p')
        phraseHTML.className = phraseClassName
        //处理单个词组
        phrase.map((word) => {
            //将每个词素放入单独的 span 标签内
            let span = document.createElement('span')
            span.innerText = word
            //将词组放入 P 标签
            phraseHTML.appendChild(span)
        })
        HistoryBox.appendChild(phraseHTML)
    })
}

/**
 * 更新历史记录盒子显示内容
 * 
 * @param {node} phrase 
 */

export function UpdateHistoryBox(phrase) {
    const HistoryBox = document.getElementById('phrase-history')
    //为词组创建 P 标签
    let phraseHTML = document.createElement('p')
    phraseHTML.className = phraseClassName
    //处理词组
    phrase.forEach((word) => {
        //将每个词素放入单独的 span 标签内
        let span = document.createElement('span')
        span.innerText = word.innerText
        //将词组放入 P 标签
        phraseHTML.appendChild(span)
    })
    HistoryBox.appendChild(phraseHTML)
}