export const AVAIABLE_THEME_NAME = [
  "light", "primary", "success", "info", "warning", "danger", "dark"
];

export function getThemeFromProps (props) {
  let result = intersection(    
    Object.keys(props),
    AVAIABLE_THEME_NAME
  );
  if (result.length !== 0) {
    return result.reverse()[0];
  } else {
    return "primary";    
  } 
}

export function intersection(array1, array2) {
  return array1.filter(value => -1 !== array2.indexOf(value))
}