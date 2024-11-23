import Tag from '../ui/Tag'
import figmaIcon from '@/app/assets/figma-logo.svg'
import notionIcon from '@/app/assets/notion-logo.svg'
import slackIcon from '@/app/assets/slack-logo.svg'
import relumeIcon from '@/app/assets/relume-logo.svg'
import framerIcon from '@/app/assets/framer-logo.svg'
import githubIcon from '@/app/assets/github-logo.svg'
import IntegrationColumn from '../ui/IntegrationColumn'

const integrations = [
	{
		name: 'Figma',
		icon: figmaIcon,
		description: 'Figma is a collaborative interface design tool.',
	},
	{
		name: 'Notion',
		icon: notionIcon,
		description: 'Notion is an all-in-one workspace for notes and docs.',
	},
	{
		name: 'Slack',
		icon: slackIcon,
		description: 'Slack is a powerful team communication platform.',
	},
	{
		name: 'Relume',
		icon: relumeIcon,
		description: 'Relume is a no-code website builder and design system.',
	},
	{
		name: 'Framer',
		icon: framerIcon,
		description: 'Framer is a professional website prototyping tool.',
	},
	{
		name: 'GitHub',
		icon: githubIcon,
		description: 'GitHub is the leading platform for code collaboration.',
	},
]

export type IntegrationsType = typeof integrations

export default function Integrations() {
	return (
		<section className='py-24 overflow-hidden'>
			<div className='container mx-auto lg:max-w-5xl max-w-[340px] md:max-w-3xl'>
				<div className='grid lg:grid-cols-2 items-center lg:gap-16'>
					<div>
						<Tag>Integrations</Tag>
						<h2 className='text-6xl font-medium mt-6'>
							Plays well with <span className='text-lime-400'>others</span>
						</h2>
						<p className='text-white/50 mt-4 text-lg'>
							Layers seamlessly connects with your favorite tools, making it
							easy to plug into any workflow and collaborate across platforms.
						</p>
					</div>
					<div>
						<div className='h-[400px] lg:h-[800px] mt-8 lg:mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] grid md:grid-cols-2 gap-4'>
							<IntegrationColumn integrations={integrations} />
							<IntegrationColumn
								integrations={integrations.slice().reverse()}
								reverse
								className='hidden md:flex'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
