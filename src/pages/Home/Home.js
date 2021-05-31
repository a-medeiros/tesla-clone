import React from "react";
import "./Home.css";
import styled from "styled-components";
import Section from "../../components/Section/Section";

const Home = () => {
    return(
        <HomeContainer>
            <Section 
                title="Model S" 
                description="Order online for Touchless Delivery" 
                backgroundImg="model-s.jpg"
                leftButtonText="Custom Order" 
                rightButtonText="Existing Inventory"
            />
            <Section 
                title="Model Y" 
                description="Order online for Touchless Delivery" 
                backgroundImg="model-y.jpg"
                leftButtonText="Custom Order" 
                rightButtonText="Existing Inventory"
            />
            <Section 
                title="Model 3" 
                description="Order online for Touchless Delivery" 
                backgroundImg="model-3.jpg"
                leftButtonText="Custom Order" 
                rightButtonText="Existing Inventory"
            />
            <Section 
                title="Model X" 
                description="Order online for Touchless Delivery" 
                backgroundImg="model-x.jpg"
                leftButtonText="Custom Order" 
                rightButtonText="Existing Inventory"
            />
            <Section 
                title="Lowest Cost Solar Panels in America" 
                description="Money-back guarantee" 
                backgroundImg="solar-panel.jpg"
                leftButtonText="Order Now" 
                rightButtonText="Learn More"
            />
            <Section 
                title="Solar for New Roofs" 
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels" 
                backgroundImg="solar-roof.jpg"
                leftButtonText="Order Now" 
                rightButtonText="Learn More"
            />
            <Section 
                title="Accessories" 
                description="" 
                backgroundImg="accessories.jpg"
                leftButtonText="Shop Now" 
            />
        </HomeContainer>
    )
}

export default Home;

const HomeContainer = styled.div`
    height: 100vh;
`