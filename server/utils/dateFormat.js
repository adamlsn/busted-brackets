const addDateSuffix = date => {
  let dateString = date.toString();

  // get last char of date string
  const lastChar = dateString.charAt(dateString.length - 1);

  if (lastChar === '1' && dateString !== '11') {
    dateString = `${dateString}st`;
  } else if (lastChar === '2' && dateString !== '12') {
    dateString = `${dateString}nd`;
  } else if (lastChar === '3' && dateString !== '13') {
    dateString = `${dateString}rd`;
  } else {
    dateString = `${dateString}th`;
  }

  return dateString;
};

// function to format a timestamp, accepts the timestamp and an `options` object as parameters
module.exports = (
  timestamp,
  { monthLength = 'short', dateSuffix = true } = {}
) => {
  // create month object
  const months = {
    0: monthLength === 'short' ? 'Jan' : 'January',
    1: monthLength === 'short' ? 'Feb' : 'February',
    2: monthLength === 'short' ? 'Mar' : 'March',
    3: monthLength === 'short' ? 'Apr' : 'April',
    4: monthLength === 'short' ? 'May' : 'May',
    5: monthLength === 'short' ? 'Jun' : 'June',
    6: monthLength === 'short' ? 'Jul' : 'July',
    7: monthLength === 'short' ? 'Aug' : 'August',
    8: monthLength === 'short' ? 'Sep' : 'September',
    9: monthLength === 'short' ? 'Oct' : 'October',
    10: monthLength === 'short' ? 'Nov' : 'November',
    11: monthLength === 'short' ? 'Dec' : 'December'
  };

  const dateObject = new Date(timestamp);
  const formattedMonth = months[dateObject.getMonth()];

  const dayNum = dateSuffix
    ? addDateSuffix(dateObject.getDate())
    : dateObject.getDate();

  const year = dateObject.getFullYear();
  let hr =
    dateObject.getHours() > 12
      ? Math.floor(dateObject.getHours() / 2)
      : dateObject.getHours();

  // if hour is 0 (12:00am), change it to 12
  if (hr === 0) {
    hr = 12;
  }

  const min = dateObject.getMinutes();

  // set `am` or `pm`
  const dayHalf = dateObject.getHours() >= 12 ? 'pm' : 'am';

  const formattedTimeStamp = `${formattedMonth} ${dayNum}, ${year} at ${hr}:${min} ${dayHalf}`;

  return formattedTimeStamp;
};
