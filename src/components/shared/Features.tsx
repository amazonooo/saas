import FeatureCard from '../ui/FeatureCard'
import Tag from '../ui/Tag'
import avatar1 from '@/app/assets/avatar-ashwin-santiago.jpg'
import avatar2 from '@/app/assets/avatar-lula-meyers.jpg'
import avatar3 from '@/app/assets/avatar-florence-shaw.jpg'
import avatar4 from '@/app/assets/avatar-owen-garcia.jpg'
import Image from 'next/image'
import Avatar from '../ui/Avatar'
import Key from '../ui/Key'

const features = [
	'Asset Library',
	'Code Preview',
	'Flow Mode',
	'Smart Sync',
	'Auto Layout',
	'Fast Search',
	'Smart Guides',
]

export default function Features() {
	return (
		<section className='py-24'>
			<div className='container mx-auto lg:max-w-5xl max-w-[340px] md:max-w-3xl'>
				<div className='flex justify-center'>
					<Tag>Features</Tag>
				</div>
				<h2 className='text-6xl font-medium text-center mt-6 max-w-2xl mx-auto'>
					Where power meets <span className='text-lime-400'>simplicity</span>
				</h2>
				<div className='mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8'>
					<FeatureCard
						className='md:col-span-2 lg:col-span-1 select-none group'
						title='Real-time Collaboration'
						description='Work together seamlessly with conflict-free team editing'
					>
						<div className='aspect-video flex items-center justify-center'>
							<Avatar className='z-40'>
								<Image src={avatar1} alt='Avatar 1' className='rounded-full' />
							</Avatar>
							<Avatar className='z-30 -ml-6 border-indigo-500'>
								<Image src={avatar2} alt='Avatar 2' className='rounded-full' />
							</Avatar>
							<Avatar className='z-20 -ml-6 border-[#cbacf9]'>
								<Image src={avatar3} alt='Avatar 3' className='rounded-full' />
							</Avatar>
							<Avatar className='-ml-6 border-transparent group-hover:border-green-500 transition-all duration-300'>
								<div className='size-full bg-neutral-700 rounded-full inline-flex justify-center items-center gap-1 relative'>
									<Image
										src={avatar4}
										alt='avatar 4'
										className='absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
									/>
									{Array.from({ length: 3 }).map((_, idx) => (
										<span
											key={idx}
											className='size-1.5 bg-white inline-flex rounded-full'
										></span>
									))}
								</div>
							</Avatar>
						</div>
					</FeatureCard>
					<FeatureCard
						className='md:col-span-2 lg:col-span-1 select-none group'
						title='Interactive Prototyping'
						description='Engage your clients with prototypes that react to user actions'
					>
						<div className='aspect-video flex items-center justify-center'>
							<p className='text-4xl font-bold text-white/20 group-hover:text-white/10 transition-colors duration-500  text-center'>
								We&apos;ve achieved{' '}
								<span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative'>
									<span>incredible</span>
									<video
										src={'/gif-incredible.mp4'}
										autoPlay
										loop
										muted
										playsInline
										className='absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-500'
									/>
								</span>{' '}
								growth this year
							</p>
						</div>
					</FeatureCard>
					<FeatureCard
						className='md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto select-none group'
						title='Keyboard Quick Actions'
						description='Powerful commands to help you create designs more quickly'
					>
						<div className='aspect-video flex items-center justify-center gap-4 select-none'>
							<Key className='w-28 outline outline-transparent outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500'>
								shift
							</Key>
							<Key className='outline outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 delay-150'>
								alt
							</Key>
							<Key className='outline outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 delay-300'>
								C
							</Key>
						</div>
					</FeatureCard>
				</div>
				<div className='mt-8 flex flex-wrap gap-3 justify-center'>
					{features.map(feature => (
						<div
							key={feature}
							className='bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 select-none transition-transform duration-500 group'
						>
							<span className='bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex justify-center items-center text-xl group-hover:rotate-45 transition-transform duration-500'>
								&#10038;
							</span>
							<span className='font-medium md:text-lg'>{feature}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
