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
      <body className='bg-gradient-to-b from-zinc-700 to-zinc-800 min-h-screen'>
          <div id="tailwindInitializer" className='hidden text-lg border-b border-zinc-600 py-2 flex justify-between text-sm text-zinc-400 items-center opacity-0 hover:opacity-100 transition' />
          <div className='monkey' />
          {children}
      </body>
    </html>
  )
}
