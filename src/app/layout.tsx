import Image from 'next/image'
import { Inter } from '@next/font/google'
import Logo from '../../public/Contigo-Logo.png'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export default function CountriesLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={inter.className + "w-screen h-screen bg-gradient-to-tr from-slate-400 to-gray-300"}>
        <div className="lg:w-3/4 xl:w-2/3 w-full mx-auto lg:my-4 ease-in-out transition-all">
          <div className="md:bg-gradient-to-tr md:from-gray-200 md:to-gray-50 bg-transparent /*p-6*/ shadow-2xl rounded-lg">
            <div className="flex justify-center md:justify-between items-center p-6">
              <a href="/"><Image
                alt="Contigo logo"
                src={Logo}
                width={400}
                height={400}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              </a>
              <a className="w-full justify-end hidden md:flex" href="https://www.jh.com.jo"><button className="shadow-md md:w-1/3 p-4 bg-[#231f20] rounded-md md:mb-4 md:mx-4 mt-2 text-gray-100 text-lg hover:bg-zinc-600 transition-all ease-in-out">Contact Us</button></a>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>

  )
}
