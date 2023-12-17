/**
 * 根布局
 * 
 * @file layout.js
 * @returns jsx
 */

import './globals.css'
import * as React from "react";

export const metadata = {
  title: '猴子打字机',
  description: '为你的下一篇巨作提供灵感。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-cn" className='dark'>
      <body className='bg-gradient-to-b from-zinc-800 to-zinc-900 min-h-screen'>
          {children}
      </body>
    </html>
  )
}
