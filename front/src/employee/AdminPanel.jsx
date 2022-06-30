import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import Employee from "./pages/Employee";
import EmployeeCreate from "./pages/EmployeeCreate";
import EmployeeUpdate from "./pages/EmployeeUpdate";
import Role from "./pages/Role";

const AdminPanel = () => {
  if (!localStorage.getItem("employeeInfo")) {
    return <Redirect to="/admin/login" />;
  }

  return (
    <section className="main-admin">
      <div className="container-fluid p-0">
        <div className="row w-100">
          <div className="col-md-3">
            <div className="leftside bg-dark min-vh-100">
              <h1 className="text-white p-3">Admin Panel</h1>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/role">
                    Role
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/employee">
                    Employee
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin/tests">
                    <i className="bi bi-question-circle-fill"></i> Testlar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin/topshiriq">
                    <i className="bi bi-question-circle-fill"></i> Topshiriqlar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin/adabiyot">
                    <i className="bi bi-question-circle-fill"></i> Adabiyot
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin/video">
                    <i className="bi bi-question-circle-fill"></i> Video
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin/files">
                    <i className="bi bi-file-earmark-code-fill"></i> Fayllar
                    qo'shish
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin/answers">
                    <i className="bi bi-body-text"></i> Javoblar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin/settings">
                    <i className="bi bi-sliders2"></i> Sozlama
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="container">
              <Switch>
                <Route exact path="/admin/employee" component={Employee} />
                <Route exact path="/admin/role" component={Role} />
                <Route
                  exact
                  path="/admin/employee/profile/:id"
                  component={EmployeeUpdate}
                />
                <Route
                  exact
                  path="/admin/employee/create"
                  component={EmployeeCreate}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
