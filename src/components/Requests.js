import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import axios from 'axios';

const Requests = () => {
    const userId = useParams().userid

    const [bookings, setBookings] = useState([]);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState();


    useEffect(() => {
        axios.get("/viewbookings/" + userId).then(function (res) {
            console.log(res.data.data)
            setBookings(res.data.data);
        })
    }, [])

    const updateImage = (e, id) => {
        let image = e.target.files[0];
        const data = new FormData();
        data.append('image', image);
        console.log(image);
        axios.put("/service/update-image/" + id, data).then(function (res) {
            console.log(res.data);
        })
    }

    const updateStatus = (id) => {
        axios.put("/service/update-status/" + id, { staus: status })
    }

    const deleteRecord = (id) => {
        axios.delete("/delete-record/" + id).then(function (res) {
            console.log(res.data);
            if (res.data.type === "error") {
                setMessage({ message: res.data.message, type: "danger" });
            } else {
                setMessage({ message: res.data.message, type: res.data.type });
            }
            // window.location.href = "/requests/"+userId;
        })
    }
    return (
        <div>
            <div className='container mx-auto'>
                <div class={`alert alert-${message.type}`} role="alert">
                    {message}
                </div>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Problem Description</th>
                            <th>Requested Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {bookings?.map((val, index) => {
                            return (
                                <tr>
                                    <td>{val.service}</td>
                                    
                                    <td>{val.description}</td>
                                    <td>{val.appointmentDate}</td>
                                    <td>Working</td>
                                    <td><button onClick={deleteRecord.bind(this, val._id)} className='mx-2 btn btn-sm'><i className='fas fa-trash text-danger'></i></button><button className='mx-2 btn btn-sm'><i className='fas fa-chec'></i></button></td>
                                </tr>
                            )

                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Requests;