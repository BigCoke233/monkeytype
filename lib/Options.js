'use client'

/**
 * 处理用户设置
 * 
 * @file lib/Options
 * @exports function
 */

/* === 引入 === */

//use localStorage
var ls = require('local-storage');

/* === 数据 === */

var optionData = ls('options') ? JSON.parse(ls('options')) : {
    "buttonText": "噫噫哦噫噫"
}

/* === 函数 === */

/**
 * 获取数据
 * 
 * @returns json
 */

export function GetOptions() {
    return optionData
}

/**
 * 更新设置项
 */

export function UpdateOptions() {
    const optionHTML = document.getElementById('options').childNodes
    optionHTML.forEach((option) => {
        let optionInput = option.childNodes[0].childNodes[1].childNodes[0]
        let optionName = optionInput.id.replace('option-','')
        optionData[optionName] = optionInput.value
    })
    console.log(optionData)
    ls.set('options', JSON.stringify(optionData))
}