import { Container } from './styles'
import coinImg from '../../assets/coin.svg'
import { useTransactions } from '../../hooks/useTransactions'

export function Header(){

  const transactions = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      return acc + transaction.amount
    } else {
      return acc - transaction.amount
    }
  },0)

  return (
    <Container>
    
        <button>
          <img src={coinImg} alt="Logo composta por uma moeda amarela" />
          <span>LFS - Finance</span>
        </button>

        <span>Saldo atual <strong 
            className={summary > 0 ? 'deposits' : 'withdraws'}
          > 
            {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(summary)} 
          </strong> 
        </span>

    </Container>
  )
}