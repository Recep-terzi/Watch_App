import React, { useEffect } from "react";
import "./MyList.Module.css";
import Navbar from "../Navbar/Navbar";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { myList } from "../../redux/watchSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import Footer from "../Footer/Footer";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const MyList = () => {
  const user = useSelector((state) => state.watch.user);
  const dispatch = useDispatch();
  const mylist = useSelector((state) => state.watch.myList);
  useEffect(() => {
    const ref = collection(db, "myList");
    const q = query(ref, where("email", "==", user ? user?.email : null));
    const unsub = onSnapshot(q, (snap) => {
      dispatch(
        myList(
          snap.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        )
      );
    });
    return unsub;
  }, [dispatch, user]);

  const handleDelete = (id) => {
    deleteDoc(doc(db, "myList", id));
  };

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="mylist">
          <div className="mylist-title">Listem</div>
          {myList && (
            <motion.div className="mylist-body">
              {mylist.map((list) => (
                <motion.div
                  whileHover={{
                    scale: 1.2,
                  }}
                >
                  <AiOutlineClose onClick={() => handleDelete(list.id)} />
                  <Link to={`/detail/${list.filmdId}`}>
                    <img src={IMG_API + list.poster_path} alt="" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyList;
