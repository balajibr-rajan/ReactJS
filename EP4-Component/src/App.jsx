
import Header from './components/Header'
import Footer from './components/Footer';
import { Content } from './components/Content';
import CounterApp from './components/counterApp';

function App() {
  let user="Balaji";
  return (
    < div className="app">
      <Header user={user} />
      <Content/>
      <CounterApp className="counter"/>
      <Footer user="Rajeshwari"/>
      
      
     
    </div>
  )
}

export default App
