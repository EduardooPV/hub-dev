import styled from "styled-components";

export const Container = styled.section`
  max-width: 1240px;
  margin: 2rem auto;

  .react-slideshow-wrapper.slide {
    padding: 1rem;
  }
`

export const Card = styled.div`
  max-width: 280px;
  max-height: 232px;

  margin: 0 auto;
  padding: 1.2rem;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  border-radius: 5px;
  background-color: var(--blue-300);

  div {
    width: 60px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;

    border-radius: 10px 10px 0 10px;
    background-color: var(--white);
  }

  p {
    margin-bottom: 2rem;
    color: var(--white);
    font-size: 1.1rem;
  }

  p::after {
    content: "";
    display: block;
    position: absolute;
    height: 1px;
    width: 35%;
    margin: 1.5rem auto;
    background: var(--white);
  }

  span {
    color: var(--white);
    line-height: 1.2
  }

  @media(min-width: 1024px) {
    max-width: 300px;
    max-height: 282px;

    background: var(--white);
    box-shadow: 0px 0px 6px  rgba(0, 0, 0, 0.25);
    
    transition: all 0.2s;

    div {
      width: 70px;
      height: 70px;
      background-color: var(--blue-300);
    }
    
    p {
      color: var(--black);
      font-size: 1.2rem;
    }

    p::after {
      background: var(--black);
    }

    span {
      color: var(--black);
    }

    &:hover {
      background: var(--blue-300);
      box-shadow: 7px 7px var(--black);
      
      div {
        background-color: var(--white);
      }
      
      p {
        color: var(--white);
      }
      p::after {
        background: var(--white);
      }

      span {
        color: var(--white);
      }
    }
  }
`