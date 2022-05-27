import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function Dashboard(){

  const transactions = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  function formatNumber(number: number){
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(number)
  }

  return (
    <Container>
      <div>
        <h3>
          Entradas
        </h3>
        <span>{formatNumber(summary.deposits)}</span>
      </div>
      <div>
        <h3>
          Saídas
        </h3>
        <span>- {formatNumber(summary.withdraws)}</span>
      </div>
      <div>
        <h3>
          Total
        </h3>
        <span>{formatNumber(summary.total)}</span>
      </div>
    </Container>
  )
}