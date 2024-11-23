'use client'

import Image from 'next/image'
import logoImage from '@/app/assets/logo.svg'
import Button from '../ui/button'
import { twMerge } from 'tailwind-merge'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrollDirection } from '@/hooks/useScrollDirection'

const navLinks = [
	{ label: 'Home', href: '#' },
	{ label: 'Features', href: '#features' },
	{ label: 'Integrations', href: '#integrations' },
	{ label: 'FAQs', href: '#faqs' },
]

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
  const scrollDirection = useScrollDirection()
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (scrollDirection === 'up') {
			setIsVisible(true)
		} else if (scrollDirection === 'down') {
			setIsVisible(false)
		}
	}, [scrollDirection])

  return (
		<>
			<header
				className={`py-4 lg:py-8 fixed w-full top-0 z-50 transition-transform duration-300 ${
					isVisible ? 'translate-y-0' : '-translate-y-full'
				}`}
			>
				<div className='container mx-auto lg:max-w-5xl max-w-[300px] md:max-w-3xl'>
					<div className='border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur'>
						<div className='grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center'>
							<div>
								<Image
									src={logoImage}
									alt='logo'
									className='h-9 md:h-auto w-auto'
								/>
							</div>
							<div className='lg:flex justify-center items-center hidden'>
								<nav className='flex gap-6 font-medium'>
									{navLinks.map(link => (
										<a
											className='hover:text-lime-400 transition-colors duration-300'
											href={link.href}
											key={link.label}
										>
											{link.label}
										</a>
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
									onClick={() => setIsOpen(!isOpen)}
								>
									<line
										x1='3'
										y1='6'
										x2='21'
										y2='6'
										className={twMerge(
											'origin-left transition-all ',
											isOpen && 'rotate-45 -translate-y-1'
										)}
									></line>
									<line
										x1='3'
										y1='12'
										x2='21'
										y2='12'
										className={twMerge(isOpen && 'opacity-0 transition-all ')}
									></line>
									<line
										x1='3'
										y1='18'
										x2='21'
										y2='18'
										className={twMerge(
											'origin-left transition-all ',
											isOpen && '-rotate-45 translate-y-1'
										)}
									></line>
								</svg>
								<Button
									className='hidden md:inline-flex items-center'
									variant='secondary'
								>
									Log in
								</Button>
								<Button
									className='hidden md:inline-flex items-center'
									variant='primary'
								>
									Sign up
								</Button>
							</div>
						</div>
						<AnimatePresence>
							{isOpen && (
								<motion.div
									initial={{ height: 0 }}
									animate={{ height: 'auto' }}
									exit={{ height: 0 }}
									className='overflow-hidden'
								>
									<div className='flex flex-col items-center gap-4 py-4'>
										{navLinks.map(link => (
											<a href={link.href} key={link.href} className=''>
												{link.label}
											</a>
										))}
										<Button variant='secondary'>Log In</Button>
										<Button variant='primary'>Sign Up</Button>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</header>
			<div className='pb-[86px] md:pb-[98px] lg:pb-[130px]'></div>
		</>
	)
}