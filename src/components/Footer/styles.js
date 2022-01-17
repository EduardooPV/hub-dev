import styled from "styled-components";

export const Container = styled.footer`
  
  background-color: var(--blue-300);
  
  > div {
    padding: 3rem 5%;
    max-width: 1240px;
    margin: 0 auto;
    
  }

  span {
    width: 100%;

    padding: 1.1rem 0;
    display: block;

    text-align: center;
    font-size: 0.9rem;
    color: var(--gray-900);
    font-family: Montserrat, sans-serif;
    background-color: var(--white);
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (min-width: 1024px) {
    width: 100%;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  cursor: pointer;

  div {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`;

export const ContainerLink = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  gap: 2rem;
  
  div {
    min-width: 150px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    
    p {
      font-size: 1.2rem;
      color: var(--white);
      font-weight: bold;
    }

    ul li {
      margin-top: 1rem;
      color: var(--gray-200);
      opacity: 0.9;
      cursor: pointer;

        &:hover {
          opacity: 1;
          color: var(--green-300);
        }
      }
    }
  }  

  @media (min-width: 1024px) {
    align-items: start;
  }
`;