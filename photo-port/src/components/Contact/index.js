import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

function ContactForm(){

    const [formState, setFormState]=useState({name:'', email:'',message:''})
    const {name, email, message}= formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e){
        //adding validation before the syncing of the form data
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
          }  //adding an else statement to target the message and the name as well so we cannot 
            //submit without these fields being filled
          else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
        //the e.target.name refers to name attribute of the form element. The [] is used around it
        //to allow to create dynamic property names
        //wrapping in in a conditional
        if(!errorMessage){
        setFormState({...formState, [e.target.name]:e.target.value})
        }
        
        console.log('errorMessage', errorMessage);
        
    }
    console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

return(
    <section>
        <h1>Contact me</h1>
    <form id="contactfrom" onSubmit={handleSubmit}>
    <div>
        <label htmlFor="name">Name:</label>
        <input type="text"  defaultValue={name} onChange={handleChange} name="name" />
     </div>
    <div>
        <label htmlFor="email">Email address:</label>
        <input type="email" defaultValue={email} name="email" onChange={handleChange} />
    </div>
    <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"  />
    </div>  
    <button type="submit">Submit</button>
        </form>
    </section>
)
}

export default ContactForm;