import React from "react";
import styled from "styled-components";


import logoTextVer from "../assets/images/text_sperm.gif";
import { devices } from "../styles/breakpoints.js";
import NavButton from "./NavButton";


import useMediaQuery from "@mui/material/useMediaQuery";
import { StaticImage } from "gatsby-plugin-image";

const HeaderStyles = styled.header`
  //  on a desktop
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);
  background-color: var(--orange);
  margin-block-end: 3rem;
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100vw;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  &.hidden {
    transform: translateY(-100%);
  }
  .site-title h2 {
    font-size: 1.8rem;
    width: min-content;
    text-align: end;
  }

  .site-logo {
    z-index: 99;
    transform: rotate(-9deg);
    img {
      max-width: 13vw;
    }
  }
  .scrollpage {
    margin-inline-start: -3rem;
    width: 100vw;
    padding: 1rem;
  }

  @media ${devices.mobileL} {
    position: fixed;
    top: 0;
    left: 0;
    padding: var(--padding-mob);
    z-index: 999;
    .scrollpage {
      justify-content: center;
    }
    h2 {
      font-size: 2.4rem;
    }
    .site-title h2 {
      font-size: 1.4rem;
    }
    .site-logo {
      z-index: 99;
      transform-origin: center;
      transform: rotate(-3deg);
      padding-top: 1rem;
      img {
        max-width: 36vw;
      }
    }
  }

  @media ${devices.tablet} {
    padding: var(--padding);
   
    .site-logo {
      z-index: 99;
      transform: rotate(-13deg);
      max-width: 33%;
      img {
        max-width: 25vw;
      }
    }
  }
`;

// Site Title on Desktop 
const SiteTitleTopStyles = styled.div`
position:fixed;
top:1.5rem;
right: 2rem;
z-index: 999;
h2 {
    font-size: 1.8rem;
    width: min-content;
    text-align: end;
  }`;

const HeaderScrollStyles = styled.header`
  background-color: var(--orange);
  margin-block-end: 3rem;
  position: sticky;
  z-index: 9;
  top: 0;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100vw;

  .page-title {
    position: sticky;
    top: 10%;
    z-index: 9;
    text-align: center;
  }

  @media ${devices.tablet} {
    padding: var(--padding);
    position: inherit;
    justify-content: center;
    .page-title {
      max-width: 33%;
      h2 {
        font-size: 2.8rem;
      }
    }
  }
  @media ${devices.mobileL} {
    position: inherit;
  }
`;

const HeaderPageStyles = styled.header`
  background-color: var(--orange);
  margin-block-end: 3rem;
  position: fixed;
  /* z-index: 9; */
  top: 0;
  width: 100vw;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  .site-logo {
    z-index: 99;
    transform: rotate(-9deg);
    img {
      max-width: 13vw;
    }
  }
  .scrollpage {
    margin-inline-start: -3rem;
    width: 100vw;
    padding: 1rem;
  }
  .site-logo.displayMob {
    display: none;
  }

  @media ${devices.mobileL} {
    padding: var(--padding-mob);
    /* z-index: 9999; */
    .scrollpage {
      justify-content: center;
    }
    h2 {
      font-size: 2.4rem;
    }
    .site-logo.displayMob {
      position: fixed;
      top: 0;
      right: 5%;
      display: inherit;
      z-index: 99;
      transform: rotate(15deg);
      padding-top: 1rem;
      img {
        max-width: 14vw;
      }
    }

    .site-logo.hideMob {
      display: none;
    }
    .page-title {
      text-align: end;
    }
  }

  @media ${devices.tablet} {
    .flexWrapper {
      display: flex;
      align-items: center;
    }
    justify-content: space-between;
    padding: var(--padding);

    h2 {
      font-size: 2.8rem;
    }
    .site-logo {
      justify-self: end;
      z-index: 99;
      transform: rotate(-9deg);
      img {
        max-width: 18vw;
      }
    }

    .site-logo.displayMob {
      display: none;
    }
  }
`;

const Header = ({ v, title, visible }) => {
  const matches = useMediaQuery("(max-width:428px)");


  switch (v) {
    case "Home":
  
      return (
        <>
          {matches ? (
            //  on a mobile
            // <AppBar>
            <HeaderStyles>
              <NavButton />
              <div className=""></div>

              <div className="site-title">
                <StaticImage
                  src="./../assets/images/FTShowTitle.png"
                  alt={""}
                  placeholder="blurred"
                  // layout="fixed"
                  // width={200}
                  height={60}
                  className="hero-image"
                />
              </div>
              <div />
            </HeaderStyles>
          ) : (
            <>
              <NavButton />
              <SiteTitleTopStyles className="site-title-top">
                <StaticImage
                  src="./../assets/images/FTShowTitle.png"
                  alt={""}
                  placeholder="blurred"
                  // layout="fixed"
                  // width={200}
                  height={60}
                  className="hero-image"
                />
              </SiteTitleTopStyles>
            </>
          )}
        </>
      );

    case "ScrollPage":
      return (
        <>
          <HeaderScrollStyles className="scrollpage">
            <div className />
            <div className="page-title">
              <h2>{title}</h2>
            </div>
            <div>
              {/* <h2>Krishna Istha</h2>
            <h1>First Trimester</h1> */}
            </div>
          </HeaderScrollStyles>
        </>
      );
    case "SinglePage":
      return (
        <>
          <HeaderPageStyles className="singlepage">
            <NavButton />
            <div/>
            <div className="page-title">
              <h2>{title}</h2>
            </div>

           
            {/* <div className="site-logo hideMob">
              <img
                src={logoText}
                alt="a wiggling sperm logo which reads Krishna Istha"
              />
            </div> */}
          </HeaderPageStyles>
        </>
      );
    default:
      console.log("nothing to return");
  }
};
export default Header;
