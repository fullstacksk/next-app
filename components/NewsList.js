import articleListStyles from '../styles/ArticleList.module.css';
import Article from './Article';
import Link from 'next/link';
import { Container, Grid } from '@material-ui/core';
import News from './News';

const NewsList = ({ articles }) => {
	return (
		<div className={articleListStyles.articleList}>
			<Container>
				<Grid container spacing={2} justify="center">
					{articles.map((article) => (
						<Grid item xs={8} key={article.publishedAt}>
							{/* <Link href={article.url}> */}
							<a href={article.url}>
								<News article={article} />
							</a>
							{/* </Link> */}
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default NewsList;
