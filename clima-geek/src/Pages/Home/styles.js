// src/Pages/Home/styles.js

import styled from "styled-components/native";

export const Home = styled.ImageBackground`
  margin: 0;
  flex: 1;
  position: relative;
  background-color: ${props => props.theme.isDarkTheme ? '#000' : '#fff'};
`;

// atualize outros componentes estilizados de forma semelhante
