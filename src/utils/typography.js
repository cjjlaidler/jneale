import Typography from "typography";
import fairyGateTheme from "typography-theme-fairy-gates";

const typography = new Typography({
    baseFontSize: '20px',
    baseLineHeight: 1.45,
    headerFontFamily: ['Work Sans', 'Open Sans', 'Roboto'],
    bodyFontFamily: ['Quattrocento Sans', 'Open Sans', 'Roboto'],
    textDecoration: ['none'],
    // See below for the full list of options.
  }
)
  
// const typography = new Typography(fairyGateTheme)

export default typography;