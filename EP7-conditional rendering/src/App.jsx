
import Header from './components/Header'
import Footer from './components/Footer';
import { Content } from './components/Content';
import Counter from './components/CounterApp';

function App() {
  let user="Balaji";
  return (
    < div className="app">
      <Header user={user} />
      <Content/>
      <Counter className="counter"/>
      <Footer user="Rajeshwari"/>
      
      
     
    </div>
  )
}

export default App
