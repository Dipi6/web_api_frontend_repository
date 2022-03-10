import home2 from './image/home2.jpg';
const About=()=> {
    return(
        <>
        <div className='img'>

        <img src = {home2}/>
        <h4 className='text-center mt-3'>About us</h4>

        </div>

        


        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-5 '>
            <p>Nepal Cleaning Solution is the Government Registered Cleaning & Service Providing Company in Nepal. Now, with a NCS presence and over 300 employees; we are more than capable of carrying out work in any part of the country. We have grown steadily, not by bringing in new clients; but rather by never disappointing our existing ones. We have done this by providing gainful employment through our services and creating a support system for our people to thrive in. Our method of measuring our success is Client Retention; we take much pride in our 95% record of retaining our business partners. Continually exceeding partner expectations is our aim and our work reflects our culture.

The members of the NCS team are dedicated to our customers’ success. With clear and concise communication, we pragmatically apply technology to solve problems and focus on measurable results. We place high value on collaborating and building strong relationships with our clients, reflecting our focus on customer service. Our clients’ challenges and feedback directly impact our evolving design and ongoing development process.</p>
            </div>
        </div>
        
        </>


    )
}

export default About;