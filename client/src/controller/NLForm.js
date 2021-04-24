import React from 'react'
import { StandardBtn } from '../style/Components'
import { FormWrap } from '../style/Wrapper'

// TODO There is a bunch of code that is commented out because we might want to impliment the API to handle mailchimp
export default function NLForm() {
  // const [email, setEmail] = useState('')
  // const [subbed, setSubbed] = useState(false)

  // const CapEmail = (e) => {
  //   setEmail(e.target.value)
  // }

  // const handleSubmit = (e) => {
  //   window.preventDefault()
  //   console.log(email)
  //   setSubbed(true)
  // }

  const tempRedirect = () => {
    window.open('https://oldetownarvada.us12.list-manage.com/subscribe/post?u=57938fd7932e003548549bd4c&id=9e1083c257')
    // setSubbed(true)
  }

  return (
    <FormWrap>
      {/* <label>Enter Email Address:</label> */}
      {/* TODO Get API for email list */}
      {/* TODO .env for mailchimp const */}
      <form>
        <h2>Stay In Touch!</h2>
        <div>
          <p>Want to receive our newsletter?</p>
          <StandardBtn onClick={tempRedirect} >Click Here!</StandardBtn>
        </div>
        {/* <input type='email' name='email' /> */}
        {/* {subbed
          ?
          <span className='thanks'>Thank you for subscribing!</span>
          :
          null
        } */}
      </form>
      {/* <form onSubmit={handleSubmit}>
      <input type='email' name='email' onChange={CapEmail} />
      <button onClick={tempRedirect} >Our News Letter</button>
      {subbed
        ?
        <span className='thanks'>Thank you for subscribing!</span>
        :
        null
      }
      </form> */}
    </FormWrap>
  )
}

