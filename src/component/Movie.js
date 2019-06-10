import React, { Component } from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import HorizontalScroller from 'react-horizontal-scroll-container';

export default class Movie extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hoverId: null
        };    
    }
    myCallback = (dataFromChild) => {
        this.setState({ hoverId: dataFromChild });
    }
    render(){
        let key = 1;
        const { movies } = this.props;
        const { hoverId } = this.state;
        const movieList = movies.map(movie => {
            return(
                <MovieCard
                    id={movie.id}
                    key={key++}
                    title={movie.title}
                    rating={movie.vote_average}
                    genres={movie.genre_ids}
                    cardIMG={movie.poster_path}
                    description_intro={movie.overview}
                    backgroundIMG={movie.backdrop_path}
                    callbackFromParent={this.myCallback}
                />
            );
        });

        return(
            <BOX background={hoverId}>
                <MovieSection>
                    <HorizontalScroller>
                        {movieList}
                    </HorizontalScroller>
                </MovieSection>
            </BOX>
        )
    }
}


const BOX = styled.div`
    position:relative;
    background-image: ${props => `url(https://image.tmdb.org/t/p/original/${props.background})`};
    background-size: cover;
    width:100vw;
    height:100vh;
    overflow:hidden;
    transition:all 0.7s ease-in-out;
`

const MovieSection = styled.div`
    position:absolute;
    top:50%;
    left:40%;
    transform:translateY(-50%);
    width:60%;
    touch-action: none;
    box-sizing:border-box;
    padding:0 30px;
    > .container{
        overflow:hidden;
    }
`