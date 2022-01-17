import React from "react";
import Image from "next/image";

import {
  Container,
  ContainerContent,
  ContainerImage,
  ContainerLink,
} from "./styles";

import Logo from "../../../public/logo.png";
import GooglePlay from "../../../public/components/Footer/googleplay.svg";
import Facebook from "../../../public/components/Footer/facebook.svg";
import Instagram from "../../../public/components/Footer/instagram.svg";

export function Footer() {
  return (
    <Container>
      <div>
        <ContainerContent>
          <ContainerImage>
            <Image src={Logo} alt="Logo HubLocal" layout="responsive" />

            <div>
              <Image
                src={GooglePlay}
                alt="Icone Google Play"
                width={45}
                height={45}
              />
              <Image
                src={Facebook}
                alt="Icone Facebook"
                width={45}
                height={45}
              />
              <Image
                src={Instagram}
                alt="Icone Instagram"
                width={45}
                height={45}
              />
            </div>
          </ContainerImage>

          <ContainerLink>
            <div>
              <p>Sobre</p>
              <ul>
                <li>Blog</li>
                <li>CNPJ</li>
                <li>Feitos</li>
              </ul>
            </div>
            <div>
              <p>Serviços</p>
              <ul>
                <li>Nossos diferenciais</li>
                <li>Trabalhe conosco</li>
                <li>Nossos cases</li>
                <li>Planos</li>
              </ul>
            </div>
            <div>
              <p>Contato</p>
              <ul>
                <li>Play Store</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>TikTok</li>
              </ul>
            </div>
          </ContainerLink>
        </ContainerContent>
      </div>

      <span>Copyright @ 2021. HubDev. All Rights Reserved</span>
    </Container>
  );
}
