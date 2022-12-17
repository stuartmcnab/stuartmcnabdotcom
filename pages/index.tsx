import Head from 'next/head'
import { Inter } from '@next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>STUART MCNAB | SOFTWARE ENGINEER</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen w-screen'>
        <div className="h-[90%] text-center text-xxxl font-bold bg-[url('/images/StockholmTrees.jpg')] bg-cover pt-20 md:pt-12 ">
          <h2 className='w-fit mx-auto hover:bg-pink-600 hover:text-white bg-white text-pink-600 tracking-wide md:tracking-wider pl-[0.25em] md:pl-[0.5em]'>
           STUART MCNAB
          </h2>
          <h2 className='w-fit mx-auto hover:bg-green-600 hover:text-white bg-white text-green-600 tracking-wider md:tracking-widest mx-auto my-40 pl-[0.5em] md:pl-[1em]'>
           SOFTWARE
          </h2>
          <h2 className='w-fit mx-auto hover:bg-orange-600 hover:text-white bg-white text-orange-600 tracking-wider md:tracking-widest pl-[0.5em] md:pl-[1em]'>
           ENGINEER
          </h2>
        </div>
        <div className='bg-black text-white text-bold w-[100%] m-h-[100px] text-center align-middle my-4 tracking-wide'>
          <div className='m-3 inline-block'>Building things for the web with:</div>
          <div className='m-3 inline-block'>React</div>
          <div className='m-3 inline-block'>Typescript</div>
          <div className='m-3 inline-block'>JavaScript</div>
        </div>
        <div className='w-screen'>
          <div className='bg-pink-600 text-white w-fit px-2 py-1'>Projects I&apos;ve worked on:</div>
          <div className='inline-grid w-[100%] grid-cols-1 md:grid-cols-4'>
          <div className='bg-yellow-400 m-2 w-fit p-2 place-self-center'>
            <h3 className='bg-white w-fit text-red-600 p-1'>Restaurant Flavours</h3>
            <Image className='h-32' src='/images/lays.jpg' alt='' width='200' height='200'/>
            <h3 className='bg-white w-fit text-red-600 p-1'>Pepsi / Lay&apos;s crisps</h3>
          </div>
          <div className='bg-yellow-900 m-2 w-fit p-2 place-self-center'>
            <h3 className='bg-white w-fit text-yellow-700 p-1'>Pleasure Sensorium</h3>
            <Image className='h-32' src='/images/magnum.jpg' alt='' width='200' height='150'/>
            <h3 className='bg-white w-fit text-yellow-700 p-1'>Unilever / Magnum</h3>
          </div>
          <div className='bg-blue-700 m-2 w-fit p-2 place-self-center'>
            <h3 className='bg-white w-fit text-blue-900 p-1'>Black Friday</h3>
            <Image className='h-32' src='/images/priceline.jpeg' alt='' width='200' height='200'/>
            <h3 className='bg-white w-fit text-blue-900 p-1'>Priceline</h3>
          </div>
          <div className='bg-purple-700 m-2 w-fit p-2 place-self-center'>
            <h3 className='bg-white w-fit text-pink-600 p-1'>Optimisation</h3>
            <Image className='h-32' src='/images/experian.png' alt='' width='200' height='200'/>
            <h3 className='bg-white w-fit text-pink-600 p-1'>Experian</h3>
          </div>
          </div>
        </div>
        <footer className='my-2 p-2 bg-black text-white text-center h-30'>
        <div className='p-2'>Find me on: <a className='mx-2 hover:bg-pink-600 p-2' target="_blank" href="https://www.linkedin.com/in/stuart-mcnab">LinkedIn</a><a className='mx-2 hover:bg-green-600 p-2' target="_blank" href="https://github.com/stuartmcnab">GitHub</a></div>
        <div>&copy; Stuart McNab {" "}{(new Date().getFullYear())}</div>
      </footer>
      </main>
    </>
  )
}
