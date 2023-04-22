import DynamicApp from '@/components/DynamicApp'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
          <title>React Markdown Previewer | Built in Nextjs and TailwindCSS</title>       
          <meta name="description" content="A React editor previewer equipped with Github flavored markdown. Built using Nextjs and TailwindCSS." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/screen.png" />
      </Head>
      <main className="w-screen h-full min-h-screen flex flex-col justify-start items-center bg-gradient-to-bl from-amber-200 to-zinc-100 dark:from-stone-900 dark:to-stone-400 dark:bg-gradient-to-tr">
        <DynamicApp />   
      </main>
    </>
  )
}
