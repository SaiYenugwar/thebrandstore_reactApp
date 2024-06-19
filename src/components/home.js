import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { Backdrop, Badge, Button, CircularProgress, Dialog, DialogContent } from "@mui/material";
import "./login.css";
import toast, { Toaster } from "react-hot-toast";
import api from "../API/api";
import { useCookies } from "react-cookie";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useCart } from "../Context/CartContext";

function Home() {
  const { cartCount  } = useCart();
  const [cookies, setCookie, removeCookie] = useCookies(['username', 'email', 'token']);
  const [isLoggedIn] = useState(!!cookies.username);
  const [username] = useState(cookies.username);
  const [open, setOpen] = React.useState(false);
  const [loader, setloader] = React.useState(false);
  const [loginSection, setloginSection] = React.useState(true);
  const [LoginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [SignUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: ""
  });



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setloginSection(true);
    setLoginData({
      email: "",
      password: ""
    });
    setSignUpData({
      username: "",
      email: "",
      password: ""
    });
  };



  const login = async () => {
    if (!LoginData.email || !LoginData.password) {
      toast.error('Please Enter Your Credentials');
    } else {
      setloader(true);
      try {
        const response = await api.post('/user/login', LoginData);
        if (response.data.success) {
          console.log(response.data);
          setCookie('username', response.data.username);
          setCookie('email', response.data.email);
          setCookie('token', response.data.token);
          localStorage.setItem('token', response.data.token)
          toast.success(response.data.message);
          setloader(false);
          handleClose();
          window.location.reload();
        } else {
          toast.error(response.data.message);
          setloader(false);
        }
      } catch (error) {
        console.error('Error fetching data', error);
        toast.error('Login failed. Please try again.');
        setloader(false);
      }
    }
  };

  const SignUp = async() => {
    let emailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;


    if (!SignUpData.email.match(emailformat)) {
      toast.error("Please enter valid email");
      return;
    }

    if (!SignUpData.username || !SignUpData.email || !SignUpData.password) {
      toast.error('Please enter all details');
    } else {
      setloader(true);
      try {
        const response = await api.post('/user/register', SignUpData);
        if (response.data.success) {
          toast.success(response.data.message);
          setloader(false);
          setloginSection(true);
        } else {
          toast.error(response.data.message);
          setloader(false);
        }
      } catch (error) {
        console.error('Error fetching data', error);
        toast.error('Login failed. Please try again.');
        setloader(false);
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSignUp = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const accept = () => {
    removeCookie('username', { path: '/' });
    removeCookie('email', { path: '/' });
    removeCookie('token', { path: '/' });
    localStorage.clear();
    toast.success("Logout Successfully");
    window.location.reload();
  }

  const logout = () => {

    confirmDialog({
      message: 'Are you sure you want to Logout?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      defaultFocus: 'accept',
      accept
  });


  }

  

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

    <ConfirmDialog />

      <nav className="navbar navbar-expand-lg bg-primary-subtle fixed-top">
        <div className="container-fluid">
          <h1 className="navbar-brand text-white"><Link to="/" className="text-decoration-none"><span className="navbar-brand mb-0 h1 text-primary">T<span className="text-danger">H</span>E BRA<span className="text-danger">N</span>D ST<span
            className="text-danger">O</span>RE</span></Link><i className="bi bi-bag"></i></h1>

          <form className="d-flex">
    {isLoggedIn && (
      <>
            <li className="nav-item dropdown" style={{ listStyle: 'none' }}>
              <span className="btn btn-light border dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person"></i><span className="text-primary"> {username.split(" ")[0]} </span>
              </span>

              <div>
                <ul className="dropdown-menu">
                  <li><span className="dropdown-item" ><i className="bi bi-person-circle"></i> My Profile</span></li>
                  <li><span className="dropdown-item" ><i className="bi bi-box-seam"></i> Order</span></li>
                  <li><span className="dropdown-item" ><i className="bi bi-heart"></i> Wishlist</span></li>
                  <li><span className="dropdown-item" ><i className="bi bi-tag-fill"></i> Coupons</span></li>
                  <li><span className="dropdown-item" ><i className="bi bi-credit-card-fill"></i> Wallet</span></li>
                  <li><span className="dropdown-item" onClick={logout} ><i className="bi bi-box-arrow-right"></i> Logout</span></li>
                </ul>
              </div>
            </li>
            &nbsp;
               <Link to="/Cart" className="btn btn-light border">
               <Badge badgeContent={cartCount} color="primary"><i className="bi bi-cart2">
                </i></Badge> Cart</Link>
               </>
)}
               {!isLoggedIn && (
            <Button variant="contained" className="bi bi-person-circle" onClick={handleClickOpen}>&nbsp;Login</Button>
          )}
          </form>
        </div>
      </nav>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>

          <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loader}>
            <CircularProgress color="inherit" />
          </Backdrop>

          {/* Login Section */}

          {loginSection && (
            <div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-close" onClick={handleClose}></button>
              </div>
              <div className="form-container">
                <p className="title">Welcome back</p>
                <div className="form">
                  <input type="email" className="input" onChange={handleChange} name="email" value={LoginData.email} placeholder="Email" />
                  <input type="password" className="input" onChange={handleChange} name="password" value={LoginData.password} placeholder="Password" />
                  <p className="page-link">
                    <span className="page-link-label">Forgot Password?</span>
                  </p>

                  <button className="form-btn" onClick={login}>Log In</button>


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
                  <input type="username" name="username" onChange={handleSignUp} className="input" value={SignUpData.username} placeholder="Username" />
                  <input type="email" className="input" onChange={handleSignUp} name="email" value={SignUpData.email} placeholder="Email" />
                  <input type="password" className="input" onChange={handleSignUp} name="password" value={SignUpData.password} placeholder="Password" />
                  <button className="form-btn" onClick={SignUp}>Create</button>
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


