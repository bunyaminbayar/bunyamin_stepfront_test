import React, { useEffect, useState } from 'react';
import './users.css';
import GetCookie from '../../components/cookie/getCookie';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function UsersList() {

    const [users, setUsers] = useState([]);
    const url = '/api/User/User/list';

    useEffect(() => {
        axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${GetCookie('UserToken')}`,
          },
        })
          .then(res => {
            const gamesData = res;
            setUsers(gamesData.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, [GetCookie('UserToken')]);

  return (
    <div className='usersPage'>
        <div className='usersCards'>
            <ul className='usersList'>
                {users.map(item => (
                    <li key={item.id}>
                        <Link to={`/userDetay/${item.id}`}>
                        {item.name}
                        </Link>
                    </li>
                ))}  
            </ul>
        </div>
    </div>
  )
}
