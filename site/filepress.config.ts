import { defineFilepressConfig } from 'getfilepress';

const github = 'https://github.com/Catalyst-Forge-LLC/smellcheck';
const npm = 'https://www.npmjs.com/package/smellcheck';

export default defineFilepressConfig({
	title: 'Smell Check',
	description:
		'Have you smell-checked that? Editorial rules for prose that says something instead of sounding like it.',
	tagline: 'Have you smell-checked that?',
	url: 'https://smellcheck.dev',
	author: 'Catalyst Forge LLC',
	logo: '/logo.png',
	ogImage: '/logo.png',
	homePage: 'home',
	nav: [
		{ label: 'Home', href: '/' },
		{ label: 'Docs', href: '/docs/' },
		{ label: 'Install', href: '/docs/install' },
		{ label: 'Skill', href: '/docs/skill' },
		{ label: 'Posts', href: '/posts' },
		{ label: 'About', href: '/about' },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	footerLinks: [
		{ label: 'RSS', href: '/rss.xml' },
		{ label: 'Docs', href: '/docs/' },
		{ label: 'npm', href: npm },
		{ label: 'GitHub', href: github, icon: 'github' },
		{ label: 'AppFacts', href: 'https://appfacts.dev/v#af1.eNp1UUtrAjEQ_ivLd45Kr7kKhRbby3orpYzJmE3NiyS7ZRH_e4krRQ-9TSbfa2bOmCCfBAJ5hkTv2bluO7A6QaDOqTWdPWTKMwRKpToWSJCqdmIIOKs4lIZ6e9kvCHWCPMNRMCOZ9rOfE_cq21RF90oTLTUE8hiqvfq-R83r73IVmJ0NBhLbvofAEEu9vV0c9dFRbr6J1IkMf3kKZDhDIoXkcRHQnArkxxkBEj-ZgnGcG-NBotOcXJw9h4qLWMCG69E6TplLuRF0VGPDULUxdIvZwvkUKJP6M3oI1-LccncUdMfacKeiT-N1lMY9jNbptqf_Bxmi57RscKg1FbnZlHYe1a6z1jw1J06x2BrzfIcytg7jYa2i32ypkptLXT3HbHi1223vNHD5BdsPrdY' },
		{ label: 'SkillFacts', href: 'https://skillfacts.dev/v#sf1.eNqdk8FqGzEQhl9lmbNspz2qpxJaMHFP7S2EMJbGu8JaScyM1izG7160beoWclh60-HTP9KnX1eYwH4wkHAksCAjxegGcmcw4GmimAsxWHhExTiLdl8z9wQGJmIJOYGFh-3H7QMYEEWtAhbQaZgaE4OjJC332_4HGDiH5MGCqyyZN3IOMYKBUrnkhfrig2YOGDuukaQ7Ze5KPcYgAx4jdYWz0KdOCuNsOqw-qOkw-TdoU1Cku2Q-n2K-_Nr_eb9BkSBKvrtw0JD6NpPzRAmTI7BXkFy5rWBQLWJ3uz7oUI9bl8fd28U3y8U3h8Pj7h9Jv0e_J-lmICRRrk5DTvLKhG5Y5g0UI1hIOTVNibSdGSyEscRAHgycQiSZRWkEC0zoW5rmHFvMiZiSIw_2-cXAsSYfyb8iazihUwH7fIWCOoCF70_7w2E7-rv9rO2wN_MHWVzvXGZawy3WVwVGDKOsIUkE51VkxORD6teguerie11sTetIF6bgVmly6Gl8n30xQD2TSOuCUqSRlOd7HzyJhoRLadoT3wwMeaSC_d8dvbdw62kCA0wlS_tA8_81Wbkmh9pqpVzp9hMhlmnP' }
	],
	topics: [],
	paths: [{ url: '/docs', dir: 'docs/dist' }]
});
