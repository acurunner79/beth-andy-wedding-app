import React from 'react'
import Select from 'react-select'
import './form.css'


const Form = () => {

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
            <form >
                <input className='form-input'
                   type="text"
                   name="name"
                   placeholder="First Name"
                />*
                <br></br>
                <input className='form-input'
                   type="text"
                   name="name"
                   placeholder="Last Name"
                />*
                <br></br>
                <input className='form-input'
                   type="text"
                   name="email"
                   placeholder="Email"
                />*
                <br></br>
                   <h3>How many will be attending?</h3>
                <Select className="guest-select"
                   options={count}
                />
                <br></br>
                   <h3>Dietary Restrictions</h3>
                <Select className="diet-select"
                   options={dinner}
                />
            </form>
        </div>
            <button className="styled-button"><h3>Submit</h3></button>
            </>
    )
}

export default Form