import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useEffect, useState } from "react";

import { Container, Card } from "./styles";

interface CardDifferentailsProps {
  props: {
    cardDifferentails: {
      card1: {
        icon: any
        title: string
        description: string
      }
    }
  }
}

export function CardDifferentails({ props }: CardDifferentailsProps) {
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

          {
            Object.values(props.cardDifferentails).map((card, index) => (
              <Card key={index}>
                <div>
                  <Image src={card.icon} alt="Icone" aria-hidden="true" />
                </div>

                <p>{card.title}</p>

                <span>{card.description}</span>
              </Card>
            ))
          }
          
        </Slide>
    </Container>
  );
}
