import Image from "next/image";

import {
  Container,
  ContainerContent,
  ContainerImage,
  ContainerLink,
} from "./styles";

import Logo from "../../../public/logo.svg";
import GooglePlay from "../../../public/components/Footer/googleplay.svg";
import Facebook from "../../../public/components/Footer/Facebook.svg";
import Instagram from "../../../public/components/Footer/Instagram.svg";

export function Footer() {
  return (
      <Container>
        <div>
          <ContainerContent>
            <ContainerImage>
              <Image src={Logo} alt="Logo HubLocal" layout="responsive"/>

              <div>
                <Image src={GooglePlay} alt="Icone Google Play" width={45} height={45} />
                <Image src={Facebook} alt="Icone Facebook" width={45} height={45}/>
                <Image src={Instagram} alt="Icone Instagram" width={45} height={45}/>
              </div>
            </ContainerImage>

            <ContainerLink>
              <div>
                <p>Sobre</p>
                <ul>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
              </div>
              <div>
                <p>Serviços</p>
                <ul>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
              </div>
              <div>
                <p>Contato</p>
                <ul>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
              </div>
            </ContainerLink>
          </ContainerContent>

        </div>

         <span>Copyright @ 2021. HubDev. All Rights Reserved</span>
      </Container>
  );
}
