import { Container } from '@material-ui/core';
import Article from '../../components/Article';
import Meta from '../../components/Meta';
import { server } from '../../config';

const article = ({ article }) => {
	return (
		<Container>
			<Meta title={article.title} />
			<Article article={article} />
		</Container>
	);
};

export const getStaticProps = async (context) => {
	try {
		const res = await fetch(`${server}/api/articles/${context.params.id}`);
		const article = await res.json();
		console.log(article);
		return {
			props: { article }
		};
	} catch (err) {
		console.log(err);
	}
};

export const getStaticPaths = async () => {
	try {
		const res = await fetch(`${server}/api/articles`);
		const articles = await res.json();
		const ids = articles.map((article) => article.id);
		const paths = ids.map((id) => ({ params: { id: id.toString() } }));
		return {
			paths,
			fallback: false
		};
	} catch (err) {
		console.log(err);
	}
};

export default article;
