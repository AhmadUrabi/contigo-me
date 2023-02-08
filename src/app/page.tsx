import { Inter } from '@next/font/google'
import Image from 'next/image'
import JordanFlag from '../../public/jordan.png'
import QatarFlag from '../../public/qatar.png'
import SaudiFlag from '../../public/Saudi.png'
import KuwaitFlag from '../../public/Kuwait.png'
import UAEFlag from '../../public/UAE.png'

const countryList = [
  { name: 'Jordan', flag: JordanFlag, url: '/Jordan', hidden: false },
  { name: 'UAE', flag: UAEFlag, url: '/UAE', hidden: false },
  { name: 'Qatar', flag: QatarFlag, url: '/Qatar', hidden: false },
  { name: 'Saudi Arabia', flag: SaudiFlag, url: '/Saudi', hidden: false },
  { name: 'Kuwait', flag: KuwaitFlag, url: '/Kuwait', hidden: true },

]

export default function countries() {
  return (
    <main>
      <h1 className="text-center text-2xl font-medium text-[#231f20]">To find your nearest Contigo Retailer, select your country:</h1>

      <div className="w-full flex justify-evenly align-center flex-wrap py-9">
        {countryList.map((country, index) => (
          <a key={index} href={country.hidden ? "" : country.url} className={country.hidden ? "w-full md:w-auto pointer-events-none cursor-default" : "w-full md:w-auto"}>
            <div className="p-4 bg-white rounded-xl mx-3  my-2 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all ease-in-out">
              <div className="text-center flex flex-row justify-between items-center md:block whitespace-normal">
                <Image
                  alt={country.name + " flag"}
                  src={country.flag}
                  width={100}
                  height={100}
                  style={{
                    maxWidth: '100%',
                  }}
                  className="rounded-full md:mx-auto w-1/4 md:w-[80%] md:mb-4"
                />
                <div className="w-full text-center">
                  <h1 className="text-xl text-[#231f20]">{country.name}</h1>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}
