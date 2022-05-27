import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {

  const transactions = useTransactions()

  if(transactions.length > 0 ){
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.date}</td>
                  <td className={transaction.type === 'deposit' ? 'deposits' : 'withdraws'}>
                    {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(transaction.amount)}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Container>
    )
  } else {
    return (
      <>
      </>
    )
  }

  
}