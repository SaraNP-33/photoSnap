import React, {useState} from 'react';


function ContactForm(){

    const [formState, setFormState]=useState({name:'', email:'',message:''})
    const {name, email, message}= formState;

    function handleChange(e){
        //the e.target.name refers to name attribute of the form element. The [] is used around it
        //to allow to create dynamic property names
        setFormState({...formState, [e.target.name]:e.target.value})
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