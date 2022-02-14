const colorNames = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  ironLight: "rgba(209, 213, 218, 0.3)",
  ironLightDarkMode: "rgba(209, 213, 218, 0.1)",
  mercury: "#E5E5E5",
  mineShaft: "#252525",
  slateGrey: "#6E7E91",
  scorpion: "#5f5f5f",
  mineShaftLight: "rgba(54,54,54,0.72)",
  anakiwa: "#8CC2FF",
  shipCove: "#6D93BE",
  dodgerBlueLight: "rgba(33,136,255,0.4)",
  dodgerBlueLightHover: "rgba(33,136,255,0.8)",
  dodgerBlue: "#2188FF",
  scienceBlueLight: "rgba(3, 102, 214, 0.2)",
  scienceBlueLightHover: "rgba(3, 102, 214, 0.8)",
  scienceBlueLightDarkMode: "rgba(3, 102, 214, 0.5)",
  scienceBlue: "#0366D6",
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
    themeSwitcher: {
      text: colorNames.slateGrey,
      background: colorNames.mercury,
      border: colorNames.slateGrey,
      icon: colorNames.white,
    },
    tile: {
      header: colorNames.scienceBlue,
      background: colorNames.white,
      text: colorNames.slateGrey,
      link: colorNames.scienceBlue,
      linkUnderline: colorNames.scienceBlueLight,
      linkUnderlineHover: colorNames.scienceBlueLightHover,
      border: colorNames.ironLight,
      borderHover: colorNames.scienceBlueLight,
    },
    portfolio: {
      text: colorNames.mineShaft,
      spinner: colorNames.ironLight,
      spinnerColor: colorNames.scienceBlue,
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
    themeSwitcher: {
      text: colorNames.white,
      background: colorNames.scorpion,
      border: colorNames.white,
      icon: colorNames.mineShaft,
    },
    tile: {
      header: colorNames.white,
      background: colorNames.mineShaftLight,
      text: colorNames.white,
      link: colorNames.dodgerBlue,
      linkUnderline: colorNames.dodgerBlueLight,
      linkUnderlineHover: colorNames.dodgerBlueLightHover,
      border: colorNames.ironLightDarkMode,
      borderHover: colorNames.scienceBlueLightDarkMode,
    },
    portfolio: {
      text: colorNames.white,
      spinner: colorNames.mineShaftLight,
      spinnerColor: colorNames.dodgerBlue,
    },
  }

};