import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from '../queries'
import Movie from '../component/Movie';

const Home = () => <Query query={ HOME_PAGE }>
    {({loading, data, error}) => {
        if(loading) return 'Loading';
        if(error) return 'Error';
        return(
            <Movie movies={data.movies}/>
        )
    }}
</Query>

export default Home;
