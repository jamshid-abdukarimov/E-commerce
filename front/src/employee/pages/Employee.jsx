import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { axiosEmployee } from "../../api/api";

const Employee = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [pagesCount, setPagesCount] = useState(null);
  const pages = [];
  const dispatch = useDispatch();
  const getEmployees = async () => {
    const response = await axiosEmployee.get(
      `/paging?page=${page}&limit=${limit}`
    );
    setPagesCount(Math.ceil(response.data.data.total / limit));
    dispatch({ type: "ADD_EMPLOYEES", data: response.data.data.data });
  };
  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (pagesCount) {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }

  const deleteEmployee = async (_id) => {
    await axiosEmployee.delete(`/profile/${_id}`);
    getEmployees();
  };
  const employees = useSelector((state) => state.admin.employees);
  return (
    <div>
      <h2 className="mt-3 mb-5">Employees</h2>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary mb-3">
          <NavLink className="text-white" to="/admin/employee/create">
            Create new Employee
          </NavLink>
        </button>
      </div>
      <div className="content">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0
              ? employees.map((employee, index) => (
                  <tr key={employee._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{employee.fullName}</td>
                    <td>{employee?.role?.name}</td>
                    <td>
                      <NavLink to={`/admin/employee/profile/${employee._id}`}>
                        <i
                          style={{ cursor: "pointer" }}
                          className="text-warning fa-solid fa-pen"
                        />
                      </NavLink>
                    </td>
                    <td>
                      <i
                        style={{ cursor: "pointer" }}
                        className="text-danger fa-solid fa-trash-can"
                        onClick={() => deleteEmployee(employee._id)}
                      />
                    </td>
                  </tr>
                ))
              : null}
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

export default Employee;
