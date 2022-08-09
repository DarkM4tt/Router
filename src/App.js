import { Route, Routes, Navigate } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Products from './pages/Products'
import MainHeader from './components/MainHeader'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome new user!</p>} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
