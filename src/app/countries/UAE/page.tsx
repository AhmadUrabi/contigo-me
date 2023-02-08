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
      <div className="w-full bg-white h-24 bg-no-repeat shadow-xl md:shadow-lg md:rounded-md scale-[1.015] flex flex-row justify-between overflow-clip pr-4 items-center mb-4">
        <a className="sm:w-[15%] w-[30%] h-full" href="/countries"><div className="bg-[#231f20] h-full flex justify-center items-center">
          <svg aria-hidden="true" className="w-1/3 h-1/3 ml-2 -mr-1 rotate-180" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
        </a>
        <div className="w-full justify-center items-center flex">
          <h1 className="text-2xl">UAE Retailers</h1>
        </div>
      </div>
      <div className='grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 auto-cols-max px-6 pb-6'>

        {locationList.map((location, index) => (
          <div key={index} className="shadow-lg bg-white rounded-md text-center flex flex-col justify-center items-center overflow-clip hover:shadow-2xl hover:-translate-y-0.5 hover:scale-[1.01] transition-all ease-in-out">
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
              <h1 className="text-xl text-[#231f20]">{location.name}</h1>

            </div>
            {location.url != null ?
              <a className="w-full" href={location.url}><button className="w-full shadow-md md:w-[80%] p-4 bg-[#231f20] md:rounded-md md:mb-4 md:mx-4 mt-2 text-gray-100 text-lg hover:bg-zinc-600 transition-all ease-in-out">Shop Online</button></a> :
              <a className="w-full"><button className="w-full md:w-[80%] p-4 bg-white md:rounded-md md:mb-4 md:mx-4 mt-2 text-white"></button></a>}
          </div>
        ))}
      </div>

    </div>
  )
}
