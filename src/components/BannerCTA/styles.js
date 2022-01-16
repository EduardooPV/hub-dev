import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  background-color: var(--blue-300);

  div {
    max-width: 1240px;

    margin: 0 auto;
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
    h4 {
      font-size: 2.5rem;
      color: var(--white);
      text-align: center;
    }
    
    p {
      font-size: 0.9rem;
      color: var(--white);
      text-align: center;
    }
  }

  @media(min-width: 1024px) {
    div {
      h4 {
        font-size: 3rem;
      }
      div {
        flex-direction: row;
      }
    }
  }
`
