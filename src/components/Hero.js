import React from "react";
import styled from "styled-components";
import BgImg from "../assets/bg-image.png";

const Section = styled.section`
  background-image: url(${BgImg});
  height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;
const Content = styled.div`
  width: 100%;
  height: 100px;
`;
const Left = styled.div`
  padding-left: 220px;
  padding-top: 143px;
`;
const Title = styled.p`
 font-size: 55px;
 color: #04050A;
 font-weight: 400;
`;
const Desc = styled.p`
 width: 472px;
 font-size: 20px;
 color: #9EA0AC;
 line-height: 30px;
 margin-top: 58px;
`;
const Button = styled.a`
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 18px;
 margin-top: 58px;
 width: 371px;
 height: 71px;
 line-height: 71px;
 font-size: 22px;
 text-align: center;
 color: #FFFFFF;
 cursor: pointer;
 background: linear-gradient(90deg, #0546D6, #3F89FC);
 text-decoration: none;
 box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            Get 2 FREE stock <br /> valued up to $1,850
          </Title>
          <Desc>
            Open and fund a brockage account with $100 or more and you will have
            a chance of claiming stock like
            <span> GOOG, FB, SBUX </span>
            and more
          </Desc>
          <Button>
            <span>Claim your free stocks now</span>
          </Button>
        </Left>
      </Content>
    </Section>
  );
};

export default Hero;
