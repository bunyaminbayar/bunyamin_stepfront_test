import React, { useEffect, useContext } from 'react';
import { UserMessageText } from '../../App';
import axios from 'axios';

export default function UserMessage() {
  const { setUserMessage, GToken } = useContext(UserMessageText);
  // setUserMessage

  const url = '/api/User/Admins';

  useEffect(() => {
    if (GToken === '') {
      console.log('you are not login');
    } else {
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${GToken}`,
          },
        })
        .then(response => {
          console.log(response.data);
          setUserMessage(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  });

  return <div></div>;
}
