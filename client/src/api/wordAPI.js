import axios from "axios";

export const createSession = async (name, setAlert) => {
  try {
    const res = await axios.post("/session", { name });

    return res.data;
  } catch (err) {
    console.log(err.response.data);
    setAlert({ message: err.response.data.error, type: "danger" });
  }
};

export const addAttempt = async (response, session, setAlert) => {
  try {
    const res = await axios.post("/session/add_attempt", { response, session });
    console.log(res.data, "abc");
    return res.data;
  } catch (err) {
    console.log(err.response.data);
    setAlert({ message: err.response.data.error, type: "danger" });
  }
};

export const giveup = async (session, setAlert) => {
  try {
    const res = await axios.get(`/session/giveup/${session}`);

    return res.data.word;
  } catch (err) {
    console.log(err.response.data);
    setAlert({ message: err.response.data.error, type: "danger" });
  }
};