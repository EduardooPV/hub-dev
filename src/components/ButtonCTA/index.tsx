import { ButtonContainer } from './styles' 

interface ButtonProps {
  href: string
}

export function Button({ href }: ButtonProps) {
  return (
    <ButtonContainer href="">
      {href}
    </ButtonContainer>
  )
} 