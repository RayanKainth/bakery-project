
import { Routes, Route } from 'react-router-dom'
import Home from './components/view/home'
import Shop from './components/view/shop'
import About from './components/view/about'
import Blog from './components/view/blog'
import Contact from './components/view/contact'
import Layout from './components/view/layout'

function App() {

  return (
    <Layout>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </Layout>
    
  )
}

export default App
