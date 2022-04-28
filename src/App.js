import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './actions/counter';
import { addFaq, removeFaq, removeAllFaqs, editOneFaq } from './actions/faq';

function App() {

  const counter = useSelector((state) => {
    return state.counter.counter;
  });
  
  const faqs = useSelector((state) => {
    return state.faqs.faqs;
  });

  const dispatcher = useDispatch();

  const [ faqString, setFaqString ] = useState('')
  const [ editedFaqString, setEditedFaqString ] = useState('')

  const handleIncrement = () => {
    dispatcher(increment());
  }

  const handleChangeFaq = (event) => {
    event.target.name = event.target.value
    let newFaq = event.target.value
    setFaqString(newFaq)
  }

  const handleEditFaq = (event) => {
    event.target.name = event.target.value
    let newFaq = event.target.value
    setEditedFaqString(newFaq)
  }

  const handleSendFaq = (event) => {
    event.preventDefault()
    dispatcher(addFaq(faqString))
    setFaqString('')
  }

  const handleSendEditedFaq = (event, key) => {
    event.preventDefault()
    dispatcher(editOneFaq(editedFaqString, key))
    setEditedFaqString('')
  }

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={() => {dispatcher(decrement(10))}}>-</button>
      <form>
        <h1>Frequently Asked Questions:</h1>
        <h4>Write your question below and see the magic!</h4>
        <input type="text" onChange={handleChangeFaq} />
        <button type="submit" onClick={handleSendFaq}>Send faq</button>
      </form>
        <h1>{faqs.length > 0 ? "Your questions are: " : null}</h1>
        <button onClick={() => { dispatcher((removeAllFaqs())) }}>REMOVE ALL FAQS</button>
        {faqs.map((faq, key) => {
          return(
            <React.Fragment>
              <h2>{faq}</h2>
              <h6>Changed your mind? Remove this faq by pressing the button below!</h6>
              <button onClick={() => { dispatcher(removeFaq(key)) }}>REMOVE FAQ</button>
              <h6>or update it!</h6>
              <form>
                <input type="text" onChange={handleEditFaq} />
                <button type="submit" onClick={(e) => handleSendEditedFaq(e, key)}>Update faq</button>
              </form>
            </React.Fragment>
          )
        })}
    </div>
  );
}

export default App;
