import React, { useContext, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';
import krishna from '../../assets/images/krishnaHeadShot.jpg';
import spermAlone from '../../assets/images/SpermAlone.png';
import Video from '../Video';
import AccessContext from '../../context/access.context';
import { devices } from '../../styles/breakpoints';
import { MenuContext } from '../../context/menu.context';
import HeaderPage from '../HeaderPage';

const InfoPageStyles = styled.section`
  min-height: 60vh;
  /* margin: -1vw; */
  .info-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

const HeroInfoStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto;
  padding: clamp(5px, 1vw, 25px);
`;

const QuestionsStyles = styled.div`
  font-family: var(--subheadings);
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  width: 100%;
  padding: var(--padding);
  color: var(--lightgreen);
  display: flex;
  justify-content: center;
  font-variation-settings: 'wght' 600;
  ul.questions-list {
    /* list-style-type: "🤯"; */
    li .bullet-wrapper {
      margin-inline-end: 10px;
    }
    li img {
      max-width: 20px;
    }
  }
`;

const InfoPageWrapper = forwardRef(({ data }, ref) => {
  InfoPageWrapper.displayName = 'InfoPageWrapper';
  const info = data.nodes[0];

  // useEffect(() => {
  //   setCurrentPage(pathname);
  // }, []);

  return (
    <>
      <HeaderPage title="Info" />
      <InfoPageStyles ref={ref} id="info">
        <HeroInfoStyles className="hero-content-wrapper section narrow">
          <div className="hero-img-wrapper">
            {/* <span className="tagline">Show image</span> */}
            <img src={krishna} alt="Krishna" />
          </div>
          <div className="hero-text-wrapper">
            <div className="funTitle green">
              <h3 className="catName">Hello!</h3>
            </div>
            <p>
              Hi, my name is Krishna and I am a performance artist. I am also
              wanting to have a baby with my partner Logan, and we need your
              help!
            </p>
            <p>
              In order to have that baby, we must find a sperm donor. It made me
              start to think of all the different qualities I may want in our
              sperm donor. When you go on sperm donor websites, the qualities
              listed are things like height, race, eye colour and whether or not
              they have PHDs, but we don’t really care about those things.
            </p>

            <p>
              Instead, a lot of the questions I had for these donors were about
              the qualities I tend to care about in people — beyond genetics —
              that you don’t find on sperm donor websites.
            </p>
            <QuestionsStyles className="questions">
              <ul className="questions-list">
                <li data-sal="fade" data-sal-delay="400" data-sal-easing="ease">
                  <span className="bullet-wrapper">
                    <img src={spermAlone} alt="" />
                  </span>
                  Are you punctual?
                </li>
                <li data-sal="fade" data-sal-delay="500" data-sal-easing="ease">
                  <span className="bullet-wrapper">
                    <img src={spermAlone} alt="" />
                  </span>
                  What do you think happens when we die?
                </li>
                <li data-sal="fade" data-sal-delay="600" data-sal-easing="ease">
                  <span className="bullet-wrapper">
                    <img src={spermAlone} alt="" />
                  </span>
                  Do you want children?{' '}
                </li>
                <li data-sal="fade" data-sal-delay="700" data-sal-easing="ease">
                  <span className="bullet-wrapper">
                    <img src={spermAlone} alt="" />
                  </span>
                  Are you kind?{' '}
                </li>
                <li data-sal="fade" data-sal-delay="900" data-sal-easing="ease">
                  <span className="bullet-wrapper">
                    <img src={spermAlone} alt="" />
                  </span>
                  And most importantly, have you watched The Princess Diaries?
                </li>
              </ul>
            </QuestionsStyles>
          </div>
        </HeroInfoStyles>
        <HeroInfoStyles className="hero-content-wrapper section narrow">
          <Video url={info.bslvid} />
          <div>
            <p>Do these things even matter in a donor?</p>
            <p>I’m still not sure! That’s where we need YOUR help! </p>
            <p>
              Whether you have sperm to donate or not, I am conducting 10-minute
              conversations live on stage, with as many people as I can, in
              order to learn more about the kind of person I want to help me get
              pregnant.
            </p>
          </div>
          {/* <PortableText value={info.infoCopy} /> */}
        </HeroInfoStyles>
      </InfoPageStyles>
    </>
  );
});
export default InfoPageWrapper;
