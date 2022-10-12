import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/home'
import Expenses from './pages/routes/expenses'
import Invoices from './pages/routes/invoices'
import Invoice from './pages/routes/invoice'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/expenses' element={<Expenses />} />
        <Route path='/invoices' element={<Invoices />}>
          <Route 
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=':invoiceId' element={<Invoice />} />
        </Route>
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
)
