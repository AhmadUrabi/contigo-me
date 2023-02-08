import { Inter } from '@next/font/google'
import Image from 'next/image'
import JordanFlag from '../../public/jordan.png'
import QatarFlag from '../../public/qatar.png'
import SaudiFlag from '../../public/Saudi.png'
import KuwaitFlag from '../../public/Kuwait.png'
import UAEFlag from '../../public/UAE.png'

const countryList = [
    { name: 'Jordan', flag: JordanFlag, url: '/Jordan' },
    { name: 'Qatar', flag: QatarFlag, url: '/Qatar' },
    { name: 'Saudi Arabia', flag: SaudiFlag, url: '/Saudi' },
    { name: 'Kuwait', flag: KuwaitFlag, url: '/Kuwait' },
    { name: 'UAE', flag: UAEFlag, url: '/UAE' },
]

export default function countries() {
  return (
    <main>
      <h1 className="text-center text-2xl font-medium text-[#231f20]">To find your nearest Contigo Retailer, select your country:</h1>

      <div className="w-full flex justify-around align-center flex-wrap py-9">
        {countryList.map((country, index) => (
            <a key={index} href={country.url} className="w-full md:w-auto"><div  className="p-4 bg-white rounded-xl mx-3  my-2 hover:-translate-y-2 hover:shadow-xl shadow-md transition-all ease-in-out">
                <div className="text-center flex flex-row justify-between items-center md:flex-col">
                    <Image
                    alt={country.name + " flag"}
                    src={country.flag}
                    width={100}
                    height={100}
                    style={{
                    maxWidth: '100%',
                    height: 'auto',
                    }}
                    className="rounded-full w-1/4 md:w-[80%] md:mb-4"
                    />
                    <div className="w-full text-center">
                      <h1 className="text-2xl text-[#231f20]">{country.name}</h1>
                    </div>
                </div>
            
            </div>
            </a>
        ))}
      </div>
    </main>
  )
}
