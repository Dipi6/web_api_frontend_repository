import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './login';
import Register from './signup';
import About from './about';
import Contact from './contact';
import Review from './review';
import { BrowserRouter } from 'react-router-dom';
import BookAppointment from './BookAppointment';
import Requests from './Requests';
const Middle = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} ></Route>
                <Route path='/register' element={<Register />} ></Route>
                <Route path='/login' element={<Login />} ></Route>
                <Route path='/about' element={<About />} ></Route>
                <Route path='/contact' element={<Contact />} ></Route>
                <Route path='/review' element={<Review />} ></Route>
                <Route path='/book-service/:service' element={<BookAppointment></BookAppointment>}></Route>
                <Route path='/requests/:userid' element={<Requests />}></Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Middle;