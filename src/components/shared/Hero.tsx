import Button from '../ui/button'
import designExample1Image from '@/app/assets/design-example-1.png'
import designExample2Image from '@/app/assets/design-example-2.png'
import Image from 'next/image'
import Pointer from '../ui/Pointer'

export default function Hero() {
  return (
		<section className='py-24 overflow-x-clip'>
			<div className='container mx-auto lg:max-w-5xl max-w-[350px] md:max-w-3xl relative'>
				<div className='absolute -left-52 top-16 hidden lg:block'>
					<Image src={designExample1Image} alt='design 1' />
				</div>
				<div className='absolute -right-[340px] -top-16 hidden lg:block'>
					<Image src={designExample2Image} alt='design 2' />
				</div>
				<div className='absolute select-none left-36 top-96 hidden lg:block'>
					<Pointer name='Andrea' />
				</div>
				<div className='absolute select-none right-60 -top-4 hidden lg:block'>
					<Pointer name='Bryan' color='red' />
				</div>
				<div className='flex justify-center'>
					<div className='inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold select-none'>
						✨ $7.5 seed round raised
					</div>
				</div>
				<h1 className='text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 select-none'>
					Impactful design, created effortlessly
				</h1>
				<p className='text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto select-none'>
					Design tools shouldn&apos;t slow you down. Layers combines powerful
					features with an intuitive interface that keeps you in your creative
					flow.
				</p>
				<form className='flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto'>
					<input
						type='email'
						placeholder='Enter your email'
						className='bg-transparent px-4 md:flex-1 rounded-full outline-none w-full'
					/>
					<Button
						type='submit'
						variant='primary'
						size='sm'
						className='whitespace-nowrap'
					>
						Sign Up
					</Button>
				</form>
			</div>
		</section>
	)
}