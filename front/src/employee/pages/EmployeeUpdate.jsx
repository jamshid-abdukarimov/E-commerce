import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { axiosEmployee } from "../../api/api";

const EmployeeUpdate = () => {
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState(false);
  const [fullName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [selectValueId, setSelectId] = useState(null);
  let { id } = useParams();

  const getEmployeeById = async (id) => {
    await axiosEmployee.get(`/role?limit=100&page=1`).then((data) => {
      dispatch({ type: "ADD_ROLES", data: data.data.data.data });
    });
    await axiosEmployee
      .get(`/profile/${id}`)
      .then((data) => {
        setSelectId(data.data.data.role._id);
        setName(data.data.data.fullName);
      })
      .catch(() => alert("No such id user was found!"));
    // .finally(() => console.clear());
  };
  const roles = useSelector((state) => state.admin.roles);

  useEffect(() => {
    getEmployeeById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateEmployee = async (e) => {
    e.preventDefault();
    if (!selectValueId || !fullName || !password) {
      setErrMsg(true);
      setTimeout(() => {
        setErrMsg(false);
      }, 4000);
      return;
    }

    console.log(selectValueId, fullName, password);
    await axiosEmployee.put("/profile", {
      fullName,
      password,
      roleId: selectValueId,
    });
  };

  return (
    <div>
      <h2 className="mt-3 mb-5">Employees Update</h2>
      <div className="content">
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            Please fill in all fields!
          </div>
        )}
        <form>
          <input
            value={fullName}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control my-3"
            placeholder="Full Name"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control my-3"
            placeholder="Password"
          />
          {selectValueId && (
            <select
              defaultValue={selectValueId}
              onChange={(e) => setSelectId(e.target.value)}
            >
              {selectValueId &&
                roles.map((role) => (
                  <option key={role._id} value={role._id}>
                    {role.name}
                  </option>
                ))}
            </select>
          )}
          <div className="d-flex justify-content-end">
            <button onClick={updateEmployee} className="btn btn-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeUpdate;
