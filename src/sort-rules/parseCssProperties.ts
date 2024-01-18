export function parseCssProperties(cssString: string) {
  let braceLevel = 0
  let templateLevel = 0
  let currentProperty = ''
  const properties = []

  for (let i = 0; i < cssString.length; i++) {
    const char = cssString[i]

    if (char === '{') braceLevel++
    else if (char === '}') braceLevel--

    if (char === '`') {
      if (templateLevel === 0 || cssString[i - 1] === '\\') templateLevel = templateLevel === 0 ? 1 : 0
    }

    if (char === ';' && braceLevel === 0 && templateLevel === 0) {
      currentProperty = currentProperty.trim()
      if (currentProperty) properties.push(currentProperty)

      currentProperty = ''
    } else currentProperty += char
  }

  currentProperty = currentProperty.trim()

  if (currentProperty) properties.push(currentProperty)

  return properties.filter((property) => !/^\s*$/.test(property))
}

// TODO: combine 할 때 맨 앞에 공백들어가게끔 변경
export function combineProperties(properties: string[]) {
  properties[0] = '\n  ' + properties[0]
  return properties.join(';\n  ') + ';\n'
}
