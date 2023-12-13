import React from "react";
import { devices } from "../styles/breakpoints.js";
import styled from "styled-components";
import ACE from "./../assets/images/ACE-B.png"
import BAC from "./../assets/images/BAC.png";
import Marl from "./../assets/images/Marlborough.png";
import RH from "./../assets/images/Roundhouse-B.png";

const LogoWrapperStyles = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  img {
    max-width: 200px;
  }
  img.circ {
    max-width: 100px;
  }
  @media ${devices.tablet} {
    flex-wrap: wrap;
    gap: 5rem;
  }
  @media ${devices.mobileL} {
    flex-wrap: wrap;
    gap: 5rem;
  }
`;

const Logos = () => {

  return (
    <LogoWrapperStyles>
      <img src={ACE} />
      <img src={BAC} />
      <img src={Marl} />
      <img class="circ" src={RH} />
    </LogoWrapperStyles>
  );
}

export default Logos;