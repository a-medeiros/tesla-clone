import React from "react";
import "./Section.css";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const Section = ({ title, description, leftButtonText, rightButtonText, backgroundImg }) => {
    return(
        <SectionContainer bgImage={backgroundImg} >
            <Fade bottom>
                <ItemText>
                    <h1 data-testid="model" >{title}</h1>
                    <p className="order-online-p" data-testid="order-online-option" >{description}</p>
                </ItemText>
            </Fade>
            <ButtonContainer>
                <Fade bottom>
                    <ButtonDiv>
                        <LeftButton data-testid="left-button" >
                            {leftButtonText}
                        </LeftButton>
                        { rightButtonText && 
                            <RightButton data-testid="right-button" >
                                {rightButtonText}
                            </RightButton>
                        }
                    </ButtonDiv>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" data-testid="down-arrow" />
            </ButtonContainer>
        </SectionContainer>
    )
}

export default Section;

const SectionContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15vh;

    @media (max-width: 600px) {
        h1 {
            margin: 0px 15px;
            text-align: center;
            width: 350px;
        }
        p {
            margin: 0px 15px;
            text-align: center;
            width: 300px;
        }
    }
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`

const ButtonDiv = styled.div`
    display: flex;
    @media (max-width: 700px) {
        flex-direction: column;  
        justify-content: center;
    }
`

const LeftButton = styled.button`
    background-color: #333333;
    color: white;
    border: 1px solid #333;
    padding: 11px;
    border-radius: 50px;
    text-transform: uppercase;
    font-size: 13px;
    width: 250px;
    letter-spacing: 0.5px;
    cursor: pointer;
    margin-right: 10px;
    opacity: 0.85;
    @media (max-width: 680px) {
        margin-right: 5px;
    }
    @media (max-width: 700px) {
        margin-bottom: 20px;   
        margin-right: 0;
        width: 400px;

    }
    @media (max-width: 500px) {
        width: 300px;
        margin-bottom: 10px;
    }
`

const RightButton = styled.button`
    background-color: white;
    color: black;
    border: 1px solid white;
    padding: 11px;
    border-radius: 50px;
    text-transform: uppercase;
    font-size: 13px;
    width: 250px;
    letter-spacing: 0.5px;
    cursor: pointer;
    margin-left: 10px;
    opacity: 0.85;
    @media (max-width: 680px) {
        margin-left: 5px;
    }
    @media (max-width: 700px) {  
        margin-left: 0;
        width: 400px;
    }
    @media (max-width: 500px) {
        width: 300px;
    }
`

const DownArrow = styled.img`
    margin-top: 10px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`