// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  semi: true, // 문장 끝에 세미콜론 추가
  singleQuote: true, // 홑따옴표 사용
  tabWidth: 2, // 들여쓰기 공백 수
  useTabs: false, // 탭 대신 공백
  trailingComma: 'all', // 가능하면 후행 쉼표 사용
  bracketSpacing: true, // 객체 중괄호 내에 공백 삽입: { foo: bar }
  printWidth: 100, // 최대 줄 길이 (보통 100~120 사이 선호)
  arrowParens: 'avoid', // 매개변수가 하나일 경우 괄호 생략
  endOfLine: 'lf', // 모두 LF로 통일 (git conflict 방지)
};

export default config;
