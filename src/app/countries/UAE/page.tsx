import Image from 'next/image'
import { Inter } from '@next/font/google'
import UAEFull from '../../../../public/UAE-Full.png'
import AmazonLogo from '../../../../public/uae-logos/AmazonLogo.png'
import FirstcryLogo from '../../../../public/uae-logos/FirstCryLogo.png'
import CarrefourLogo from '../../../../public/uae-logos/CarrefourLogo.png'
import SimplyKitchenLogo from '../../../../public/uae-logos/SimplyKitchen.png'
import AlmakaanLogo from '../../../../public/uae-logos/AlmakaanLogo.png'

const inter = Inter({ subsets: ['latin'] })

const locationList = [
  {
    name: 'Almakaan Store',
    url: 'https://almakaanstore.com/',
    logo: AlmakaanLogo
  },
  {
    name: 'Amazon UAE',
    url: 'https://www.amazon.ae/s?k=Contigo',
    logo: AmazonLogo
  },
  {
    name: 'Firstcry',
    url: 'https://www.firstcry.ae/contigo/0/0/1002586',
    logo: FirstcryLogo
  },
  {
    name: 'Carrefour UAE',
    url: 'https://www.carrefouruae.com/mafuae/en/c/MKP-Contigo',
    logo: CarrefourLogo
  },
  {
    name: 'Simply Kitchen',
    url: 'https://www.liwastores.com/simply-kitchen/',
    logo: SimplyKitchenLogo
  },
]

export default function UAE() {
  return (
    <div>
      <div className="w-full bg-white shadow-lg rounded-md flex flex-col sm:flex-row justify-evenly items-center mb-4">
      <div className="text-center">
        <Image
          alt="UAE flag"
          src={UAEFull}
          width={200}
          height={100}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          className="my-4"
        />
      </div>
      <h1 className="text-2xl">United Arab Emirates</h1>
      </div>
      <div className='grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 auto-cols-max'>

        {locationList.map((location) => (
          <div className="shadow-lg bg-white rounded-md text-center flex flex-col justify-center items-center overflow-clip">
            <div className="py-4">
              <Image
                alt={location.name}
                src={location.logo}
                width={200}
                height={100}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
                className="mx-auto lg:mx-0 mb-4" />
              <h1 className="text-xl">{location.name}</h1>
              
              </div>
              {location.url != null ? <a className="w-full" href={location.url}><button className="w-full md:w-[80%] p-4 bg-gray-900 md:rounded-md md:mb-4 md:mx-4 mt-2 text-gray-100 text-lg">Shop Online</button></a> : <a className="w-full"><button className="w-full md:w-[80%] p-4 bg-white md:rounded-md md:mb-4 md:mx-4 mt-2 text-white"></button></a>}
          </div>
        ))}
      </div>

    </div>
  )
}
