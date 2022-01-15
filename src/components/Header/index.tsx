import Image from "next/image";
import Logo from "../../../public/Logo.svg";

import { Button } from "../ButtonCTA";

import { Container, Navbar } from "./styles";
interface HeaderProps {
  props: {
    header: {
      links: string[]
      buttonCTA: string
    }
  };
}

export function Header({ props }: HeaderProps) {
  return (
    <Container>
      <div>
        <a href="#">
          <Image src={Logo} alt="Logo" />
        </a>
        <Navbar>
          <div>
            <ul>
              {props.header.links.map((prop, index) => (
                <li key={index}>
                  <a href="#">{prop}</a>
                </li>
              ))}
            </ul>
          </div>
          <Button text={props.header.buttonCTA} />
        </Navbar>
      </div>
    </Container>
  );
}
