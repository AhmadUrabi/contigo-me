import Image from 'next/image'
import { Inter } from '@next/font/google'
import JordanFull from '../../../../public/Jordan-Full.png'
import WALogo from '../../../../public/jordan-logos/WALogo.png'
import DNALogo from '../../../../public/jordan-logos/DNALogo.png'
import TheOutfitLogo from '../../../../public/jordan-logos/TheOutFitLogo.png'
import DumyaLogo from '../../../../public/jordan-logos/DumyahLogo.png'
import AbdeenLogo from '../../../../public/jordan-logos/AbdeenLogo.png'
import CarrefourJordanLogo from '../../../../public/jordan-logos/CarrefourLogo.png'
import MilesLogo from '../../../../public/jordan-logos/MilesLogo.png'
import SolesLogo from '../../../../public/jordan-logos/SolesLogo.png'
import SamirLogo from '../../../../public/jordan-logos/SamirLogo.png'
import CozmoLogo from '../../../../public/jordan-logos/CozmoLogo.png'
import IrfanLogo from '../../../../public/jordan-logos/IrfanLogo.png'

const locationList = [
  {
    name: 'Whole and All',
    url: 'https://www.wholeandall.com/collections/contigo',
    logo: WALogo
  },
  {
    name: 'DNA',
    url: 'https://www.dna.jo/collections/contigo',
    logo: DNALogo
  },
  {
    name: 'The Outfit',
    url: 'https://theoutfit.me/brand/649-contigo',
    logo: TheOutfitLogo
  },
  {
    name: 'Dumyah',
    url: 'https://www.carrefouruae.com/mafuae/en/c/MKP-Contigo',
    logo: DumyaLogo
  },
  {
    name: 'Abdeen Grand Stores',
    url: 'https://abdeencenter.com/catalogsearch/result/?q=Contigo',
    logo: AbdeenLogo
  }, 
  {
    name: 'Carrefour Jordan',
    url: 'https://www.carrefourjordan.com/mafjor/en/v4/search?keyword=Contigo',
    logo: CarrefourJordanLogo
  },
  {
    name: 'Soles Stole My Sole',
    url: 'https://solesstolemysoul.com/collections/contigo',
    logo: SolesLogo
  },
  {
    name: 'Miles Supermarket',
    url: null,
    logo: MilesLogo
  },
  {
    name: 'Samir & Ghasan',
    url: null,
    logo: SamirLogo
  },
  {
    name: 'Cozmo Supermarket',
    url: null,
    logo: CozmoLogo
  },
  {
    name: 'Irfan',
    url: null,
    logo: IrfanLogo
  },
  
]

export default function Jordan() {
  return (
    <div>
      <div className="w-full bg-gray-100 shadow-lg rounded-md flex justify-evenly items-center mb-4">
      <div className="text-center">
        <Image
          alt="Jordan flag"
          src={JordanFull}
          width={200}
          height={100}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          className="my-4"
        />
      </div>
      <h1 className="text-2xl">Jordan</h1>
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
