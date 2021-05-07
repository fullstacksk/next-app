import Head from 'next/head';

const Meta = ({ keywords, descriptions, title }) => {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={descriptions} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
		</Head>
	);
};
Meta.defaultProps = {
	title: 'Next-App',
	keywords: 'Demo Next.js App',
	descriptions: 'This is built using next js.'
};
export default Meta;
