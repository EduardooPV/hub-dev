import styled from 'styled-components'


export const Container = styled.section`
  max-width: 1240px;
  margin: 3rem auto;
  padding: 0 5%;

  .react-slideshow-wrapper.slide {
    margin: 3rem  0 1rem 0;
    padding: 1rem 0;
  }
`

export const Title = styled.h2`
  margin-top: 5rem;

  word-wrap: break-word;
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  font-family: Montserrat, sans-serif;
`

export const CardPlan = styled.div`
  max-width: 260px;

  margin: 0 auto;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);

  p {
    font-size: 4rem;
    color: var(--blue-300);
  }

  span {
    width: 100%;
    padding-bottom: 1rem;
    display: block;
    font-size: 0.9rem;
    color: var(--gray-900);
    border-bottom: 1px solid var(--gray-300);
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  ul li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    line-height: 0;
    
    p {
      font-size: 1.1rem;
      color: var(--gray-900)!important;
    }
  }

  button {
    padding: 0.9rem 2rem;

    border-radius: 2rem;
    border: 2px solid var(--blue-300);
    background: transparent;
    
    font-size: 1.1rem;
    font-family: Montserrat, sans-serif;

    cursor: pointer;
    transition: all 0.1s;

    &:hover {
      color: var(--white);
      background: var(--green-300);
    }
  }
`