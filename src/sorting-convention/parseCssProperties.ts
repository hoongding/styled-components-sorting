export function parseCssProperties(cssString: string) {
  const properties = cssString
    .split(';') // 세미콜론으로 속성 분리
    .map((property) => property.trim()) // 공백 제거
    .filter((property) => property !== '') // 빈 속성 제거

  return properties
}

export function combineProperties(properties: string[]) {
  return properties.join('; ') + ';'
}
