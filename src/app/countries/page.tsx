import { Inter } from '@next/font/google'
import Image from 'next/image'
import JordanFlag from '../../../public/jordan.png'
import QatarFlag from '../../../public/qatar.png'
import SaudiFlag from '../../../public/Saudi.png'
import KuwaitFlag from '../../../public/Kuwait.png'
import UAEFlag from '../../../public/UAE.png'

export default function countries() {
  return (
    <main>
      <h1>To find your nearest Contigo Retailer, select your country:</h1>

      <div className="w-full mx-2 flex justify-around align-center flex-wrap py-9">
        <a href="countries/Jordan">
        <div className="text-center">
            <Image
            alt="Jordan flag"
            src={JordanFlag}
            width={100}
            height={100}
            style={{
            maxWidth: '100%',
            height: 'auto',
            }}
            className="rounded-full mb-4"
             />
             <h1>Jordan</h1>
        </div>
        </a>
        <a href="countries/UAE">
        <div className="text-center">
            <Image
            alt="UAE flag"
            src={UAEFlag}
            width={100}
            height={100}
            style={{
            maxWidth: '100%',
            height: 'auto',
            }}
            className="rounded-full mb-4"
             />
             <h1>UAE</h1>
        </div>
        </a>
        <a href="countries/Saudi">
        <div className="text-center">
            <Image
            alt="Saudi flag"
            src={SaudiFlag}
            width={100}
            height={100}
            style={{
            maxWidth: '100%',
            height: 'auto',
            }}
            className="rounded-full mb-4"
             />
             <h1>Saudi Arabia</h1>
        </div>
        </a>
        <a href="countries/Kuwait">
        <div className="text-center">
            <Image
            alt="Kuwait flag"
            src={KuwaitFlag}
            width={100}
            height={100}
            style={{
            maxWidth: '100%',
            height: 'auto',
            }}
            className="rounded-full mb-4"
             />
             <h1>Kuwait</h1>
        </div>
        </a>
        <a href="countries/Qatar">
        <div className="text-center">
            <Image
            alt="Qatar flag"
            src={QatarFlag}
            width={100}
            height={100}
            style={{
            maxWidth: '100%',
            height: 'auto',
            }}
            className="rounded-full mb-4"
             />
             <h1>Qatar</h1>
        </div>
        </a>
      </div>
    </main>
  )
}
