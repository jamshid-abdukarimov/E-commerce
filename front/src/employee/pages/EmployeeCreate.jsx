import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { axiosEmployee } from "../../api/api";

const EmployeeCreate = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [navigate, setNavigate] = useState(false);
  const dispatch = useDispatch();
  const getRoles = async () => {
    const response = await axiosEmployee.get(`/role?limit=100&page=1`);
    dispatch({ type: "ADD_ROLES", data: response.data.data.data });
  };

  useEffect(() => {
    getRoles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const roles = useSelector((state) => state.admin.roles);
  const [selectValueId, setSelectId] = useState(null);

  const createNewEmployee = async (e) => {
    e.preventDefault();
    if (!fullName || !password) {
      setErrMsg(true);
      setTimeout(() => setErrMsg(false), 4000);
      return;
    }
    await axiosEmployee
      .post("/create", {
        fullName,
        password,
        roleId: !selectValueId ? roles[0]._id : selectValueId,
      })
      .then(() => setNavigate(true));
  };

  if (navigate) {
    return <Redirect to="/admin/employee" />;
  }
  return (
    <div>
      <h2 className="mt-3 mb-5">Employees Create</h2>
      <div className="content">
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            Please fill in all fields!
          </div>
        )}
        <form>
          <input
            type="text"
            className="form-control my-3"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="password"
            className="form-control my-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select onChange={(e) => setSelectId(e.target.value)}>
            {roles.map((role) => (
              <option key={role._id} value={role._id}>
                {role.name}
              </option>
            ))}
          </select>
          <div className="d-flex justify-content-end">
            <button onClick={createNewEmployee} className="btn btn-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeCreate;
