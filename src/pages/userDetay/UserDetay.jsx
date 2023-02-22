import React, { useEffect, useState } from 'react';
import './userDetay.css'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import GetCookie from '../../components/cookie/getCookie';

export default function UserDetay() {

    const location = useLocation();

    console.log(location.pathname.split("/")[2]);

    const [userDetay, setUserDetay] = useState([]);
    const url = '/api/User/User/detail/'+ location.pathname.split("/")[2];

    useEffect(() => {
        axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${GetCookie('UserToken')}`,
          },
        })
          .then(res => {
            const gamesData = res;
            setUserDetay(gamesData.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, [GetCookie('UserToken')]);

  return (
    <div className='userDetayPage'>
        <div className='userDetayCard'>
            <h5>{userDetay.name}</h5>
            <p>{userDetay.age}</p>
            <p>{userDetay.email}</p>
            <hr />
            <Link to={'/usersList'}>
            <div>Back To Users List</div>
            </Link>
        </div>
    </div>
  )
}
