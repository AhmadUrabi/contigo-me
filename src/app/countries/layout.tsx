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
    <div className="lg:w-3/4 xl:w-2/3 w-full mx-auto my-4">
        <div className="bg-gray-100 p-6 shadow-xl rounded-lg">
            <Image
            alt="Contigo logo"
            src={Logo}
            width={400}
            height={400}
            style={{
            maxWidth: '100%',
            height: 'auto',
            }}
        />
        <hr className="my-4 h-[2px] bg-gray-900/50"/>
            {children}
        </div>
    </div>
      
  )
}
