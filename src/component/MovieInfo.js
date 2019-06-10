import React,{ Component } from 'react';
import styled from 'styled-components';

export default class MovieInfo extends Component{
    render(){
        const {title, rating, overview, release_date} = this.props
        let {runtime} = this.props;
        function runtimeHM(x){
            console.log(x);
            let MovierunTime = x;
            let hours = Math.floor(MovierunTime / 60);
            let minutes = Math.floor(MovierunTime - (hours * 60));
            if (minutes < 10) (minutes = "0"+minutes);
            return hours+'시간 '+minutes+'분';
        }
        runtime = runtimeHM(runtime);

        return(
            <INFOBOX>
                <h1>{title}</h1>
                <ul>
                    <li>
                        <dl>
                            <dt>평점:</dt>
                            <dd>{rating}</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>개봉일:</dt>
                            <dd>{release_date}</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>상영시간:</dt>
                            <dd>{runtime}</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>줄거리</dt>
                            <dd className='overview'>{overview}</dd>
                        </dl>
                    </li>
                </ul>
            </INFOBOX>
        )
    }
}

const INFOBOX = styled.div`
    float:left;
    display:inline-block;
    box-sizing:border-box;
    padding:14% 8% 8%;
    width:50%;
    height:100%;
    position:relative;
    z-index:1;
    > h1{
        font-size:40px;
        color:#fff;
        margin-bottom:8%;
    }
    > ul{
        list-style:none;
        color:#fff;
        padding:0;
        font-size:1rem;
        line-height:1.5em;
        > li{
            > dl{
                position:relative;
                > dt{
                    position:absolute;
                    top:0;
                    left:0;
                    font-weight:bold;
                }
                > dd{
                    padding-left:30px;
                    font-weight:300;
                }
                > dd.overview{
                    padding-top:30px;
                    padding-left:0;
                    margin-left:0;
                }
            }
        }
    }
`