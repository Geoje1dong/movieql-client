import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    {
        movies(page:1){
            id
            title
            genre_ids
            vote_average
            overview
            poster_path
            genre_ids
            backdrop_path
        }
    }
`

export const MOVIE_DETAILS = gql`
    query getMovieDetails($movieId: Int!){
        movie(id: $movieId){
            id
            title
            backdrop_path
            overview
            poster_path
            release_date
            runtime
            vote_average
        }
        Recommendation(id: $movieId){
            id
            title
            vote_average
            overview
            poster_path
            genre_ids
            backdrop_path
        }
        movieTrailer(id:$movieId){
            id
            key
            name
            site
        }
    }
`
