import "./App.css";
import TodoApp from "./components/TodoApp";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import Signup from "./components/Signup";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import NotFound from "./components/NotFound";
function App() {
  var userName = "balaji";
  return (
    <div className="app">
      <Router>
        <NavBar />
        {/*<ol id="ol">
          <ul>
            <Link to="/">Home </Link>
            <br />
            <Link to="/products">Products </Link>
            <br />
            <Link to="/signup">SignUp</Link>
            <br />
            <Link to={`/login/${userName}`}>Login </Link>
            <br />
            <Link to="/todoapp">Todo App </Link>
            <br />
             <a href="/products">Products</a>page will be load while using <a href/> tag, insread use Link tag *
          </ul> 
        </ol>*/}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path="list" element={<ProductList />} />
            <Route path="details" element={<ProductDetails />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login/:uName" element={<Login />} />
          <Route path="/todoapp" element={<TodoApp />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
