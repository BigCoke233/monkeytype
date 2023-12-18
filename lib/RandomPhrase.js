/**
 * 生成随机词组
 * 
 * @param {array} words   使用 GetWords() 返回的数据
 * @param {array} pattern 用词性关键字组成的数组
 * @returns {node}
 */

import RandomInt from "./utils/Random";

export default function RandomPhrase(words, pattern) {

    //创建 HTML 容器
    let result = document.createElement('p');
    result.id = 'phrase'

    //遍历给出的词组规则生成词组
    pattern.map((wordType) => {
        let wordList = words[wordType]
        let length = wordList.length

        //将生成的一个词素单独放在一个 span 标签里
        let span = document.createElement('span')
        span.innerText = wordList[RandomInt(0,length-1)]
        result.appendChild(span)
    })

    return result

}