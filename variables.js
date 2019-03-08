export const AVAIABLE_COLORS_THEME_NAME = [
  "light", "primary", "success", "info", "warning", "danger", "dark"
];

export const colors = {
  black: '#333',
  blue: '#49b2fa',
  darkGray: "#666",
  dark: "#444",
  lightgray: '#efefef',
  gray: '#ddd',
  white: "#fff",
  yellow: "#ffeb3b",
  info: "#17a2b8",
  primary: "#3F51B5",
  red: '#ff3e24',
  success: "green",
  light: "#fefefe",
  secondary: "#888"
}

export const size = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}

export const theme = {
  color: '#000',
  fontSize: {
    small: 10,
    medium: 14,
    large: 18
  },
  button: {
    view: {
      danger:{
        backgroundColor: colors.red
      },
      primary: {
        backgroundColor: colors.primary
      },
      warning:{
        backgroundColor: colors.yellow
      },
      info: {
        backgroundColor: colors.info
      },
      success: {
        backgroundColor: colors.success
      },
      dark: {
        backgroundColor: colors.black
      },
      light: {
        backgroundColor: colors.light
      }
    }, 
    text: {
      danger:{
        fontWeight: "600",
        color: colors.white
      },
      primary: {
        fontWeight: "600",
        color: colors.white
      },
      warning:{
        fontWeight: "600",
        color: colors.white
      },
      info: {
        fontWeight: "600",
        color: colors.white
      },
      success: {
        fontWeight: "600",
        color: colors.white
      },
      dark: {
        fontWeight: "600",
        color: colors.white
      },
      light: {
        fontWeight: "600",
        color: colors.darkGray
      }
    }
  },
  h1: {
    fontSize: 26,
    fontWeight: "800"
  },
  h4: {
    fontSize: 16,
    fontWeight: "600",
  },
  text: {
    primary: {
      fontSize: 14,
      color: colors.black,
    },
    secondary: {
      fontSize: 14,
      color: colors.secondary
    }
  }
}