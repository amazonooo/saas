import logoImage from '@/app/assets/logo.svg'
import Image from 'next/image'

const footerLinks = [
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms & Conditions' }
]

export default function Footer() {
  return (
    <footer className='py-16'>
			<div className='container mx-auto lg:max-w-5xl max-w-[350px] md:max-w-3xl'>
        <div className='flex flex-col md:flex-row items-center md:justify-between gap-6'>
          <div>
            <Image src={logoImage} alt='logo' />
          </div>
          <div>
            <nav className='flex gap-6'>
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className='text-white/50 text-sm hover:text-lime-400 transition-colors duration-300'>{link.label}</a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}