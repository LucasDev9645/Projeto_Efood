import { createGlobalStyle } from "styled-components";

export const colors = {
  black: "#111111",
  white: "#FFFFFF",
  red: "#E66767",
  amber: "#FFF8F2",
  blackAmber: "#FFEBD9",
};

export const GlobalCss = createGlobalStyle`
* {
 margin:0;
 padding:0;
 box-sizing:border-box;
 font-family: 'Roboto', sans-serif;

}

h1, h2, h3, h4, h5 {
  font-family: 'Zilla Slab', serif;
}

a {
  text-decoration:none;
}

li {
  list-style:none;
}

body {
background-color:${colors.amber};
color:${colors.red};
}

.container {
  max-width:75rem;
  width: 100%;
  margin: 2rem auto;
}
`;
