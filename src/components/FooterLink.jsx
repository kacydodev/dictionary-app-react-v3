import {
	IconBrandGithubFilled,
	IconBrandLinkedin,
	IconBrandLinkedinFilled,
	IconBrandTwitterFilled,
	IconMail,
	IconMailFilled,
} from '@tabler/icons-react';

export default function FooterLink({ title, platform, url }) {
	function getSocialMediaIcon() {
		switch (platform) {
			case 'linkedin':
				return <IconBrandLinkedinFilled />;

			case 'twitter':
				return <IconBrandTwitterFilled />;

			case 'mail':
				return <IconMailFilled />;

			default:
				return <IconBrandGithubFilled />;
		}
	}

	return (
		<a href={url} target='_blank' className='flex items-center gap-0.5'>
			{getSocialMediaIcon()}
			<small>{title}</small>
		</a>
	);
}
