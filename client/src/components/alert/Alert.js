import React, { useEffect } from "react";

const Alert = ({ alert, setAlert }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(null);
      console.log("hi");
    }, 5000);
    return () => clearTimeout(timer);
  }, [alert]);

  if (alert) {
    const { message, type } = alert;
    console.log(type);
    return (
      <div
        className={`alert alert-${type} alert-dismissible fade show`}
        role="alert"
      >
        <strong> {message} </strong> 
        <button
          type="button"
          className="close"
          onClick={() => setAlert(null)}
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default Alert;