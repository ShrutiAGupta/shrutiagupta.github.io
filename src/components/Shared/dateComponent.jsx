import React from "react";

const DateComponent = ({ startDate, endDate, format }) => {
  // if (endDate && endDate == 'today') {
  //   endDate = new Date();
  // }
  const formatDate = (date) => {
    if (date === 'today') {
      return 'Present'
    }
    const dateObj = new Date(date);
    if (format === 'mmm dd, yyyy') {
      return dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } else if (format === 'mm yy') {
      return `${dateObj.toLocaleString('en-US', { month: 'short' })} '${dateObj.getFullYear().toString().slice(-2)}`;
    }
  };
  
  if (!startDate) {
    return null;
  }
  
  if (startDate && endDate) {
    return <span>{`${formatDate(startDate)} — ${formatDate(endDate)}`}</span>;
  }
  
  return <span>{formatDate(startDate)}</span>;
};

export default DateComponent;