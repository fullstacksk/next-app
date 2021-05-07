import React from 'react';
import Meta from '../components/Meta';
import NewsList from '../components/NewsList';
import { server } from '../config';

const news = ({ news }) => {
	return (
		<div>
			<Meta title="Article List" />
			<NewsList articles={news.articles} />
		</div>
	);
};

export const getServerSideProps = async (req, res) => {
	console.log(req.query);
	const url =
		'https://newsapi.org/v2/top-headlines?' +
		`country=${req.query.country}&` +
		'apiKey=baff5991fbe84cb993647b87b4d945ad';

	try {
		const response = await fetch(url);
		const news = await response.json();
		return {
			props: { news }
		};
	} catch (err) {
		console.log(err);
	}
};

export default news;
