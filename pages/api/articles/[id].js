import { articles } from '../../../data';

export default ({ query: { id } }, res) => {
	console.log(typeof id);
	const filtered = articles.filter((article) => {
		console.log(typeof article.id);
		return article.id.toString() === id;
	});
	console.log(filtered);
	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res.status(404).json({
			message: `The article not found with the id : ${id}`
		});
	}
};
