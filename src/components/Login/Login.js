import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.Module.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import login from "../../assets/login.jpg";
import Loading from "../Loading/Loading";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("deneme");
  };

  const hiddenSetting = () => {
    setHidden(!hidden);
  };

  useEffect(() => {
    setTimeout(() => {
      document.body.style.backgroundImage = `url(${login})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      document.body.style.height = "100vh";
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className="login-container">
          <div className="login-logo">PysonFlix</div>
          <div className="login-title">Kullanıcı Giriş</div>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-email">
              <label>Email Adresi</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
            </div>
            <div className="login-password">
              <label>Parola</label>
              <input
                type={hidden ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {hidden ? (
                <AiFillEye onClick={hiddenSetting} />
              ) : (
                <AiFillEyeInvisible onClick={hiddenSetting} />
              )}
            </div>
            <div className="form-button-group">
              <button className="login-button" type="submit">
                Giriş Yap
              </button>
              <Link to="/">İptal</Link>
            </div>
          </form>
          <div className="login-info">
            Hesabınız yok mu? Kayıt olmak için{" "}
            <Link to="/register">Tıklayınız</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
