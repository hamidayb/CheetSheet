import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import CheatSheetList from './screens/CheatSheetList'
import CheatSheet from './screens/CheatSheet'
import Sample from './screens/Sample'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <div className='container lg:w-3/5 md:w-max sm:w-screen mx-auto'>
        <Route path='/' exact component={CheatSheetList} />
      </div>
      <div className='container lg:w-3/5 md:w-max sm:w-screen mx-auto'>
        <Route path='/cheatsheet' exact component={CheatSheet} />
      </div>
      <div className='container lg:w-3/5 md:w-max sm:w-screen mx-auto'>
        <Route path='/sample' exact component={Sample} />
      </div>
    </Router>
  )
}

export default App
