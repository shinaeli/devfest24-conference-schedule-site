import React, { useState } from 'react'
import { PaystackButton } from 'react-paystack';
import { useNavigate } from 'react-router-dom';



const Ticket = () => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  const config = {
    reference: (new Date()).getTime().toString(),
    email: details.email,
    amount: 28557280, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
  };

  const componentProps = {
    ...config,
    text: "Pay Now".toUpperCase(),
    onSuccess: () => {
      alert("Registered Successfully. Your ticket has been sent to your mail.");
      navigate('/');
    },
    onClose: () => alert("Wait! Don't leave :("),
  };

  const handlePayment = e => {
    e.preventDefault();

    setDetails({...details, fullName: "", phone: "", email: ""});
  }
  

  return (
    <div className="container">
        <h1 className="dosis-bold payment-header">DevFest24 TICKET PAYMENT</h1>
        <form className="payment">
            <div className="full-name">
                <label className='dosis-semibold'>Full Name:</label>
                <input type="text" value={details["fullName"]} onChange={e => setDetails({...details, fullName: e.target.value})} name="full-name" id="full-name" placeholder="e.g. Jane Appleseed" required />
                {/* {showErrors["fullName"] && <p className="show-error">Wrong format. Alphabets only.</p>} */}
            </div>
            <div className="phone">
                <label className='dosis-semibold'>Phone:</label>
                <input type="text" value={details["phone"]} onChange={e => setDetails({...details, phone: e.target.value})} name="phone" id="phone" placeholder="e.g. 08064192280" required />
                {/* {showErrors["phone"] && <p className="show-error">Wrong format. Numbers only.</p>} */}
            </div>
            <div className="email">
                <label className='dosis-semibold'>Email:</label>
                <input type="email" value={details["email"]} onChange={e => setDetails({...details, email: e.target.value})} name="email" id="email" placeholder="e.g. jane_appleseed@gmail.com" required />
                {/* {showErrors["email"] && <p className="show-error">Wrong format. Alphabets and symbols only.</p>} */}
            </div>
        </form>
        {/* <button className="form-button" type="submit" onClick={handlePayment}>
          <PaystackButton className="paystack-button" {...componentProps} />
        </button> */}
        <PaystackButton type="submit" onClick={handlePayment} className="paystack-button" {...componentProps} />
    </div>
  )
}

export default Ticket