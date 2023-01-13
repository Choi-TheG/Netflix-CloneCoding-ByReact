import PropTypes from "prop-types";
import {Link} from "react-router-dom";


function DetailMovie({coverImg, title, description, lang, rating, genres}){

	return (
		<div>
			<img src={coverImg} alt={title} float="center" />
			<h3><Link to="/">back to Main</Link></h3>
			<h2>{title}</h2>
			language : {lang} <br />
			rating : {rating} <br />
			genres
			<ul>
				{genres.map((g) => (
					<li key={g}>{g}</li>
				))}
			</ul>
			{description}
		</div>
	)
}

DetailMovie.propTypes = {
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	lang: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	genres: PropTypes.array.isRequired,
}
export default DetailMovie;