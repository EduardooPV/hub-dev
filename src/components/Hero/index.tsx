import React from "react";
import { Button } from "../ButtonCTA";

import { Container } from "./styles";

export function Hero() {
  return (
    <Container>
      <div className="transitionOpacity">
        <h1>Atraia clientes de qualquer lugar a qualquer hora</h1>

        <h2>Lançamento do novo aplicativo da HubLocal.</h2>

        <p>
          Aumente o trafego de clientes em sua empresa, com a{" "}
          <strong>HubLocal</strong> você será notado em mais de 50 mecanismos de
          busca, agora podendo consultar suas estatisticas e resultados direto
          do seu celular.
        </p>

        <Button text="Baixe agora mesmo" />
      </div>
    </Container>
  );
}
