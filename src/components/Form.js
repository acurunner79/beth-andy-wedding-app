import React from 'react'
import Select from 'react-select'
import './form.css'


const Form = (props) => {

   const [formData, setFormdata] = React.useState(props)

   const handleSubmit = (event) => {
      event.preventDefault()
      props.handleSubmit(formData)
      props.history.push("/")
   }

   const handleChange = (event) => {
      setFormdata({...formData, [event.target.name]: event.target.value})
      console.log(formData)
   }

    const count = [
        {label: 1},
        {label: 2},
        {label: 3},
        {label: 4},
        {label: 5},
        {label: 6}
    ]

    const dinner = [
        {label: 'Carnivore'},
        {label: 'Vegetarian'},
        {label: 'Vegan'}
    ]

    return (
        <>
        <div className='form-container'>
            <h3>Please fill out the information below and hit 'Submit'</h3>
            <form onSubmit={handleSubmit}>
                <input className='form-input'
                   type="text"
                   name="first-name"
                   placeholder="First Name"
                   value={formData?.firstname}
                   onChange={handleChange}
                />*
                <br></br>
                <input className='form-input'
                   type="text"
                   name="last-name"
                   placeholder="Last Name"
                   value={formData?.lastname}
                   onChange={handleChange}
                />*
                <br></br>
                <input className='form-input'
                   type="text"
                   name="email"
                   placeholder="Email"
                   value={formData?.email}
                   onChange={handleChange}
                />*
                <br></br>
                   <h3>How many will be attending?</h3>
                <Select className="guest-select"
                   options={count}
                />
                <br></br>
                   <h3>Dietary Restrictions</h3>
                <Select className="diet-select"
                   type="submit"
                   name="diet"
                   options={dinner}
                />
            <button className="styled-button" type="submit"><h3>Submit</h3></button>
            </form>
        </div>
            </>
    )
}

export default Form