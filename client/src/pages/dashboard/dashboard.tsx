import React from 'react';
import { connect } from 'react-redux';

import DashboardItem from '../../components/dashboard-item/dashboard-item';
import Spinner from '../../components/spinner/spinner';

function Dashboard({ dashTabElem, userDetails }) {
  return userDetails === null ? (
    <Spinner />
  ) : (
    <>
      <p>
        Hi {userDetails.user[0].first_name.toUpperCase()}{' '}
        {userDetails.user[0].last_name.toUpperCase()}
      </p>
      <div className="dash-menu">
        {dashTabElem.map(({ id, ...otherSectionProps }) => (
          <DashboardItem key={id} {...otherSectionProps} />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  dashTabElem: state.dashboard.tabs,
  userDetails: state.auth.user,
});

export default connect(mapStateToProps)(Dashboard);
