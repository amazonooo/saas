import quantumLogo from '@/app/assets/quantum.svg'
import acmeLogo from '@/app/assets/acme-corp.svg'
import echoValleyLogo from '@/app/assets/echo-valley.svg'
import pulseLogo from '@/app/assets/pulse.svg'
import outsideLogo from '@/app/assets/outside.svg'
import apexLogo from '@/app/assets/apex.svg'
import celestialLogo from '@/app/assets/celestial.svg'
import twiceLogo from '@/app/assets/twice.svg'
import Image from 'next/image'

const logos = [
	{ name: 'Quantum', image: quantumLogo },
	{ name: 'Acme Corp', image: acmeLogo },
	{ name: 'Echo Valley', image: echoValleyLogo },
	{ name: 'Pulse', image: pulseLogo },
	{ name: 'Outside', image: outsideLogo },
	{ name: 'Apex', image: apexLogo },
	{ name: 'Celestial', image: celestialLogo },
	{ name: 'Twice', image: twiceLogo },
]

export default function LogoTicker() {
	return (
		<section className='py-24 overflow-x-clip'>
			<div className='container mx-auto lg:max-w-5xl max-w-[350px] md:max-w-3xl'>
				<h3 className='text-center text-white/50 text-xl'>Already chosen by these market leaders</h3>
				<div className='overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
					<div className='flex gap-24 pr-24'>
						{logos.map((logo) => (
							<Image src={logo.image} key={logo.name} alt={logo.name} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
