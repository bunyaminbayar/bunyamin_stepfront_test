import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserLoginGlobal } from '../../App';
import axios from 'axios';
import './contentItem.css'

export default function Contents() {

  const { GToken } = useContext(UserLoginGlobal);
  const [content, setContent] = useState([]);

  const url = '/api/TestContent/content';
  //const token = GToken;

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${GToken}`,
        },
      })
      .then(res => {
        const gamesData = res;
        setContent(gamesData.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [GToken]);

  return (
    <div>
      {
        <div className='contentItem'>
          <h5>{content.Title}</h5>
          <p>{content.Content}</p>
        </div>
      }
    </div>
  );
}
