const colorNames = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  ironLight: "rgba(209, 213, 218, 0.3)",
  mercury: "#E5E5E5",
  mineShaft: "#252525",
  mineShaftLight: "rgba(54,54,54,0.72)",
  anakiwa: "#8CC2FF",
  shipCove: "#6D93BE",
  dodgerBlue: "#2188FF",
  scienceBlue: "#0366D6",
  slateGrey: "#6E7E91",

};

const common = {
  breakpoints: {
    small: 767,
    medium: 991,
    large: 1199,
  },
}

export const themeLight = {
  ...common,
  colors: {
    primary: colorNames.scienceBlue,
    textPrimary: colorNames.mineShaft,
    site: {
      background: colorNames.whiteLilac,
      text: colorNames.slateGrey,
    },
    boxBackground: colorNames.white,
    titleUnderline: colorNames.ironLight,
    buttonLink: {
      hoverShadow: colorNames.anakiwa,
      text: colorNames.white
    },


  }
};

export const themeDark = {
  ...common,
  colors: {
    primary: colorNames.dodgerBlue,
    textPrimary: colorNames.white,
    site: {
      background: colorNames.mineShaft,
      text: colorNames.white,
    },
    boxBackground: colorNames.mineShaftLight,
    titleUnderline: colorNames.ironLight,
    buttonLink: {
      hoverShadow: colorNames.shipCove,
      text: colorNames.white
    },

  }

};