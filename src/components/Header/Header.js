import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);

    // Close navbar when click outside
    useEffect(() => {
        const handler = (e) => {
            if(!menuRef.current.contains(e.target)) {
                setBurgerStatus(false);
            }
        }

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    const menuRef = useRef();

    return(
        <NavbarContainer>
            <LogoDiv>
                <a href="">
                    <img src="/images/logo.svg" alt="" />
                </a>
            </LogoDiv>
            <ModelsDiv>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
            </ModelsDiv>
            <BurgerContainer>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <Menu onClick={() => setBurgerStatus(true)} />
            </BurgerContainer>
            <BurgerNav show={burgerStatus} ref={menuRef}>
                <CloseButtonDiv>
                    <CloseButton onClick={() => setBurgerStatus(false)} />
                </CloseButtonDiv>
                <li><a href="#">Existing inventory</a></li>
                <li><a href="#">Used inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">semi</a></li>
                <li><a href="#">chargind</a></li>
                <li><a href="#">powerwall</a></li>
                <li><a href="#">commercial energy</a></li>
                <li><a href="#">utilities</a></li>
                <li><a href="#">test drive</a></li>
                <li><a href="#">find us</a></li>
                <li><a href="#">support</a></li>
                <li><a href="#">united states</a></li>
            </BurgerNav>
        </NavbarContainer>
    )
}

export default Header;

const NavbarContainer = styled.header`
    min-height: 7vh;
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    text-transform: uppercase;
    top: 0;
    left: 0;
    right: 0;
`

const LogoDiv = styled.div`
    width: 15%;
    img {
        width: 100px;
        height: 13px;
    }
`

const ModelsDiv = styled.div`
    display: flex;
    a {
        margin: 0px 10px;
    }

    @media (max-width: 1200px) {
        display: none;
    }
`

const BurgerContainer = styled.div`
    display: flex;
    align-items: center;
    a {
        margin: 0px 10px;
    }

    @media (max-width: 1200px) {
        a {
            display: none;
        }
    }
`

const Menu = styled(MenuIcon)`
    margin-left: 5px;
    cursor: pointer;
`

const BurgerNav = styled.div`
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: linear 0.1s;
    list-style: none;
    position: fixed;
    overflow-y: scroll;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 6px 30px;
    li {
        border-bottom: 0.5px solid lightgrey;
        padding: 20px 0;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`

const CloseButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;
`


const CloseButton = styled(CloseIcon)`
    cursor: pointer;
`;