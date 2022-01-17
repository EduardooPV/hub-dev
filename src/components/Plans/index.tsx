import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useEffect, useState } from "react";

import { Container, Title, CardPlan } from "./styles";

interface PlansProps {
  props: {
    plans: {
      plan1: {
        type: string;
        price: string;
        description: string;
        services: Array<{ iconService: string; typeService: string }>;
      };
    };
  };
}

export function Plans({ props }: PlansProps) {
  const [isWidth, setIsWidth] = useState(0);

  useEffect(() => {
    setIsWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setIsWidth(window.innerWidth);
    });
  });

  let properties = {};

  if (isWidth < 1024) {
    properties = {
      indicators: true,
      duration: 5000,
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
      <Title>Planos disponiveis</Title>

      <Slide {...properties}>
        {Object.values(props.plans).map((plan, index) => (
          <CardPlan key={index}>
            <h3>{plan.type}</h3>

            <p>{plan.price}</p>

            <span>{plan.description}</span>

            <ul>
              {plan.services.map((service, index) => (
                <li key={index}>
                  <Image
                    src={service.iconService}
                    alt="Icone que contem no plano"
                    aria-hidden="true"
                    height={15}
                    width={15}
                  />
                  <p>{service.typeService}</p>
                </li>
              ))}
            </ul>

            <button>Escolher plano</button>
          </CardPlan>
        ))}
      </Slide>
    </Container>
  );
}
