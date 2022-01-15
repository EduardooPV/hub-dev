import { Container } from './styles'

import { Button } from '../ButtonCTA'

interface BannerCTAProps {
  props: {
    bannerCTA: {
      title: string
      buttonCTA1: string
      buttonCTA2: string
      description: string
    }
  }
}

export function BannerCTA({ props }: BannerCTAProps) {
  return (
    <Container>
      <div>
        <h5>{props.bannerCTA.title}</h5>

        <div>
          <Button text={props.bannerCTA.buttonCTA1} />
          <Button text={props.bannerCTA.buttonCTA2} />
        </div>

        <p>{props.bannerCTA.description}</p>
      </div>
    </Container>
  )
}