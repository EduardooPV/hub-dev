import Image from 'next/image'

import { Button } from '../ButtonCTA'

import { Container, Content } from './styles'

interface CasesProps {
  props: {
    cases: {
      case1: {
        icon: any
        title: string
        description: string
        buttonCTA: string
      }
    }
  }
}

export function Cases({ props }: CasesProps) {
  return (
    <>
      {
        Object.values(props.cases).map((section, index) => (
          <Container invert={index}>
            <div>
              <Image src={section.icon} layout="responsive" alt="Imagem chamativa do case" aria-hidden="true"/>
            </div>

            <Content invert={index}>
              <h4>{section.title}</h4>

              <p>{section.description}</p>

              <Button text={section.buttonCTA} />
            </Content>
          </Container>
        ))
      }
    </>
  )
}