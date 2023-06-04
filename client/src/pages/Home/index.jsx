import { Container, Main, Title } from './styles'
import { FormComponent } from '../../components/Form'

export const Home = () => {
  return (
    <Container>
      <Main>
        <Title>Sistema de cadastro</Title>
        <FormComponent />
      </Main>
    </Container>
  );
}
