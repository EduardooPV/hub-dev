import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  min-height: 75px;

  padding: 10px 5%;
  
  position: fixed;

  background-color: var(--blue-500);

  z-index: 1;

  div {
    max-width: 1240px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 1024px) {
      justify-content: space-between;
    }
  }

`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 0 2rem;

  div {
    display: none;

    ul {
      margin-right: 2rem;
      display: flex;
      align-items: center;
      gap: 0 2rem;

      li {
        font-size: 1.2rem;
        color: var(--white);
        transition: all 0.2s;

        &:hover {
          color: var(--gray-900);
          border-bottom: 1px solid var(--gray-900);
        }
      }
    }
  }

  @media(min-width: 1024px) {
    div {
      display: flex;
    }
  }
`