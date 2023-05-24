/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import dbQuotes from "./db/quote.json"
import { getRandom } from "./utils/random"
import QuoteBox from './components/QuoteBox'

const bgImages = ["bg1", "bg2", "bg3", "bg4","bg5", "bg6","bg7", "bg8"]

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes))
  const [bgImage, setBgImage] = useState(getRandom(bgImages))
  

  const handleChangeQuote = () => {
    setQuote(getRandom(dbQuotes))
    setBgImage(getRandom(bgImages))
  }

  return (
        <main className={`app ${bgImage}`}>
      <section className='app__container'>
        <h1>STAR WARS</h1>

        <QuoteBox className="phrase" handleChangeQuote={handleChangeQuote} phrase={quote.phrase} />

        <footer>
          <h2>- {quote.author} -</h2>
        </footer>
      </section>
    </main>
  );
}

export default App
