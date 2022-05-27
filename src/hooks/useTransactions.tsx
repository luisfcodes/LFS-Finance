import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api'

interface Transaction {
  id: number,
  description: string,
  type: string,
  category: string,
  date: string,
  amount: number
}

interface TransactionsProps {
  children: ReactNode
}

const TransactionsContext = createContext<Transaction[]>([])

export function TransactionsProvider({ children }: TransactionsProps){

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api('/transactions')
      .then(response => setTransactions(response.data))
  }, [])

  return(
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions(){
  const context = useContext(TransactionsContext)

  return context
}

