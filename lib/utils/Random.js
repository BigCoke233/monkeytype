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