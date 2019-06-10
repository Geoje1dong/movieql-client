import React, {Component} from 'react';
import styled from 'styled-components';
import MovieInfo from './MovieInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class Details_Page extends Component{
  // state = {
  //   click: false
  // };

  // handleClick = e => {
  //   const { click } = this.state;
  //   this.setState({click:true});
  //   alert(click);
  // }

  render(){
    const { data } = this.props;
    return(
      <Container>
        <PlayMovieTrailer className='play-icon'
          // click = {this.state.click}
          // onClick={this.handleClick}
          onClick={() => {
            const $playIcon = document.querySelector('.play-icon');
            const $imgTarget = document.querySelector('.imgBackground');
            const $trainerTarget = document.querySelector('.trainerBackground');
            const $noiseBox = document.querySelector('.noise-box');
            const trainerURL = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${data.movieTrailer.key}?amp;autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />`
            const $closeTrainler = document.querySelector('.closeTrainler');
            const $movieInfo = document.querySelector('.movieInfo');
            $movieInfo.style.opacity = '0';
            $noiseBox.style.zIndex = '-1';
            $trainerTarget.innerHTML=trainerURL;
            $imgTarget.style.transform = 'scale(10) rotate(-180deg)';
            $imgTarget.style.opacity = '0';
            $trainerTarget.style.transform = 'scale(1) rotate(0)';
            $trainerTarget.style.opacity = '1';
            $closeTrainler.style.opacity = '1';
            setTimeout(() => {
                // $trainerTarget.style.transform = 'scale(1) rotate(0)';
                // $trainerTarget.style.opacity = '1';
                $playIcon.style.opacity = '0';
            }, 400)
          }}
        >
          <div>
            <FontAwesomeIcon icon={faPlay} />
          </div>
        </PlayMovieTrailer>
        <CloseMovieTrainler className='closeTrainler'
          onClick={() => {
            const $closeTrainler = document.querySelector('.closeTrainler');
            const $playIcon = document.querySelector('.play-icon');
            const $imgTarget = document.querySelector('.imgBackground');
            const $trainerTarget = document.querySelector('.trainerBackground');
            const $noiseBox = document.querySelector('.noise-box');
            const $movieInfo = document.querySelector('.movieInfo');
            $noiseBox.style.zIndex = '1';
            $trainerTarget.style.transform = 'scale(10) rotate(-180deg)';
            $trainerTarget.style.opacity = '0';
            $imgTarget.style.transform = 'scale(1) rotate(0)';
            $imgTarget.style.opacity = '1';
            $closeTrainler.style.opacity = '0';
            $movieInfo.style.opacity = '1';
            setTimeout(() => {
              $playIcon.style.opacity = '1';
              $trainerTarget.innerHTML='';
          }, 800)
          }}
        >
          <div>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </CloseMovieTrainler>
        <Content className='movieInfo'>
          <MovieInfo
            id={data.movie.id}
            title={data.movie.title}
            rating={data.movie.vote_average}
            cardIMG={data.movie.poster_path}
            overview={data.movie.overview}
            backgroundIMG={data.movie.backdrop_path}
            runtime={data.movie.runtime}
            release_date={data.movie.release_date}
          />
        </Content>
        <NoiseBox className='noise-box'/>
        <MovieBackground>
          <ImgBackground className='imgBackground' background={data.movie.backdrop_path} />
          <TrainerBackground className='trainerBackground' /> 
        </MovieBackground>
      </Container>
    )
  }
}


const Container = styled.div`
  width:100vw;
  height:100vh;
  position:relative;
  overflow:hidden;
`

const Content = styled.div`
  transition:all 0.7s ease-in-out;
  position:relative;
  z-index:2;
  color:#fff;
`

const MovieBackground = styled.div`
  transition:all 0.7s ease-in-out;
  z-index:0;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
`

const ImgBackground = styled.div`
  transition:all 0.7s ease-in-out;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  opacity:1;
  background-image: ${props => `url(https://image.tmdb.org/t/p/original/${props.background})`};
  background-size: cover;
`

const TrainerBackground = styled.div`
  transform:scale(5) rotate(180deg);
  transition:all 0.7s ease-in-out;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  opacity:0;
  .ytp-chrome-top-buttons{
    display:none;
  }
`

const NoiseBox = styled.div`
  background-image: url(data:image/png;base64,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);
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.8);
  z-index:1;
  // z-index: ${props => props.click ? '-1' : '1'}
  // background-color: ${props => props.click ? "red" : "black"}
  
`

const PlayMovieTrailer = styled.span`
  transition:all 0.7s ease-in-out;
  cursor:pointer;
  width:58px;
  height:58px;
  background:rgba(255,255,255,0.3);
  border-radius:50%;
  position:absolute;
  top:50%;
  left:50%;
  z-index:4;
  transform:translate(-50%,-50%);
  > div {
    position:realtive;
    margin:8px auto;
    vertical-align:middle;
    background:#fff;
    width:42px;
    height:42px;
    border-radius:50%;
    > svg{
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      padding-left:3px;
    }
  }
`

const CloseMovieTrainler = styled.span`
  transition:all 0.7s ease-in-out;
  opacity:0;
  position:absolute;
  right:10px;
  top:12px;
  z-index:10;
  cursor:pointer;
  width:50px;
  height:50px;
  background:rgba(255,255,255,1);
  font-size:20px;
  color:rgba(0,0,0,0.8);
  &:hover{
    color:rgba(0,0,0)
  }
  div{
    position:realtive;
    vertical-align:middle;
    background:#fff;
    width:50px;
    height:50px;
    > svg{
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
    }
  }
  
`