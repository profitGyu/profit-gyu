import { createGlobalStyle } from 'styled-components';

export const globalStyleCode = `
  *, ::after, ::before {
    box-sizing: border-box; 
  } 
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  button,
  video {
    padding: 0;
    margin: 0;
    vertical-align: baseline;
    background: inherit;
    border: 0;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
    font-family: 'Dovemayo_gothic', 'Dovemayo-Medium', suit, sans-serif;
  }
  input, select, textarea {
    font-size: 16px;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: "";
    content: none;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  button:not(:disabled) {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  a:link, a:visited, a:hover, a:active {
    color: inherit;
    text-decoration: none;
  }

  hr {
    border: none;
    margin: 0;
  }

  textarea {
    outline: none;
  }

  ol, ul, li {
    list-style: none;
  }

  dialog {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
  }

  .body-scroll-hidden {
    overflow: hidden;
  }

  .drag-scroll-x {
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;

    @media(pointer: coarse) {
      padding-bottom: 10px;
      overflow-x: scroll !important;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
    box-shadow: 0 0 0 1000px white inset;
  }

  @media (max-width: 768px) {
    a, button {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }
`;

const GlobalStyle = createGlobalStyle`${globalStyleCode}`;

export default GlobalStyle;
