import React from 'react'
import NavTop from '../nav-top'
import Navigacija from '../navigacija'
import '../../App.css';
import Objava from '../../components/Objava/Objava';
import { useEffect, useState } from "react";
import axios from "axios";


axios.defaults.withCredentials = true;
const Naslovna = () => {
  const [objave, setObjave] = useState(null);
  const [user, setUser] = useState();
  const [groups, setGroups] = useState([]);
  const otvoreno = "naslovna";

  const sendRequest = async () => {
      const res = await axios.get('http://localhost:5000/api/user', {
          withCredentials: true
      }).catch((err) => console.log(err));
      const data = await res.data;
      return data;
  }
  const sentRequestGetObjave = async () => {
    const res = await axios.get('http://localhost:5000/api/objave', {
          withCredentials: true
      }).catch((err) => console.log(err));
      const data = await res.data;
      return data;
  }

  const refreshToken = async () => {
      const res = await axios
        .get("http://localhost:5000/api/refresh", {
          withCredentials: true,
        })
        .catch((err) => console.log(err));
  
      const data = await res.data;
      return data;
    };


    useEffect(() => {

      
        sendRequest().then((data) => {
          setUser(data.user)
          setGroups(data.user.grupe);
        });
        sentRequestGetObjave().then((data) => {
          setObjave(data)
        })

      let interval = setInterval(() => {
        refreshToken().then((data) => {
          setUser(data.user)
          setGroups(data.user.grupe)
        });
      }, 1000 * 28 * 60 * 60);

      return () => clearInterval(interval);

    }, []);
    
    return (
        <>
        <Navigacija grupe={groups} user={user} otvoreno={otvoreno}/>
        <NavTop user={user} />
        <div className="main">
        {objave?.length > 0 ? (
          objave.map(item => (
            <Objava item={item} key={item._id}/>
          ))) : (
            <div className="karticaZadatka">
            <div className="ikona_ime_kartica">
                  <i className="uil uil-polygon" id="uil">
                    Još nemate objava!
                  </i>
            <p></p>
            </div>
        </div>
          )}
        </div>
        </>
    )
}

export default Naslovna;