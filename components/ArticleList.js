import articleListStyles from '../styles/ArticleList.module.css';
import Article from './Article';
import Link from 'next/link';
import { Container, Grid } from '@material-ui/core';

const ArticleList = ({ articles }) => {
	return (
		<div className={articleListStyles.articleList}>
			<Container>
				<Grid container spacing={2}>
					{articles.map((article) => (
						<Grid item md={6} xs={12} key={article.id}>
							<Link href="article/[id]" as={`article/${article.id}`}>
								<a>
									<Article article={article} />
								</a>
							</Link>
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default ArticleList;
