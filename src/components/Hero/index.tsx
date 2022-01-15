import { Button } from "../ButtonCTA";

import { Container } from "./styles";

interface HeroProps {
  props: {
    hero: {
      title: string
      subtitle: string
      description: string
      buttonCTA: string
    }
  }
}

export function Hero({ props }: HeroProps) {
  return (
    <Container>
      <div>
        <h1>{props.hero.title}</h1>

        <h2>{props.hero.subtitle}</h2>

        <p>{props.hero.subtitle}</p>

        <Button text={props.hero.buttonCTA}/>
      </div>
    </Container>
  );
}
