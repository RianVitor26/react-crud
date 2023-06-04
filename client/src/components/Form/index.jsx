import { FormContainer, Form, InputArea, Button } from "./styles";

export const FormComponent = () => {
  return (
    <FormContainer>
      <Form>
        <InputArea>
          <label name="id" htmlFor="id">ID</label>
          <input
            type="number"
            id="id"
            placeholder="ID"
            min={1}
            max={10}
            disabled
          />
        </InputArea>
        <InputArea>
          <label name="name" htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Nome da matéria"
            minLength={1}
            maxLength={50}
            required
          />
        </InputArea>
        <InputArea>
          <label name="workload" htmlFor="workload">CG</label>
          <input
            type="text"
            id="workload"
            placeholder="Carga horária da matéria"
            minLength={1}
            maxLength={5}
            required
          />
        </InputArea>
        <InputArea>
          <label name="weight" htmlFor="weight">Peso</label>
          <input
            type="text"
            id="weight"
            placeholder="Peso da matéria"
            minLength={1}
            maxLength={2}
            required
          />
        </InputArea>
        <Button>Cadastrar</Button>
      </Form>
    </FormContainer>
  );
};
