import React from 'react';
import styled from 'styled-components';

const ScrollerStyles = styled.div`
  #scroll-container {
    overflow: hidden;
    position: relative;
  }
  #scroll-text {
    font-size: 2rem;
    width: max-content;
    position: fixed;
    /* animation properties */
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);

    -moz-animation: my-animation 15s linear infinite;
    -webkit-animation: my-animation 15s linear infinite;
    animation: my-animation 15s linear infinite;
  }

  /* for Firefox */
  @-moz-keyframes my-animation {
    from {
      -moz-transform: translateX(100%);
    }
    to {
      -moz-transform: translateX(-100%);
    }
  }

  /* for Chrome */
  @-webkit-keyframes my-animation {
    from {
      -webkit-transform: translateX(100%);
    }
    to {
      -webkit-transform: translateX(-100%);
    }
  }

  @keyframes my-animation {
    from {
      -moz-transform: translateX(100%);
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    to {
      -moz-transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }
`;

const ScrollText = () => (
  <ScrollerStyles className="scroller-wrapper" id="scroll-container">
    <h3 className="tagline scroller-text" id="scroll-text">
      Could you be our ideal sperm donor?
    </h3>
  </ScrollerStyles>
);

export default ScrollText;
