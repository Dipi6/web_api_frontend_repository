import React from 'react';
import { useState, usEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookAppointment = (props) => {
    const [service, setService] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [paymentType, setPayment] = useState('');
    const [phase, setPhase] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState();

    const serviceType = useParams().service;


    const booking1 = (e) => {

        e.preventDefault();
        var formData = new FormData();
        formData.append("address", address);
        formData.append("description", description);
        // formData.append("image", file)

        axios.post("/booking", { service: serviceType, address: address, description: description, paymentType: paymentType })

            .then(result => {

                console.log(result.data.message)

                if (result.data.message) {
                    if(result.data.type === "error"){
                        console.log("LOL")
                        setMessage({message:result.data.message, type: "danger"})
                    }else{
                        setMessage({message:result.data.message, type: result.data.type})

                    }
                }

            })

            .catch()
    }

    return (
        <div className='mx-auto col-4 my-4'>
            <div className="row">
                <div className="">
                    <h5 className='text-secondary'>Book a {serviceType} Service Right Away</h5>
                    <div class={`alert alert-${message.type}`} role="alert">
                        {message.message}
                    </div>
                    <form onSubmit={booking1}>
                        <div className="form-group">
                            <label>Address</label>
                            <input placeholder='Tell us your location' type="text" required className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>



                        <div className="form-group">
                            <label>Description</label>
                            <textarea rows='6' placeholder='Description your problem in brief...' type="text" className="form-control"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className='form-group mt-2'>
                            <p className='m-0'>How are you going to pay?</p>
                            <select name="payments" id="" onChange={(e) => setPayment(e.target.value)}>
                                <option value="">--select--</option>
                                <option value="Cash">Cash</option>
                                <option value="Bank Transfer">Bank Transfer</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary mt-2" style={{background : "#065157"}}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BookAppointment