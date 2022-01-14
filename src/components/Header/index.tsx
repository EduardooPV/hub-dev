import Image from 'next/image'
import Logo from '../../../public/Logo.svg'

import { Button } from '../ButtonCTA'

import { Container, Navbar } from './styles'

export function Header() {
  return (
    <Container>
        <div>
          <a href="#">
            <Image src={Logo} alt="Logo" />
          </a>
          <Navbar>
            <div>
              <ul>
                <li>
                  <a href="#">Início</a>
                </li>
                <li>
                  <a href="#">Sobre</a>
                </li>
                <li>
                  <a href="#">Serviços</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </ul>
            </div>
            <Button href="Baixe agora" />
          </Navbar>
        </div>
    </Container>
  )
}