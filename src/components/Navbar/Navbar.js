import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/watchSlice";
import "./Navbar.Module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { GiHamburgerMenu, GiFilmProjector } from "react-icons/gi";
import { GrClose, GrLogout } from "react-icons/gr";
import { ImList, ImFilm } from "react-icons/im";
const Navbar = () => {
  const user = useSelector((state) => state.watch.user);
  const dispatch = useDispatch();
  const hamburgerOpen = useRef(null);
  const hamburgerClose = useRef(null);
  const mobileNav = useRef(null);
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("başarıyla çıkış yapıldı");
        dispatch(logout());
        // alertify.success("Başarıyla çıkış yapıldı!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    const openHamburger = hamburgerOpen.current;
    openHamburger.addEventListener("click", () => {
      const navMobile = mobileNav.current;
      navMobile.classList.add("open");
    });
  }, []);
  useEffect(() => {
    const closeHamburger = hamburgerClose.current;
    closeHamburger.addEventListener("click", () => {
      const navMobile = mobileNav.current;
      navMobile.classList.remove("open");
    });
  }, []);
  return (
    <>
      <nav className="desktop-nav">
        <div className="nav-item">
          {user ? (
            <>
              <Link to="/" onClick={logoutUser}>
                Çıkış Yap
              </Link>
              <Link to="/mylist">Listem</Link>
              <Link to="/"></Link>
            </>
          ) : (
            <>
              <Link to="/login">Giriş</Link>
              <Link to="/register">Kayıt ol</Link>
            </>
          )}
        </div>
        <div className="nav-logo">
          <Link to="/">PysonFlix</Link>
          {user && (
            <p className="welcomeUser"> Hoşgeldin, {user.displayName}</p>
          )}
        </div>
        <div className="nav-item">
          <Link to="/alltv">Diziler</Link>
          <Link to="/allfilms">Filmler</Link>
          <Link to="/"></Link>
        </div>
      </nav>
      <div className="mobile-navbar-menu">
        <div className="nav-logo">
          <Link to="/">PysonFlix</Link>
          {user && (
            <p className="welcomeUser"> Hoşgeldin, {user.displayName}</p>
          )}
        </div>
        <div ref={hamburgerOpen}>
          <GiHamburgerMenu className="hamburger-menu-open" />
        </div>
      </div>

      <div className="hamburger-menu-wrapper" ref={mobileNav}>
        <div className="overlay"></div>

        <div className="mobile-nav-wrapper">
          <div ref={hamburgerClose} className="close-icon">
            <GrClose />
          </div>
          <nav className="mobile-nav">
            <div className="nav-item">
              {user ? (
                <>
                  <Link to="/mylist">
                    <ImList />
                    Listem
                  </Link>
                  <Link to="/alltv">
                    <GiFilmProjector />
                    Diziler
                  </Link>
                  <Link to="/allfilms">
                    <ImFilm />
                    Filmler
                  </Link>
                  <Link to="/" onClick={logoutUser} className="logout">
                    <GrLogout />
                    Çıkış Yap
                  </Link>
                  <Link to="/"></Link>
                </>
              ) : (
                <>
                  <Link to="/login">Giriş</Link>
                  <Link to="/register">Kayıt ol</Link>

                  <Link to="/"></Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
