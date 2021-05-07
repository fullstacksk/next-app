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
	const url = 'https://newsapi.org/v2/top-headlines?' + `q=india&` + 'apiKey=baff5991fbe84cb993647b87b4d945ad';

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

// import Head from 'next/head';
// import { server } from '../config';
// import ArticleList from '../components/ArticleList';
// import styles from '../styles/Home.module.css';
// import Meta from '../components/Meta';

// export default function Home({ articles }) {
// 	// console.table(articles);
// 	return (
// 		<div>
// 			<Meta title="Article List" />
// 			<ArticleList articles={articles} />
// 		</div>
// 	);
// }

// export const getStaticProps = async () => {
// 	try {
// 		const res = await fetch(`${server}/api/articles`);
// 		const articles = await res.json();
// 		return {
// 			props: {
// 				articles
// 			}
// 		};
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

// export const getStaticProps = async () => {
// 	try {
// 		const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
// 		const articles = await res.json();
// 		return {
// 			props: {
// 				articles
// 			}
// 		};
// 	} catch (err) {
// 		console.log(err);
// 	}
// };
