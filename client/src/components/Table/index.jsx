import { useState } from "react";
import {
  Table,
  TableContainer,
  Td,
  Th,
  Thead,
  Tr,
  NotFoundContainer,
} from "./styles";

export const TableComponent = () => {

  const [hasRegister, setHasRegister] = useState(false)

  return (
    <>
      {hasRegister === false ? (
        <NotFoundContainer>
          <img
            src="github_gif.gif"
            alt="Mascote do Github"
          />
          <h2>Nenhum registro encontrado</h2>
        </NotFoundContainer> 
      ) : (
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Nome</Th>
                <Th>CG</Th>
                <Th>Peso</Th>
                <Th>teste</Th>
                <Th>teste</Th>
              </Tr>
            </Thead>
            <Tr>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
            </Tr>
            <Tr>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
            </Tr>
            <Tr>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
            </Tr>
            <Tr>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
            </Tr>
            <Tr>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
            </Tr>
            <Tr>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
              <Td>Lorem, ipsum dolor.</Td>
            </Tr>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
