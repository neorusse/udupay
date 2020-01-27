import React from 'react';
import { withRouter } from 'react-router-dom';
import { ItemContainer } from './dashboard-item.styles';

// interface Props {
//   title: string;
//   iconUrl: string;
//   history: any;
//   linkUrl: string;
//   match: any;
// }

const DashboardItem = ({ title, iconUrl, history, linkUrl, match }) => {
  return (
    <ItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div />
      <div className="content">
        <p className="title">{title.toUpperCase()}</p>
        <img className="dashimg" src={iconUrl} alt="login" />
      </div>
    </ItemContainer>
  );
};

export default withRouter(DashboardItem);
