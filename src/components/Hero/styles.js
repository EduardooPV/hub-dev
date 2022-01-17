import styled from "styled-components";

import Background from "../../../public/components/Hero/bg-hero.webp";

export const Container = styled.main`
  width: 100vw;
  min-height: 100vh;

  // Acho melhor para ler...
  background: linear-gradient(
      344.53deg,
      rgba(0, 0, 0, 0.7) 40%,
      rgba(0, 0, 0, 0) 80.46%
    ),
    url(${Background.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 60px;
  transform: rotateY(180deg);

  div {
    max-width: 1240px;
    height: 100vh;

    margin: 0 auto;
    padding: 75px 5% 0 5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: var(--white);
    text-align: center;
    transform: rotateY(180deg);

    h1 {
      margin-bottom: 2rem;
      font-size: 3.125rem;
      font-weight: bold;
      line-height: 1.2;
      font-family: Montserrat, sans-serif;
    }
    
    h2 {
      font-family: Montserrat, sans-serif;
      font-size: 2rem;
    }

    p {
      margin: 1rem 0 2rem 0;

      font-size: 1.1rem;
      line-height: 1.8;
    }
  }

  @media (min-width: 1024px) {
    background: linear-gradient(
        -90deg,
        rgba(0, 0, 0, 0.7) 40%,
        rgba(0, 0, 0, 0) 80.46%
      ),
      url(${Background.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 60px;

    div {
      align-items: start;
      text-align: start;

      h1 {
        margin-bottom: 2rem;
        font-size: 4rem;
        max-width: 900px;
      }

      h2 {
        font-size: 2rem;
        max-width: 650px;
      }

      p {
        margin: 1rem 0 2rem 0;
        max-width: 550px;
      }
    }
  }

  .transitionOpacity {
    opacity: 0;
    -webkit-animation: slide-in 3s forwards;
    animation: slide-in 3s forwards;
  }
  @-webkit-keyframes slide-in {
    100% {
      opacity: 1;
    }
  }
  @keyframes slide-in {
    100% {
      opacity: 1;
    }
  }
`;
