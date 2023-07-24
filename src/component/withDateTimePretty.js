import React from 'react';
import moment from 'moment';

const withDateTimePretty = (WrappedComponent) => {
  const DateTimePretty = ({ date, ...rest }) => {
    const formatDateTime = (date) => {
      const currentDate = moment();
      const publishedDate = moment(date);
      const diffInMinutes = currentDate.diff(publishedDate, 'minutes');
      const diffInHours = currentDate.diff(publishedDate, 'hours');
      const diffInDays = currentDate.diff(publishedDate, 'days');

      if (diffInMinutes < 60) {
        return `${diffInMinutes} минут назад`;
      } else if (diffInHours < 24) {
        return `${diffInHours} часов назад`;
      } else {
        return `${diffInDays} дней назад`;
      }
    };

    return <WrappedComponent date={formatDateTime(date)} {...rest} />;
  };

  return DateTimePretty;
};

export default withDateTimePretty;
