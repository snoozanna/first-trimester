const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '428px',
  tablet: '820px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(min-width:${sizes.mobileL}) and (max-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
