import React from "react";
import styled from "styled-components";
import logoText from "../assets/images/text_sperm_hor.gif";
import logoTextVer from "../assets/images/text_sperm.gif";
import { devices } from "../styles/breakpoints.js";
import NavButton from "./NavButton";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import useMediaQuery from "@mui/material/useMediaQuery";

const HeaderStyles = styled.header`
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);
  background-color: var(--purple);
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

const HeaderScrollStyles = styled.header`
  background-color: var(--purple);
  margin-block-end: 3rem;
  position: inherit;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-inline-start: -3rem;
  width: 100vw;

  .page-title {
    position: sticky;
    top: 10%;
    z-index: 9;
    text-align: center;
  }

  @media ${devices.tablet} {
    padding: var(--padding);
    margin-inline-start: calc(var(--padding) * -1);
    justify-content: center;
    .page-title {
      max-width: 33%;
      h2 {
        font-size: 2.8rem;
      }
    }
  }
  @media ${devices.mobileL} {
    margin-inline-start: calc(var(--padding-mob) * -1);
  }
`;

const HeaderPageStyles = styled.header`
  background-color: var(--purple);
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
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();
   return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

  switch (v) {
    case "Home":
  
      return (
        <>
          {matches ? (
            <HideOnScroll>
              <AppBar>
                <HeaderStyles>
                  <NavButton />
                  <div className=""></div>
                  <div />
                  <div className="site-logo">
                    <img
                      src={logoText}
                      alt="a wiggling sperm logo which reads Krishna Istha"
                    />
                  </div>
                </HeaderStyles>
              </AppBar>
            </HideOnScroll>
          ) : (
          
            <HeaderStyles>
              <NavButton />
              <div className=""></div>
              <div />
              <div className="site-logo">
                <img
                  src={logoText}
                  alt="a wiggling sperm logo which reads Krishna Istha"
                />
              </div>
            </HeaderStyles>
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
            <div className="page-title">
              <h2>{title}</h2>
            </div>

            <div className="site-logo displayMob">
              <img src={logoTextVer} alt="logo" />
            </div>
            <div className="site-logo hideMob">
              <img
                src={logoText}
                alt="a wiggling sperm logo which reads Krishna Istha"
              />
            </div>
          </HeaderPageStyles>
        </>
      );
    default:
      console.log("nothing to return");
  }
};
export default Header;
