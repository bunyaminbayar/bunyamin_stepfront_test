import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './topbar.css';
import { UserLoginGlobal } from '../../App';
import { useContext } from 'react';

// get cookie
import GetCookie from '../cookie/getCookie';
import RemoveCookie from '../cookie/removeCookie';

export default function TopBar() {
  const history = useHistory();
  const { gUserStatus, setGgUserStatu } = useContext(UserLoginGlobal);

  // if user not login control in cookie and navigate to login page
  if (
    GetCookie('UserToken') === '' ||
    GetCookie('UserToken') === null ||
    GetCookie('UserToken') === undefined
  ) {
    history.push('/login');
  }

  const logout = () => {
    RemoveCookie('UserToken');
    history.push('/login');
    setGgUserStatu(false);
  };

  return (
    <div className='top w-100'>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            {gUserStatus ? (
              <>
                <Link to={'/'}>Home Page </Link>
                <Link to={'/usersList'}> | Users List</Link>
              </>
            ) : null}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        <Link to={'/login'}>Login </Link>
        {gUserStatus ? (
          <>
            <div onClick={logout}> | Log out</div>
          </>
        ) : null}
      </div>
    </div>
  );
}
