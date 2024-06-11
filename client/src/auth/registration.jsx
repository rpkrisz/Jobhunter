import {useState} from "react";
import {useRegisterMutation} from "../state/authApiSlice.js";
import {useNavigate} from "react-router-dom";
import Email from "./Components/EmailInput.jsx";
import Password from "./Components/PasswordInput.jsx";
import Name from "./Components/NameInput.jsx";
import Role from "./Components/RoleInput.jsx";
import Error from "../Components/Error.jsx";

export default function Registration() {
  const [apiReg] = useRegisterMutation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [regdata, setRegdata] = useState({
    email: "",
    fullname: "",
    password: "",
    role: "",
  });

  const handelChange = target => {
    setRegdata({...regdata, [target.name]: target.value});
  };
  function handelSubmit(e) {
    e.preventDefault();
    console.log(regdata);
    apiReg({
      body: regdata,
    }).then(resp => {
      resp.data ? navigate("/login") : setError("Registration failed. Try again!");
    });
  }

  return (
    <form action="" className="form-control bg-slate-400 size-fit p-5 rounded gap-2 ">
      <Error message={error} closeFunction={() => setError("")} />
      <Name data={regdata} handelChange={handelChange} />
      <Email data={regdata} handelChange={handelChange} />
      <Password data={regdata} handelChange={handelChange} />
      <Role data={regdata} handelChange={handelChange} />
      <button onClick={e => handelSubmit(e)}>Registration</button>
    </form>
  );
}
