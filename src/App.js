// Pages
import HomePage from './pages/home/HomePage'

// Libraries
import { Navigate, Outlet, Routes, Route } from 'react-router-dom'

const PrivateRoutes = () => {
  const token = JSON.parse(localStorage.getItem('token'))
  return token?.accessToken ? <Outlet /> : <Navigate to='/login' />
}

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path='/' element={<HomePage />} />
            {/* <Route path='/users' element={<UsersListPage />} />
            <Route path='/user' element={<UserPage />} />
            <Route path='/charge' element={<ChargeMoneyPage />} />
            <Route path='/transactions' element={<TransactionsPage />} />
            <Route path='/transaction' element={<Transaction />} /> */}
          </Route>
          {/* <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={<ErrorPage />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
