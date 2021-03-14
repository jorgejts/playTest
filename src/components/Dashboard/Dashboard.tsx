import React, { useEffect } from 'react';
import { GoogleLogout } from 'react-google-login';

import { DashboardProps } from '../../containers/DashboardContainer';
import Auth from '../Auth/Auth';
import styles from './dashboard.module.scss';
import { removePeople } from '../../redux/actions/dashboard';
import Loading from '../Loading/Loading';
import { clientId } from '../../constants/clientId';
import PersonData from '../PersonData/PersonData';

const Dashboard: React.FC<DashboardProps> = ({
  people,
  fetchPeopleFunc,
  loading,
  token,
  userName,
  removeTokenFunc,
}) => {
  useEffect(() => {
    if (!people) {
      fetchPeopleFunc();
    }
    return function cleanup() {
      removePeople();
    };
  }, [fetchPeopleFunc, people]);

  function loggedOut() {
    console.log('logged out');
    removeTokenFunc();
  }
  return (
    <Auth token={token}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <div className={styles.name}>{userName}</div>

          <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={loggedOut} />
        </div>
        <div className={styles.dataContainer}>
          {loading ? (
            <Loading />
          ) : (
            people && (
              <div>
                <div className={styles.personData}>
                  <PersonData title="name" value={people.name} />
                  <PersonData title="height" value={people.height} />
                  <PersonData title="mass" value={people.mass} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Auth>
  );
};

export default Dashboard;
