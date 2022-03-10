import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const Footer=()=>{
    return(
        <div className='footer'>
                <hr className='container' />



<MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h6 className="title"> EasyWork</h6>
            <p>
            Get your work done easily with us.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <h6 className="title">Information</h6>
            <ul>
              <li className="list-unstyled">
                <p href="#!">About Us</p>
              </li>
              <li className="list-unstyled">
                <p href="#!">Privacy Policy</p>
              </li>
              <li className="list-unstyled">
                <p href="#!">Terms of Policy</p>
              </li>
              
            </ul>
          </MDBCol>

          <MDBCol md="4">
            <h6 className="title">Need Help?</h6>
            <ul>
              <li className="list-unstyled">
                <p href="#!">Gmail: dipikabogat6@gmail.com</p>
              </li>
              <li className="list-unstyled">
                <p href="#!">Phone: 987483</p>
              </li>
              <li className="list-unstyled">
                <p href="#!">Suppport Time : 24 by 7</p>
              </li>
            
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> easywork.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>

  

</div>



    )

}

export default Footer;