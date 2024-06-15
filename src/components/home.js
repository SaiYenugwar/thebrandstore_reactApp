import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dialog, DialogContent } from "@mui/material";
import "./login.css";
import toast, { Toaster } from "react-hot-toast";

function Home() {

  const [username] = useState("Sai");
  const [open, setOpen] = React.useState(false);
  const [loginSection, setloginSection] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setloginSection(true);
    // console.log(value);
  };

const login = () => {
  toast.error('Please Enter Your Credential');
}

  return (
    <>
<Toaster
  position="top-center"
  reverseOrder={false}
/>
      <nav className="navbar navbar-expand-lg bg-primary-subtle fixed-top">
        <div className="container-fluid">
          <h1 className="navbar-brand text-white"><Link to="/" className="text-decoration-none"><span className="navbar-brand mb-0 h1 text-primary">T<span className="text-danger">H</span>E BRA<span className="text-danger">N</span>D ST<span
            className="text-danger">O</span>RE</span></Link><i className="bi bi-bag"></i></h1>

          <form className="d-flex">

            <li className="nav-item dropdown" style={{ listStyle: 'none' }}>
              <span className="btn btn-light border dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person"></i><span className="text-primary"> {username}</span>
              </span>

              <div>
                <ul className="dropdown-menu">
                  <li><span className="dropdown-item" ><i className="bi bi-person-circle"></i> My Profile</span></li>
                  <li><span className="dropdown-item" ><i className="bi bi-box-seam"></i> Order</span></li>
                  <li><span className="dropdown-item" ><i className="bi bi-heart"></i> Wishlist</span></li>
                  <li><span className="dropdown-item" ><i className="bi bi-tag-fill"></i> Coupons</span></li>
                  <li><span className="dropdown-item" ><i className="bi bi-credit-card-fill"></i> Wallet</span></li>
                  <li><span className="dropdown-item" ><i className="bi bi-box-arrow-right"></i> Logout</span></li>
                </ul>
              </div>
            </li>

            &nbsp;
            {/* //   <a className="btn btn-light border" (click)="navigate('Cart')">[{{(cart==='')?'0':cart}}]<i className="bi bi-cart2"></i> Cart</a>&nbsp; */}

            {/* <button  className="btn btn-light border" onClick={handleClickOpen}><i className="bi bi-person-circle"></i> Login</button> */}
            <Button variant="contained" className="bi bi-person-circle" onClick={handleClickOpen}> &nbsp; Login</Button>
            &nbsp;
          </form>
        </div>
      </nav>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>

          {/* Login Section */}

          {loginSection && (
            <div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-close" onClick={handleClose}></button>
              </div>
              <div className="form-container">
                <p className="title">Welcome back</p>
                <div className="form">
                  <input type="email" className="input" placeholder="Email" />
                  <input type="password" className="input" placeholder="Password" />
                  <p className="page-link">
                    <span className="page-link-label">Forgot Password?</span>
                  </p>
                  <button className="form-btn" onClick={login}>Log in</button>
                </div>
                <p className="sign-up-label">
                  Don't have an account?
                  <span className="sign-up-link" onClick={() => setloginSection(false)}>Sign up</span>
                </p>
              </div>
            </div>
          )}

          {/* Sign Up Section */}
          {!loginSection && (
            <div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-close" onClick={handleClose}></button>
              </div>
              <div className="form-container">
                <p className="title">Sign Up</p>
                <div className="form">
                  <input type="email" className="input" placeholder="Username" />
                  <input type="email" className="input" placeholder="Email" />
                  <input type="password" className="input" placeholder="Password" />
                  <button className="form-btn">Create</button>
                </div>
                <p className="sign-up-label">
                  Already have an account?
                  <span className="sign-up-link" onClick={() => setloginSection(true)}>Log in</span>
                </p>
              </div>
            </div>
          )}

        </DialogContent>
      </Dialog>


    </>

  );
}

export default Home;


