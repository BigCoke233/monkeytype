'use client'

/**
 * 处理历史记录
 * 
 * @file lib/History
 * @exports function
 */

/* === 引入 === */

//use localStorage
var ls = require('local-storage');

/* === 数据 === */

var originalData = ls.get('PhraseHistory')
var PhraseHistory = originalData ? JSON.parse(originalData) : []

const phraseClassName = 'text-lg border-b border-zinc-600 py-2 flex justify-between items-center'

const MaxHistory = 50 //最大记录数

/* === 工具函数 === */

/**
 * 更新 localStorage
 */

export function UpdateLocal(PhraseHistory) {
    ls('PhraseHistory', JSON.stringify(PhraseHistory))
}

/**
 * 获取历史记录
 * 
 * @returns {array}
 */

export function GetHistory() {
    return PhraseHistory
}

/* === 数据操作 === */

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
    NewPhraseInBox(phrase.childNodes)                      //更新历史记录盒子
    PhraseHistory.push(phraseArray)                          //将词组推入历史记录
    UpdateLocal(PhraseHistory) //将数组转为 JSON 字符，然后存入 localStorage
}

/**
 * 根据历史记录 Node
 * 删除对应的一条记录
 * 
 * @param {node} node 
 */

export function RemoveFromHistory(node) {
    //根据 Node 恢复原数据
    let phrase = node.childNodes[0].childNodes
    let phraseArray = []
    phrase.forEach((span) => {
        phraseArray.push(span.innerText)
    })
    //遍历 PhraseHistory 并删除对应元素
    PhraseHistory = PhraseHistory.filter((item) => {
        return item.toString() != phraseArray.toString()
    })
    //更新数据
    UpdateLocal(PhraseHistory)
}

/* === DOM 操作 === */

/**
 * 初始化历史记录盒子
 * called in useEffect()
 */

export function InitHistroyBox() {
    //获取历史数据
    var originalData = ls.get('PhraseHistory')
    var PhraseHistory = originalData ? JSON.parse(originalData) : []
    //生成列表
    PhraseHistory.map((phrase) => NewPhraseInBox(phrase))
}

/**
 * 向历史记录盒子添加一条新记录
 * 
 * @param {array} phrase 
 */
export function NewPhraseInBox(phrase) {
    const HistoryBox = document.getElementById('phrase-history')
    //为词组创建 P 标签
    let phraseHTML = document.createElement('div')
        phraseHTML.className = phraseClassName
        phraseHTML.appendChild(document.createElement('p'))
    //处理词组
    phrase.forEach((word) => {
        //将每个词素放入单独的 span 标签内
        let content = word.innerText ? word.innerText: word
        let span = document.createElement('span')
            span.innerText = content
        //将词组放入 P 标签
        phraseHTML.childNodes[0].appendChild(span)
    })
    //添加按钮
    AddHistoryButtonsTo(phraseHTML)

    HistoryBox.appendChild(phraseHTML)
}

/**
 * 为一项历史记录添加操作按钮
 */

export function AddHistoryButtonsTo(node) {
    //创建按钮区域
    const actionDiv = document.createElement('div')
    actionDiv.className = 'history-action-area'
    
    //删除按钮
    const delBtn = MakeDeleteButton()
    actionDiv.appendChild(delBtn)

    //添加按钮
    node.appendChild(actionDiv)
}

/* === 按钮 === */

/**
 * 创建删除按钮
 * 
 * @returns node
 */

function MakeDeleteButton() {
    const delBtn = document.createElement('button')
    delBtn.innerText = '删除'
    delBtn.className = 'del-btn text-sm text-zinc-400 opacity-0 transition'
    delBtn.addEventListener('click', ()=> {
        const phraseContainer = delBtn.parentNode.parentNode
        //删除 HTML
        phraseContainer.remove()
        //删除数据
        RemoveFromHistory(phraseContainer)
    })
    return delBtn
}