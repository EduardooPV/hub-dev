/* eslint-disable react/prop-types */
import React from "react";
import Image from "next/image";

import { Button } from "../ButtonCTA";

import { Container, ContainerImage, Content } from "./styles";

interface CasesProps {
  props: {
    cases: {
      case1: {
        icon: { src: string; width: number; height: number };
        title: string;
        description: string;
        buttonCTA: string;
      };
    };
  };
}

export function Cases({ props }: CasesProps) {
  return (
    <>
      {Object.values(props.cases).map((section, index) => (
        <Container key={index} invert={index}>
          <ContainerImage>
            <Image
              src={section.icon}
              layout="responsive"
              alt="Imagem chamativa do case"
              aria-hidden="true"
            />
          </ContainerImage>

          <Content invert={index}>
            <h3>{section.title}</h3>

            <p>{section.description}</p>

            <Button text={section.buttonCTA} />
          </Content>
        </Container>
      ))}
    </>
  );
}
