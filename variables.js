

export const colors = {
  black: '#333',
  darkGray: "#666",
  red: '#ff3e24',
  blue: '#49b2fa',
  lightgray: '#efefef',
  gray: '#ddd',
  white: "#fff"
}

export const size = {
  small: 'SMALL',
  medium: 'MEDIUM',
  large: 'LARGE'
}


export const styles = {
  color: '#000',
  fontSize: {
    SMALL: 10,
    MEDIUM: 14,
    LARGE: 18
  },
  button: {
    view: {
      danger:{
        backgroundColor: colors.red
      },
      primary: {
        backgroundColor: colors.black
      }
    }, 
    text: {
      danger:{
        fontWeight: 600,
        color: colors.white
      },
      primary: {
        fontWeight: 600,
        color: colors.white
      }
    }
  },
  h1: {
    fontSize: 26,
    fontWeight: "800"
  },
}