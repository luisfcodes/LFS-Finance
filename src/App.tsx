import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TransactionsTable } from './components/TransactionsTable';
import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyle } from './styles/global'

function App() {
  return (
      <TransactionsProvider>
        <GlobalStyle />
        <div className='container'>
          <Header />
          <main>
            <Dashboard />
            <TransactionsTable />
          </main>
          <Footer />
        </div>
      </TransactionsProvider>
      
  );
}

export default App;
