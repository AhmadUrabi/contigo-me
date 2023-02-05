import Image from 'next/image'
import { Inter } from '@next/font/google'
import Logo from '../../../public/Contigo-Logo.png'

const inter = Inter({ subsets: ['latin'] })

export default function CountriesLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className="lg:w-3/4 xl:w-2/3 w-full mx-auto lg:my-4 ease-in-out transition-all">
        <div className="sm:bg-slate-50 bg-transparent p-6 shadow-2xl rounded-lg">
            <a href="/countries"><Image
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
        <hr className="my-4 h-0 border-1 border-gray-900/50"/>
            {children}
        </div>
    </div>
      
  )
}
