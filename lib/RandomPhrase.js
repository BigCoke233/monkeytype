/**
 * 生成随机词组
 * 
 * @param {array} words   使用 GetWords() 返回的数据
 * @param {array} pattern 用词性关键字组成的数组
 * @returns {string}
 */

import RandomInt from "./utils/Random";

export default function RandomPhrase(words, pattern) {

    //遍历给出的词组规则生成词组
    let result = '';
    pattern.map((wordType) => {
        let wordList = words[wordType]
        let length = wordList.length

        result += wordList[RandomInt(0,length-1)]
    })

    return result

}