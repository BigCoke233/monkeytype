/**
 * 随机选取词组规则
 * 
 * @param {array} patterns 
 * @returns {array}
 */

import RandomInt from "./utils/Random";

export default function RandomPattern(patterns) {
    let length = patterns.length;
    let random = RandomInt(0, length-1)

    return patterns[random].format
}