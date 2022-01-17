import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1240px;
  margin: 5rem auto;
  padding: 0 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media(min-width: 1024px) {
    flex-direction: ${(props) => (props.invert == 1 ? 'row-reverse' : 'row')};
    justify-content: space-between;
  }
  `

export const ContainerImage = styled.div`
    width: 60%;
    height: 60%;
    max-width: 500px;
    max-height: 500px;
  }
`

export const Content = styled.div`
  width: 100%;
      height: 100%;
      max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  h3 {
    font-size: 2.2rem;
    font-weight: bold;
    text-align: center;
    font-family: Montserrat, sans-serif;
  }

  p {
    text-align: ${(props) => (props.invert == 1 ? 'end' : 'start')};
    line-height: 1.8;
  }

  @media(min-width: 1024px) {
    align-items: ${(props) => (props.invert == 1 ? 'end' : 'start')};
    padding: 0;

    h3 {
      font-size: 2.5rem;
      text-align:  ${(props) => (props.invert == 1 ? 'end' : 'start')};
    }
  }
`