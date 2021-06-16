import { Wrapper, Title, Logo, Description, Illustration } from "./styles";

export default function Main() {
  return (
    <Wrapper>
      <main>
        <Logo
          src="/logo.svg"
          alt="logo-Atomo e ao lado escrito react avançado"
        />
        <Title>React avançado</Title>
        <Description>
          TypeScript, ReactJs, NextJs, Styled-Components
        </Description>
        <Illustration
          src="/hero-illustration.svg"
          alt="figura de um desenvolvedor e uma tela com códigos"
        />
      </main>
    </Wrapper>
  );
}
