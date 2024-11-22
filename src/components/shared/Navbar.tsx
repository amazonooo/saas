import Image from 'next/image'
import logoImage from '@/app/assets/logo.svg'
import Button from '../ui/button'

const navLinks = [
	{ label: 'Home', href: '#' },
	{ label: 'Features', href: '#features' },
	{ label: 'Integrations', href: '#integrations' },
	{ label: 'FAQs', href: '#faqs' },
]

export default function Navbar() {
  return (
		<section className='py-4 lg:py-8'>
			<div className='container mx-auto lg:max-w-5xl max-w-[300px] md:max-w-3xl'>
				<div className='grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center'>
					<div>
						<Image src={logoImage} alt='logo' className='h-9 md:h-auto w-auto' />
					</div>
          <div className='lg:flex justify-center items-center hidden'>
            <nav className='flex gap-6 font-medium'>
              {navLinks.map((link) => (
                <a className='hover:text-lime-400 transition-colors duration-300' href={link.href} key={link.label}>{link.label}</a>
              ))}
            </nav>
          </div>
					<div className='flex justify-end gap-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='feather feather-menu md:hidden'
						>
							<line x1='3' y1='12' x2='21' y2='12'></line>
							<line x1='3' y1='6' x2='21' y2='6'></line>
							<line x1='3' y1='18' x2='21' y2='18'></line>
						</svg>
            <Button className='hidden md:inline-flex items-center' variant='secondary'>Log in</Button>
            <Button className='hidden md:inline-flex items-center' variant='primary'>Sign up</Button>
					</div>
				</div>
			</div>
		</section>
	)
}