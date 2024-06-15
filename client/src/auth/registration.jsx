import {useEffect, useState} from "react";
import {useRegisterMutation} from "../state/authApiSlice.js";
import {useLoginMutation} from "../state/authApiSlice.js";
import {useNavigate} from "react-router-dom";
import Email from "./Components/EmailInput.jsx";
import Password from "./Components/PasswordInput.jsx";
import Name from "./Components/NameInput.jsx";
import Role from "./Components/RoleInput.jsx";
import Error from "../Components/Feedbacks/Error.jsx";

export default function Registration() {
  const [apiReg] = useRegisterMutation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [apiLogin] = useLoginMutation();

  const [regdata, setRegdata] = useState({
    email: "",
    fullname: "",
    password: "",
    role: "",
  });
  const [jobseeker, setRole] = useState(false);

  const handelChange = target => {
    setRegdata({...regdata, [target.name]: target.value});
  };

  useEffect(() => setRole(regdata.role === "jobseeker"), [regdata]);

  function handelSubmit(e) {
    e.preventDefault();
    apiReg({
      body: regdata,
    })
      .then(resp =>
        resp.data
          ? apiLogin({
              body: {email: regdata.email, password: regdata.password},
            })
          : setError("Registration failed. Try again!")
      )
      .then(resp => {
        console.log(resp);
        !resp.data
          ? setError("Authentication failed. Try again!")
          : jobseeker
          ? navigate("/experiences")
          : navigate(-1);
      });
  }

  return (
    <>
      <form action="" className="form-control bg-slate-400 size-fit p-5 rounded gap-2">
        <Error message={error} closeFunction={() => setError("")} />
        <Name data={regdata} handelChange={handelChange} />
        <Email data={regdata} handelChange={handelChange} />
        <Password data={regdata} handelChange={handelChange} />
        <Role data={regdata} handelChange={handelChange} />
        <button onClick={e => handelSubmit(e)}>Registration</button>
      </form>
      {jobseeker && (
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step step-primary">Register</li>
          <li className="step">Add experiences</li>
        </ul>
      )}
    </>
  );
}
