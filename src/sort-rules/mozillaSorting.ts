/**
 모질라에서 제안한 CSS속성 기술 순서

display --객체의 노출여부/표현방식--
list-style
position --위치/좌표--
float
clear
width / height --크기/여백--
padding / margin
border / background --윤곽/배경--
color / font --글자/정렬--

text-decoration
text-align / vertical-align
white-space
other text
content --내용--
위치 선정 > 윤곽 > 외곽 디테일링 > 채색 > 타이포그래피 와 같이 밖에서부터 안쪽으로의 흐름이다.
 */

const mozillaStyleGuide = [
  // display --객체의 노출여부/표현방식--
  'display',

  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',

  'align-content',
  'align-items',
  'align-self',
  'align-tracks',

  'justify-content',
  'justify-items',
  'justify-self',
  'justify-tracks',

  'overflow',
  'visibility',

  // list-style
  'list-style',
  'list-style-image',
  'list-style-position',
  'list-style-type',

  // position --위치/좌표--
  'position',
  'top',
  'right',
  'bottom',
  'left',
  'clip',

  // float, clear
  'float',
  'clear',

  'z-index',

  // width / height --크기/여백--
  'width',
  'height',
  'min-width',
  'min-height',
  'max-width',
  'max-height',

  // padding
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'padding-block',
  'padding-block-start',
  'padding-block-end',
  'padding-inline',
  'padding-inline-start',
  'padding-inline-end',

  // margin
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'margin-block-start',
  'margin-block-end',
  'margin-inline',
  'margin-inline-start',
  'margin-inline-end',

  'outline',
  'outline-offset',
  'outline-width',
  'outline-style',
  'outline-color',

  // border / background --윤곽/배경--
  'border',
  'border-top',
  'border-right',
  'border-bottom',
  'border-left',
  'border-width',
  'border-top-width',
  'border-right-width',
  'border-bottom-width',
  'border-left-width',
  'border-block',
  'border-block-color',
  'border-block-end',
  'border-block-end-color',
  'border-block-end-style',
  'border-block-end-width',
  'border-block-start',
  'border-block-start-color',
  'border-block-start-style',
  'border-block-start-width',
  'border-block-style',
  'border-block-width',
  'border-bottom-color',
  'border-radius',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-bottom-style',
  'border-collapse',
  'border-color',
  'border-end-end-radius',

  'box-shadow',

  'background',
  'background-attachment',
  'background-clip',
  'background-color',
  'background-image',
  'background-blend-mode',
  'background-origin',
  'background-position',
  'background-repeat',
  'background-size',

  // color / font --글자/정렬--
  'color',
  'font-style',
  'font-weight',
  'font-size',
  'line-height',
  'letter-spacing',
  'text-align',
  'text-indent',
  'vertical-align',
  'white-space',

  // others -> alphabet으로 정렬하기!
]
