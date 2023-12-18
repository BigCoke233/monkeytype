/**
 * 获取数据
 * 
 * @file lib/FetchData
 * @exports function
 */

/* === 引入 === */

import { promises as fs } from 'fs'

/* === 函数 === */

/**
 * 获取 data/words.json 中的数据
 * 
 * @returns array
 */

export async function GetWords() {
    const res = await fs.readFile(process.cwd() + '/data/words.json', 'utf8');
    const words = JSON.parse(res)

    return words
}

/**
 * 获取 data/patterns.json 中的数据
 * 
 * @returns array
 */

export async function GetPatterns() {
    const res = await fs.readFile(process.cwd() + '/data/patterns.json', 'utf8');
    const patterns = JSON.parse(res)

    return patterns
}