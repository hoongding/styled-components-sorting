export function parseCssProperties(cssString: string) {
  // 첫번째 프로퍼티 앞에있는 공백은 따로 떼어놓기?
  const properties = cssString
    .split(';') // 세미콜론으로 속성 분리
    .filter((property) => property !== '') // 빈 속성 제거

  return properties
}

export function combineProperties(properties: string[]) {
  return properties.join(';') + ';'
}
