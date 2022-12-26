import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import register from "../../assets/register.jpg";
import Loading from "../Loading/Loading";
import "./Register.Module.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [rePassword, setRePassword] = useState();
  const [hidden, setHidden] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const [loading, setLoading] = useState(true);
  const [agreement, setAgreement] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: username,
        });
        navigate("/");
      })
      .catch((err) => setError(err.message, error));

    setEmail("");
    setUsername("");
    setPassword("");
    setRePassword("");
  };

  const hiddenSetting = () => {
    setHidden(!hidden);
  };
  const hiddenSetting2 = () => {
    setHidden2(!hidden2);
  };
  const agreementSetting = () => {
    setAgreement(!agreement);
  };
  useEffect(() => {
    setTimeout(() => {
      document.body.style.backgroundImage = `url(${register})`;
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
        <div className="register-container">
          <div className="register-logo">PysonFlix</div>
          <div className="register-title">Kullanıcı Kayıt</div>
          <form onSubmit={handleSubmit} className="register-form">
            <div className="register-username">
              <label>Kullanıcı Adı</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Kullanıcı Adı"
                required
              />
            </div>
            <div className="register-email">
              <label>Email Adresi</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Adresi"
                required
              />
            </div>
            <div
              className={`register-password ${
                password !== rePassword ? "not-equal" : ""
              }`}
            >
              <label>Parola</label>
              <input
                type={hidden ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Parola"
                required
              />
              {hidden ? (
                <AiFillEye onClick={hiddenSetting} />
              ) : (
                <AiFillEyeInvisible onClick={hiddenSetting} />
              )}
            </div>
            <div
              className={`re-register-password ${
                password !== rePassword ? "not-equal" : ""
              }`}
            >
              <label>Parola Tekrar</label>
              <input
                type={hidden2 ? "password" : "text"}
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                placeholder="Parola Tekrar"
                required
              />
              {hidden2 ? (
                <AiFillEye onClick={hiddenSetting2} />
              ) : (
                <AiFillEyeInvisible onClick={hiddenSetting2} />
              )}
            </div>
            <div className="agreement">
              <input
                type="checkbox"
                name="select"
                id="select"
                onClick={agreementSetting}
              />
              <label htmlFor="select">
                Kullancı sözleşmelerini okudum onaylıyorum.
              </label>
            </div>
            <div className="form-button-group">
              <button
                className="register-button"
                type="submit"
                disabled={!agreement}
              >
                Kayıt ol
              </button>
              <Link to="/">İptal</Link>
            </div>
          </form>
          <div className="register-info">
            Hesabınız var mı? Giriş yapmak için{" "}
            <Link to="/login">Tıklayınız</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
