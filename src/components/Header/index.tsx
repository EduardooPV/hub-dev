/* eslint-disable react/prop-types */
import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";

import { Button } from "../ButtonCTA";

import { Container, Navbar } from "./styles";
interface HeaderProps {
  props: {
    header: string[];
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
              {props.header.map((prop, index) => (
                <li key={index}>
                  <a href="#">{prop}</a>
                </li>
              ))}
            </ul>
            <Button text="Baixe agora mesmo" />
          </div>
        </Navbar>
      </div>
    </Container>
  );
}
