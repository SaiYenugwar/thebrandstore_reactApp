


function Footer() {
    return (
<>

<footer className="text-center text-lg-start bg-body-tertiary text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <span className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </span>
      <span className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </span>
      <span className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </span>
      <span className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </span>
      <span className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </span>
      <span className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </span>
    </div> */}
  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <img src="https://firebasestorage.googleapis.com/v0/b/album-b07e6.appspot.com/o/profile%2FBrand.png?alt=media&token=6200f74a-fb30-4642-9508-fd1ef60c99f3" width={100} alt="logo"/>The Brand Store
          </h6>
          {/* <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p> */}
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
          Help
          </h6>
          <p>
            <a href="#!" className="text-reset">Track Your Order</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Return</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Cancellation</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Payment</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
          Shop by
          </h6>
          <p>
            <a href="Mens" className="text-reset">Men</a>
          </p>
          <p>
            <a href="Women" className="text-reset">Women</a>
          </p>
          <p>
            <a href="Mobiles" className="text-reset">Mobile</a>
          </p>
          <p>
            <a href="AC" className="text-reset">AC</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4">
    © 2024 Copyright:
    <a className="text-reset fw-bold" href="/">TheBrandStore.com</a>
  </div>
</footer>

</>
    );
  }
  
  export default Footer;