import { combineProperties, parseCssProperties } from './parseCssProperties'

// 알파벳 순서대로 sorting하기
function sortPropertiesAlphabetically(properties: string[]) {
  return properties.sort((a, b) => a.localeCompare(b))
}

export function sortCssAlphabetically(cssString: string) {
  const properties = parseCssProperties(cssString)
  const sorted = sortPropertiesAlphabetically(properties)
  return combineProperties(sorted)
}
