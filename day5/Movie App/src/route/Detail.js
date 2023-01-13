import { useEffect, useState, useCallback } from "react";
import {useParams} from "react-router-dom";
import DetailMovie from "../components/DetailMovie";

function Detail(){
	const {id} = useParams();
	// console.log(id);
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState([]);

	const getMovie = useCallback(async () => {
		const json = await ( 
			await fetch(
				`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
			)).json();

		setMovie(json.data.movie);
		setLoading(false);
	},[id]);

	useEffect(() => {
		getMovie();
	},[getMovie]);

	console.log(movie.title_long);

	return(
		<div>
			{loading ? (
				<h1>loading...</h1>
			) : (
				<div>
					<DetailMovie 
						key={movie.id}
						coverImg={movie.large_cover_image}
						title={movie.title_long}
						description={movie.description_full}
						lang={movie.language}
						rating={movie.rating}
						genres={movie.genres}
					/>
				</div>
			)}
		</div>
		
	);
}

export default Detail;