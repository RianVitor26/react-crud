import { useState } from "react";
import { Table, TableContainer, Td, Th, Thead, Tr } from "./styles";

export const TableComponent = () => {

  const [hasRegister, setHasRegister] = useState(true)

  return (
    <>
      {hasRegister === false ? (
        <h1>Nenhum registro encontrado</h1>
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
