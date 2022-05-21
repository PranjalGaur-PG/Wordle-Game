import axios from "axios";

export const createSession = async (name) => {
  try {
    const res = await axios.post("/session", { name });

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const addAttempt = async (response, session) => {
  try {
    const res = await axios.post("/session/add_attempt", { response, session });
    console.log(res.data, "abc");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};