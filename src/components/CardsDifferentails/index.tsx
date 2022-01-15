import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useEffect, useState } from "react";

import { Container, Card } from "./styles";

import Icon1 from "../../../public/components/CardDifferentails/icon1.svg";
import Icon2 from "../../../public/components/CardDifferentails/icon2.svg";
import Icon3 from "../../../public/components/CardDifferentails/icon3.svg";

export function CardDifferentails() {
  const [isWidth, setIsWidth] = useState(0);
  useEffect(() => {
    setIsWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setIsWidth(window.innerWidth);
    });
  });

  let properties = {}

  if(isWidth < 1024) {
    properties = {
      indicators: true,
      duration: 2000,
      arrows: false,
      easing: "ease-out",
      infinite: true,
    };
  } else {
    properties = {
      autoplay: false,
      arrows: false,
      indicators: false,
      canSwipe: false,
      slidesToShow: 3,
    };
  }

  return (
    <Container>
        <Slide {...properties}>
          <Card>
            <div>
              <Image src={Icon1} alt="Icone" aria-hidden="true" />
            </div>

            <p>Controle de reputação</p>

            <span>
              Acompanhe o que seus clientes estão dizendo e gerencie a reputação
              online de sua empresa de forma automatizada.
            </span>
          </Card>
          <Card>
            <div>
              <Image src={Icon2} alt="Icone" aria-hidden="true" />
            </div>

            <p>Controle de reputação</p>

            <span>
              Acompanhe o que seus clientes estão dizendo e gerencie a reputação
              online de sua empresa de forma automatizada.
            </span>
          </Card>
          <Card>
            <div>
              <Image src={Icon3} alt="Icone" aria-hidden="true" />
            </div>

            <p>Controle de reputação</p>

            <span>
              Acompanhe o que seus clientes estão dizendo e gerencie a reputação
              online de sua empresa de forma automatizada.
            </span>
          </Card>
        </Slide>
    </Container>
  );
}
