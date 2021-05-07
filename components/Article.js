import { Card, CardContent, Typography } from '@material-ui/core';
import articleStyle from '../styles/Article.module.css';

const Article = ({ article }) => {
	return (
		<div className={articleStyle.article}>
			<Card className={articleStyle.card} classes={{ paper: articleStyle.bgCard }}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{article.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{article.body}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default Article;
