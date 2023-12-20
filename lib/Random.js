/**
 * 生成随机整数
 * 
 * @param {int} min 下限
 * @param {int} max 上限
 * @returns 
 */

export default function RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

/**
 * 随机选取词组规则
 * 
 * @param {array} patterns 
 * @returns {array}
 */

export function RandomPattern(patterns) {
    let length = patterns.length;
    let random = RandomInt(0, length-1)

    return patterns[random].format
}

/**
 * 生成随机词组
 * 
 * @param {array} words   使用 GetWords() 返回的数据
 * @param {array} pattern 用词性关键字组成的数组
 * @returns {node}
 */

export function RandomPhrase(words, pattern) {

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