import {AVAIABLE_COLORS_THEME_NAME} from './variables';

export function getColorSysNameFromProps (props) {
  let result = intersection(    
    Object.keys(props),
    AVAIABLE_COLORS_THEME_NAME
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