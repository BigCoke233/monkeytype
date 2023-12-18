/**
 * 绑定快捷键
 * 
 * @returns {void}
 */

var keyDownTimes = 0;

export default function KeyBind() {
    const Btn = document.getElementById('MonkeyButton')
    const textArea = document.getElementById('text-area')

    document.onkeydown = (event) => {
        if ( event.keyCode=='32' || event.keyCode == '13'){
           event.preventDefault();
           Btn.click()
        }
        else if ( event.keyCode >= 35 || event.keyCode <= 90 ) {
            if (keyDownTimes>9) {
                Btn.click()
                keyDownTimes = 0
                return 0
            }

            let phraseBox = document.getElementById('phrase')
            if (phraseBox) textArea.innerHTML = '';

            textArea.innerText += String.fromCharCode(event.keyCode)
            keyDownTimes++
        }
    }  
}