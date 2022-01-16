import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1240px;
  margin: 5rem auto;
  padding: 0 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  div {
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 500px;
  }

  @media(min-width: 1024px) {
    flex-direction: ${(props) => (props.invert == 1 ? 'row-reverse' : 'row')};
    justify-content: space-between;
  }
  `

export const Content = styled.div`
  max-width: 650px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  h3 {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    font-family: Montserrat, sans-serif;
  }

  p {
    text-align: justify;
    line-height: 1.5;
  }

  @media(min-width: 1024px) {
    align-items: ${(props) => (props.invert == 1 ? 'end' : 'start')};
    padding: 0;

    h3 {
      text-align:  ${(props) => (props.invert == 1 ? 'end' : 'start')};
    }
  }
`