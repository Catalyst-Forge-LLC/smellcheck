import { defineFilepressConfig } from 'getfilepress';

const github = 'https://github.com/Catalyst-Forge-LLC/smellcheck';
const npm = 'https://www.npmjs.com/package/smellcheck';

export default defineFilepressConfig({
	title: 'Smell Check',
	description:
		'An installable writing skill for AI agents. Editorial rules for prose that says something instead of sounding like it.',
	tagline: 'Have you smell-checked that?',
	lede: 'Prose · claims · earned words',
	url: 'https://smellcheck.dev',
	author: 'Catalyst Forge LLC',
	logo: '/logo.png',
	ogImage: '/logo.png',
	homePage: 'home',
	nav: [
		{ label: 'Home', href: '/' },
		{ label: 'Get started', href: '/docs/install' },
		{ label: 'Docs', href: '/docs/' },
		{ label: 'Posts', href: '/posts' },
		{ label: 'About', href: '/about' },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	footerLinks: [
		{ label: 'See the rest of the Catalyst Forge shelf.', href: 'https://catalystforge.com/tools/' },
		{ label: 'RSS', href: '/rss.xml' },
		{ label: 'Get started', href: '/docs/install' },
		{ label: 'Posts', href: '/posts' },
		{ label: 'npm', href: npm },
		{ label: 'GitHub', href: github, icon: 'github' },
		{ label: 'AppFacts', href: 'https://appfacts.dev/v#af1.eNp1UUtrAjEQ_ivLd45Kr7kKhRbby3orpYzJmE3NiyS7ZRH_e4krRQ-9TSbfa2bOmCCfBAJ5hkTv2bluO7A6QaDOqTWdPWTKMwRKpToWSJCqdmIIOKs4lIZ6e9kvCHWCPMNRMCOZ9rOfE_cq21RF90oTLTUE8hiqvfq-R83r73IVmJ0NBhLbvofAEEu9vV0c9dFRbr6J1IkMf3kKZDhDIoXkcRHQnArkxxkBEj-ZgnGcG-NBotOcXJw9h4qLWMCG69E6TplLuRF0VGPDULUxdIvZwvkUKJP6M3oI1-LccncUdMfacKeiT-N1lMY9jNbptqf_Bxmi57RscKg1FbnZlHYe1a6z1jw1J06x2BrzfIcytg7jYa2i32ypkptLXT3HbHi1223vNHD5BdsPrdY' },
		{ label: 'SkillFacts', href: 'https://skillfacts.dev/v#sf1.eNqdk7Fu2zAQhl9FuJm2G3Rjp8JoASPu1G5BEJzJs0SYIom7owzB8LsXVJOmQwahG4eP__E-_brBBPbBQMKRwMLPkWLs9gO5CxjwNFHMhRgs7FExzqLd98w9gYGJWEJOYOHT9vP2AQyIolYBC-g0TI2JwVGSFvzj8AsMXELyYMFVlswbuYQYwUCpXPJCffNBMweMHddI0p0zd6WeYpABT5G6wlnoSyeFcTYdVh_UdJj8G7QpKNJdM1_OMV__3P962KBIECXfXTloSH2byXmihMkR2BtIrtxOMKgWsbtdH3Sop63L4-5t8c2y-OZ43O-kWXKvkl5HfyTpbiAkUa5OQ07ywoRuWOYNFCNYSDk1TYm0vRkshLHEQB4MnEMkmUVpBAtM6Fua5hxbzJmYkiMP9unZwKkmH8m_IGs4o1MB-3SDgjq0L_p4OB63o3-3n7U99m7-IovrnctMa7jF-qrAiGGUNSSJ4LyKjJh8SP0aNFddfK-LrWkd6cIU3CpNDj2NK9mekn64_7MB6plEWmuUIo2kPL83x5NoSLjUq5XhbmDIIxXs_23ze1-3niYwwFSytF9t_r_OK9fkUFsBlSvdfwOtVnfV' }
	],
	topics: [],
	paths: [{ url: '/docs', dir: 'docs/dist' }]
});
