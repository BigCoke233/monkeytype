/**
 * 用户界面
 * ---------
 * 
 * 一些术语的说明：
 * - phrase  词组
 * - pattern 词组规则
 * - word    词素
 * 
 * @returns jsx
 */

/* === 引入 === */

//页面组成部分
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Action from '@/components/Action'
import HistoryBox from '@/components/HistoryBox'

//关键功能
import { GetWords, GetPatterns } from '@/lib/FetchData'

/* === 主函数 === */

export default async function Home() {

  const words = await GetWords()
  const patterns = await GetPatterns()

  return (
    <main className={`h-screen p-3 md:py-5 md:px-8
    flex flex-col justify-between`}>
      <Header />
      <HistoryBox />
      <Action words={words} patterns={patterns} />
      <Footer />
    </main>
  )
}
