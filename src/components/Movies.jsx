import Movie from "./Movie";
import Notfound from "./Notfound";

export default function Movies(props){
    const {movies = []} = props;

    return (
        <div className="movies">
            {movies.length ? movies.map(movie => (
                <Movie key={movie.imdbID} {...movie} />
            )) : (
                <Notfound />
            )}
        </div>
    )
}