import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import Success from "./pages/Success"
import Error from "./pages/Error"







const App = () =>  {
  const routes = [
    { path: '/', id: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", component: <Home/>},
    { path: '/login', id: "bdbdjdjdddnjdbbnfnfffnnffjfhbfbfj", component: <Login/>},
    { path: '/register', id: "rttshbdhjjdbdvfdhnfnfjjnfnnnfnnn", component: <Register/>},
    { path: '/cart', id: "jfjjfjfjfjfjfjfjfjfjfjfjjfjfjfjf", component: <Cart/>},
    { path: '/product/*', id: "hfhhffknnkmdmdmdndmddndnndndn", component: <Product/>},
    { path: '/success', id: "hhfgfggdvvdvdeffetetyeheyeyeueu", component: <Success/>},
    { path: '/error', id: "ghfhfjfuhgvbssbnasshshshshhshss", component: <Error/>}

  ]
  

  return (
    <Routes>
      {routes.map(({id, component, path}, _) => <Route key={id} path={path} element={component} />)}
    </Routes>
  )
}

export default App
