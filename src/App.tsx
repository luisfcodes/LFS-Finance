import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'

function App() {
  return (
      <>
        <GlobalStyle />
        <div className='container'>
          <Header />
          <main>a</main>
          <footer>aaa</footer>
        </div>
        
      </>
      
  );
}

export default App;
