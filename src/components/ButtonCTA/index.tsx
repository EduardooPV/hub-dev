import { ButtonContainer } from './styles' 

interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return (
    <ButtonContainer href="">
      {text}
    </ButtonContainer>
  )
} 