import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Success.scss";

const Success = ({ success, setSuccess }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
      navigate("/");
    }, 15000);
    return () => clearTimeout(timer);
  }, [alert]);

  if (success) {
    return (
      <div className="modal-dialog animate__animated animate__backInDown head_success">
        <div className="modal-content">
          <div className="modal-header">
            <h1>Congratulations !!</h1>
          </div>
          <div className="modal-body">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_ky24lkyk.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "300px", margin: "auto" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>

      //   <div className="">
      //

      //   </div>
    );
  } else return null;
};

export default Success;