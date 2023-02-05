import Image from 'next/image'
import { Inter } from '@next/font/google'
import JordanFull from '../../../../public/Jordan-Full.png'
import WALogo from '../../../../public/jordan-logos/WALogo.png'
import QatarFull from '../../../../public/Qatar-Full.png'
import TalabatLogo from '../../../../public/qatar-logos/TalabatLogo.png'
import SnoonuLogo from '../../../../public/qatar-logos/SnoonuLogo.png'
import LzhibaLogo from '../../../../public/qatar-logos/LzhbaLogo.png'
import MonoprixLogo from '../../../../public/qatar-logos/MonoprixLogo.png'
import AlmeeraLogo from '../../../../public/qatar-logos/AlmeeraLogo.png'
import MasskarLogo from '../../../../public/qatar-logos/MasskarLogo.png'
import CarrefourQatarLogo from '../../../../public/qatar-logos/CarrefourLogo.png'
import LuluLogo from '../../../../public/qatar-logos/LuluLogo.png'
import SportsCornerLogo from '../../../../public/qatar-logos/SportsCornerLogo.png'

const locationList = [
  {
    name: 'Talabat Qatar',
    url: 'https://www.talabat.com/qatar/grocery/619614/talabat-mart?aid=1634',
    logo: TalabatLogo
  },
  {
    name: 'Snoonu',
    url: 'https://snoonu.com/search?q=Contigo',
    logo: SnoonuLogo
  },
  {
    name: 'Lzhiba',
    url: 'https://www.lzhiba.qa/product-brands/contigo/',
    logo: LzhibaLogo
  }
  ,
  {
    name: 'Carrefour Qatar',
    url: 'https://www.carrefourqatar.com/mafqat/en/v4/search?keyword=Contigo',
    logo: CarrefourQatarLogo
  },
  {
    name: 'Monoprix',
    url: null,
    logo: MonoprixLogo
  },
  {
    name: 'Almeera',
    url: null,
    logo: AlmeeraLogo
  }, 
  {
    name: 'Masskar',
    url:  null,
    logo: MasskarLogo
  },
  {
    name: 'Lulu Hypermarket',
    url: null,
    logo: LuluLogo
  },
  {
    name: 'Sports Corner',
    url: null,
    logo: SportsCornerLogo
  }  
]

export default function Qatar() {
  return (
    <div>
      <div className="w-full bg-white shadow-lg rounded-md flex flex-col sm:flex-row justify-evenly items-center p-2 mb-4">
      <div className="text-center">
        <Image
          alt="Qatar flag"
          src={QatarFull}
          height={100}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          className="my-4"
        />
      </div>
      <h1 className="text-xl">Where to find us in Qatar</h1>
      </div>
      <div className='grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 auto-cols-max'>

        {locationList.map((location) => (
          <div className="shadow-lg bg-white rounded-md text-center flex flex-col justify-center items-center overflow-clip hover:shadow-2xl hover:-translate-y-0.5 hover:scale-[1.01] transition-all ease-in-out">
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
              {location.url != null ? 
              <a className="w-full" href={location.url}><button className="w-full shadow-md md:w-[80%] p-4 bg-gray-900 md:rounded-md md:mb-4 md:mx-4 mt-2 text-gray-100 text-lg hover:bg-gray-800 ">Shop Online</button></a> : 
              <a className="w-full"><button className="w-full md:w-[80%] p-4 bg-white md:rounded-md md:mb-4 md:mx-4 mt-2 text-white"></button></a>}
          </div>
        ))}
      </div>

    </div>
    
  )
}
