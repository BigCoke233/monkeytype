/**
 * 页脚
 * 
 * @file components/Footer
 * @returns jex
 */

const VERSION = '2.0.0-Beta.20231220'

export default function Footer() {
    return (
        <footer className="flex justify-between drop-shadow text-zinc-300
        text-sm">
            <p>版本：{VERSION}</p>
            <p>作者 <a href="https://github.com/BigCoke233">Eltrac</a></p>
        </footer>
    )
}