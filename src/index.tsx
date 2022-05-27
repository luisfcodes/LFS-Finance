import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createServer } from 'miragejs'

createServer({
  routes() {

    this.namespace = 'api'

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          description: 'Compra no supermercado',
          category: 'Casa',
          type: 'withdraw',
          date: '26/05/2022',
          amount: 500
        },
        {
          id: 2,
          description: 'Criação de website',
          category: 'Freelance',
          type: 'deposit',
          date: '28/05/2022',
          amount: 3500
        },
        {
          id: 3,
          description: 'Troca de óleo',
          category: 'Carro',
          type: 'withdraw',
          date: '15/05/2022',
          amount: 320
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
