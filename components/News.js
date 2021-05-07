import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import articleStyle from '../styles/Article.module.css';
const image = 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX26412740.jpg';
const News = ({ article }) => {
	return (
		<div className={articleStyle.article}>
			<Card className={articleStyle.card} style={{ display: 'flex' }}>
				<CardMedia
					component="img"
					image={article.urlToImage || image}
					title="Live from space album cover"
					style={{ width: 250 }}
				/>
				<CardContent>
					<Typography gutterBottom variant="body1" component="h2">
						{article.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{article.description}
					</Typography>
					<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
						<Typography variant="caption" color="textSecondary" component="p" style={{ color: 'orange' }}>
							{`From ${article.source.name || Unknown} By ${article.author || 'Unknown'}`}
						</Typography>
						<Typography variant="caption" color="textSecondary" component="p" style={{ color: 'green' }}>
							{new Date(article.publishedAt).toLocaleString()}
						</Typography>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default News;
