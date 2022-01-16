import { Container } from './styles'

import { Button } from '../ButtonCTA'

export function BannerCTA() {
  return (
    <Container>
      <div>
        <h4>Baixe e teste agora mesmo!</h4>

        <div>
          <Button text="Download Android" />
          <Button text="Download iOS" />
        </div>

        <p>Aplicativo multiplataforma, baixe onde e quando quiser.</p>
        <p>Receba o primeiro mês grátis.</p>
      </div>
    </Container>
  )
}