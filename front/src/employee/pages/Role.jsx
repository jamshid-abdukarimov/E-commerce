import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { axiosEmployee } from "../../api/api";

const Role = () => {
  const [successMess, setSuccessMess] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [pagesCount, setPagesCount] = useState(null);
  const pages = [];
  const dispatch = useDispatch();
  const getRoles = async () => {
    const response = await axiosEmployee.get(
      `/role?limit=${limit}&page=${page}`
    );
    setPagesCount(Math.ceil(response.data.data.total / limit));
    dispatch({ type: "ADD_ROLES", data: response.data.data.data });
  };
  const roles = useSelector((state) => state.admin.roles);

  useEffect(() => {
    getRoles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  if (pagesCount) {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }

  const deleteRole = async (_id) => {
    await axiosEmployee
      .delete(`/role/${_id}`)
      .then(() => {
        getRoles();
        setSuccessMess(true);
      })
      .catch((err) => {
        if (err) {
          setErrMsg(true);
        }
      })
      .finally(() => {
        setTimeout(() => {
          setSuccessMess(false);
          setErrMsg(false);
        }, 4000);
        console.clear();
      });
  };

  const EditRoleName = async (name, _id) => {
    const res = prompt("Edit Name", name);
    if (!res || res === name || res.length === 0) {
      return;
    }
    const data = {
      _id,
      name: res,
      employee: true,
      employeeCreate: true,
      employeeUpdate: true,
      employeeDelete: true,
      role: true,
      roleCreate: true,
      roleDelete: true,
      roleUpdate: true,
      book: true,
      bookCreate: true,
      bookDelete: true,
      bookUpdate: true,
      author: true,
      authorCreate: true,
      authorDelete: true,
      authorUpdate: true,
      genre: true,
      genreCreate: true,
      genreDelete: true,
      genreUpdate: true,
      user: true,
      userCreate: true,
      userDelete: true,
      userUpdate: true,
      course: true,
      courseCreate: true,
      courseDelete: true,
      courseUpdate: true,
    };
    await axiosEmployee.put("/role", data);
    getRoles();
  };

  const CreateNewRole = async () => {
    const name = prompt("Role Name");
    if (!name || name.length === 0) {
      return;
    }

    const data = {
      name,
      employee: true,
      employeeCreate: true,
      employeeUpdate: true,
      employeeDelete: true,
      role: true,
      roleCreate: true,
      roleDelete: true,
      roleUpdate: true,
      book: true,
      bookCreate: true,
      bookDelete: true,
      bookUpdate: true,
      author: true,
      authorCreate: true,
      authorDelete: true,
      authorUpdate: true,
      genre: true,
      genreCreate: true,
      genreDelete: true,
      genreUpdate: true,
      user: true,
      userCreate: true,
      userDelete: true,
      userUpdate: true,
      course: true,
      courseCreate: true,
      courseDelete: true,
      courseUpdate: true,
    };
    await axiosEmployee.post("/role", data);
    getRoles();
  };

  return (
    <div>
      <h2 className="mt-3 mb-5">Role</h2>
      {successMess && (
        <div className="alert alert-success my-3" role="alert">
          Role is successfully deleted!
        </div>
      )}
      {errMsg && (
        <div className="alert alert-danger my-3" role="alert">
          You can't delete this role because of there are appropriate admin for
          this role!
        </div>
      )}
      <div className="d-flex justify-content-end">
        <button onClick={CreateNewRole} className="btn btn-primary mb-3">
          Create new Role
        </button>
      </div>
      <div className="content">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role, index) => (
              <tr key={role._id}>
                <th scope="row">{index + 1}</th>
                <td>{role.name}</td>
                <td>
                  <i
                    onClick={() => EditRoleName(role.name, role._id)}
                    style={{ cursor: "pointer" }}
                    className="text-warning fa-solid fa-pen"
                  />
                </td>
                <td>
                  <i
                    style={{ cursor: "pointer" }}
                    className="text-danger fa-solid fa-trash-can"
                    onClick={() => deleteRole(role._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {pagesCount && pagesCount > 1 && (
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              {pages.map((p) => (
                <li key={p} className="page-item">
                  <span
                    onClick={() => setPage(p)}
                    className={`page-link ${p === page ? "active" : null}`}
                  >
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Role;
