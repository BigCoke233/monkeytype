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
          <div id="tailwindInitializer" className='text-lg border-b border-zinc-600 py-2' />
          <div className='monkey' />
          {children}
      </body>
    </html>
  )
}
