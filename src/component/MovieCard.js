import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class MovieCard extends Component{
    constructor(props) {
        super(props);
        this.state = {hovered: false};
    }

    getHoverState(backgroundIMG){
        console.log(backgroundIMG);
        this.props.callbackFromParent(backgroundIMG);
    }

    render(){
        const { title, rating, id, cardIMG, backgroundIMG} = this.props;
        let { genres } = this.props;

        return(
            <Link to={`/details/${id}/`}>
                <Card className='cardMovie'
                    //background={cardIMG}
                    onMouseOut={() => this.setState({hovered: false})}
                    onMouseOver={() => 
                        {this.setState({hovered: true})
                        this.getHoverState(backgroundIMG)
                    }
                    }
                    background={cardIMG}
                >
                    <Info>
                        <Shadow></Shadow>
                        <h3>{title}</h3>
                        <p>평정 : {rating}</p>
                        <span>{genres}</span>
                    </Info>
                    
                </Card>
            </Link>
        )
    }
}

const Card = styled.div`
    display:inline-block;
    border-radius:8px;
    position:relative;
    width:300px;
    height:500px;
    vertical-align:middle;
    margin:10px;
    transform:scale(1);
    background-image: ${props => `url(https://image.tmdb.org/t/p/w500/${props.background})`};
    background-size: cover;
    background-position:center;
`;

const Info = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    width: 100%;
    height:100%;
    padding: 20px;
    box-sizing: border-box;
    > h3{
        margin-top:300px;
        font-size:1.6rem;
    }
`;

const Shadow= styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-image:linear-gradient(0deg,rgba(0,0,0,0.6) 0,transparent 60%);
    z-index:-1;
`