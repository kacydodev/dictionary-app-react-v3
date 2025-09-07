import FooterLink from './FooterLink';

export default function Footer() {
	return (
		<footer className='flex justify-center gap-6 text-slate-500 dark:bg-slate-900 dark:'>
			<FooterLink
				platform='linkedin'
				url='https://linkedin.com/in/doinby/'
				title='doinby'
			/>
			<FooterLink
				url='https://github.com/doinby'
				platform='github'
				title='@doinby'
			/>
			<FooterLink
				url='https://twitter.com/doinby/'
				platform='twitter'
				title='@doinby'
			/>
			<FooterLink
				url='mailto:contact@doinby.co'
				platform='mail'
				title='contact@doinby.co'
			/>
		</footer>
	);
}

{
	/* <FooterLink
        url='https://linkedin.com/in/doinby/'
        socialPlatform='linkedin'
        title='doinby'
      />
      <FooterLink
        url='https://github.com/doinby'
        socialPlatform='github'
        title='@doinby'
      />
      <FooterLink
        url='https://twitter.com/doinby/'
        socialPlatform='twitter'
        title='@doinby'
      />
      <FooterLink
        url='mailto:contact@doinby.co'
        socialPlatform='mail'
        title='contact@doinby.co'
      /> */
}
