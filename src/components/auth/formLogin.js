import { useState } from "react";
import "./login.css"

import Home from "./home";


const acounts = [
  { email: 'user1@gmail.com', password: '1234' },
  { email: 'user2@gmail.com', password: '123' },
]

export default function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '', isRemember: false });
  const [isValid, setValid] = useState(false);
  const [isLoggedIn, setLogin] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    form[e.target.name] =   
     
    checkValidForm();
  }

  const handleChangeCheckbox = () => {
    form.isRemember = !form.isRemember;
    setForm({ ...form });
    checkValidForm();
  }

  const checkValidForm = () => {
    const { email, password } = form;
    let index = acounts.findIndex(item => item.email === email && item.password === password);
    setValid(index !== -1);
  }

  const handleSubmit = () => {
    console.log(form);
    if (isValid) {
      setLogin(true)
    } else {
      setMessage('Tài khoản không tồn tại!');
    }
  }

  const handleLogOut = () => {
    if (isValid) {
      alert("Goodbye!");
      setLogin(false)
      if (!form.isRemember) {
        setForm({ email: '', password: '', isRemember: false })
        setMessage('');
      }
    }
  }


  if (isLoggedIn) return (<Home onLogOut={handleLogOut} />);
  return (
    <div className="container d-flex align-items-center text-center">
      <div className="form-signin">
        <form>
          <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          {message}
          <div className="form-floating">
            <input className="form-control email" type="text" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input className="form-control password" type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
            <label>Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" checked={form.isRemember} onChange={handleChangeCheckbox} /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleSubmit} >Sign in</button>
          <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
      </div>
    </div>
  );
}