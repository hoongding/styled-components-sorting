import { combineProperties, parseCssProperties } from './parseCssProperties'

// 알파벳 순서대로 sorting하기
function sortPropertiesAlphabetically(properties: string[]) {
  return properties.sort((a, b) => {
    // 콜론을 기준으로 속성명과 속성값 분리
    const nameA = a.split(':')[0].trim()
    const nameB = b.split(':')[0].trim()

    // 속성명만을 기준으로 비교
    return nameA.localeCompare(nameB)
  })
}

export function sortCssAlphabetically(cssString: string) {
  const properties = parseCssProperties(cssString)
  const sorted = sortPropertiesAlphabetically(properties)

  return combineProperties(sorted)
}
