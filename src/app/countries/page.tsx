import { Inter } from '@next/font/google'
import Image from 'next/image'
import JordanFlag from '../../../public/jordan.png'
import QatarFlag from '../../../public/qatar.png'
import SaudiFlag from '../../../public/Saudi.png'
import KuwaitFlag from '../../../public/Kuwait.png'
import UAEFlag from '../../../public/UAE.png'

const countryList = [
    { name: 'Jordan', flag: JordanFlag, url: 'countries/Jordan' },
    { name: 'Qatar', flag: QatarFlag, url: 'countries/Qatar' },
    { name: 'Saudi Arabia', flag: SaudiFlag, url: 'countries/Saudi' },
    { name: 'Kuwait', flag: KuwaitFlag, url: 'countries/Kuwait' },
    { name: 'UAE', flag: UAEFlag, url: 'countries/UAE' },
]

export default function countries() {
  return (
    <main>
      <h1>To find your nearest Contigo Retailer, select your country:</h1>

      <div className="w-full flex justify-around align-center flex-wrap py-9">
        {countryList.map((country) => (
            <div><a href={country.url}>
                <div className="text-center">
                    <Image
                    alt={country.name + " flag"}
                    src={country.flag}
                    width={100}
                    height={100}
                    style={{
                    maxWidth: '100%',
                    height: 'auto',
                    }}
                    className="rounded-full m-4"
                    />
                    <h1>{country.name}</h1>
                </div>
            </a>
            </div>
        ))}
      </div>
    </main>
  )
}
