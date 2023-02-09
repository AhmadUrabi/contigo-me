import Image from 'next/image'
import { Inter } from '@next/font/google'
import Logo from '../../public/Contigo-Logo.png'
import instagram from '../../public/instagram.svg'
import tiktok from '../../public/tiktok.svg'
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
      <body className={inter.className + "w-screen h-screen bg-gradient-to-tr from-slate-400 to-gray-300 "}>
        <div className="lg:w-3/4 xl:w-2/3 w-full mx-auto lg:my-4 ease-in-out transition-all mb-16 md:mb-0 pb-4">
          <div className="md:bg-gradient-to-tr md:from-gray-200 md:to-gray-50 bg-transparent /*p-6*/ shadow-2xl rounded-lg md:pb-4">
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
              <a className="w-full justify-end hidden md:flex" href="https://www.jh.com.jo" rel="noreferrer" target="_blank"><button className="shadow-md md:w-1/3 p-4 bg-[#231f20] rounded-md md:mb-4 md:mx-4 mt-2 text-gray-100 text-lg md:hover:bg-zinc-600 transition-all ease-in-out">Contact Us</button></a>
            </div>
            {children}
            <div className="flex flex-col-reverse md:flex-row justify-start md:justify-between items-start md:items-center shadow-md bg-white rounded-xl mx-4 mb-4">
              <div className="w-full p-6 md:m-4">
                <h1 className="text-lg md:text-xl">Official Middle East Distributor</h1>
                <h2 className="text-md md:text-lg">Jordanian Hospitality for General Supplies L.L.C.</h2>
                <br />
                <h3>29 Habbar Bin Al-Aswad St.</h3>
                <h3>P.O. Box 7666 Amman 11110 Jordan</h3>
                <h3>(+962) 6 420 5050</h3>
                <a href="https://www.jh.com.jo" target="_blank" rel="noreferrer"><h3>info@jh.com.jo</h3></a>
              </div>
              <div className="items-start flex p-6 md:m-4 flex-col justify-start">
                <h1 className="text-xl whitespace-nowrap">Follow Contigo</h1>
                <a className="flex items-center my-1" href="https://www.instagram.com/contigomiddleeast" rel="noreferrer"><Image src={instagram} width={25} alt="Instagram Icon" className="inline-block" style={{
                  maxWidth: '100%',
                  height: 'auto',
                }} />Instagram</a>
                <a className="flex items-center my-1" href="https://www.instagram.com/contigomiddleeast" rel="noreferrer"><Image src={tiktok} width={25} alt="Instagram Icon" className="inline-block" style={{
                  maxWidth: '100%',
                  height: 'auto',
                }} />Tiktok</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>

  )
}
