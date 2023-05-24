/* eslint-disable react/prop-types */
import "./styles/QuoteBox.css"

const QuoteBox = ({phrase, handleChangeQuote}) => {
  return (
    <section className="quoteBox">

      <button className="quoteBox__btn" onClick={handleChangeQuote}>QUE LA FUERZA TE ACOMPAÑE</button>

      <article className="quoteBox__phrase">
        <p>{phrase}</p>
      </article>

    </section>
  )
}

export default QuoteBox