import { Route, Routes } from "../../models/routes.model";
import CreateDoctorPosition from "../../pages/doctor-position/CreateDoctorPosition";
import GetDoctorPosition from "../../pages/doctor-position/GetDoctorPosition";
import CreateDoctor from "../../pages/doctor/CreateDoctor";
import DeleteDoctor from "../../pages/doctor/DeleteDoctor";
import GetDoctor from "../../pages/doctor/GetDoctor";
import UpdateDoctor from "../../pages/doctor/UpdateDoctor";
import Home from "../../pages/home/Home";
import CreatePatient from "../../pages/patient/CreatePatient";
import DeletePatient from "../../pages/patient/DeletePatient";
import GetPatient from "../../pages/patient/GetPatient";
import UpdatePatient from "../../pages/patient/UpdatePatient";
import NotFound from "../components/NotFound";
import CreateEmployee from "../../pages/employee/CreateEmployee";
import DeleteEmployee from "../../pages/employee/DeleteEmployee";
import CreateEmployeePosition from "../../pages/employee-position/CreateEmployeePosition";
import GetEmployeePosition from "../../pages/employee-position/GetEmployeePosition";
import CreatePersonAddress from "../../pages/person-address/CreatePersonAddress";
import DeletePersonAddress from "../../pages/person-address/DeletePersonAddress";
import UpdatePersonAddress from "../../pages/person-address/UpdatePersonAddress";
import GetPersonAddress from "../../pages/person-address/GetPersonAddress";

const router: Route[] = [
  { path: "/", element: <Home /> },
  { path: "/doctor/create", element: <CreateDoctor /> },
  { path: "/doctor/get", element: <GetDoctor /> },
  { path: "/doctor/update", element: <UpdateDoctor /> },
  { path: "/doctor/delete", element: <DeleteDoctor /> },
  { path: "/doctorposition/create", element: <CreateDoctorPosition /> },
  { path: "/doctorposition/get", element: <GetDoctorPosition /> },
  { path: "/patient/get", element: <GetPatient /> },
  { path: "/patient/create", element: <CreatePatient /> },
  { path: "/patient/update", element: <UpdatePatient /> },
  { path: "/patient/delete", element: <DeletePatient /> },
  { path: "/employee/create", element: <CreateEmployee /> },
  { path: "/employee/delete", element: <DeleteEmployee /> },
  { path: "/employeeposition/create", element: <CreateEmployeePosition /> },
  { path: "/employeeposition/get", element: <GetEmployeePosition /> },
  { path: "/personaddress/create", element: <CreatePersonAddress /> },
  { path: "/personaddress/delete", element: <DeletePersonAddress /> },
  { path: "/personaddress/update", element: <UpdatePersonAddress /> },
  { path: "/personaddress/get", element: <GetPersonAddress /> },
  { path: "*", element: <NotFound /> },
];

const path = { create: "Crear", update: "Actualizar", delete: "Eliminar", get: "obtener" };

const routes: Routes = {
  Doctor: [
    {
      path: "/doctor/create",
      pathChildName: path["create"],
    },
    {
      path: "/doctor/update",
      pathChildName: path["update"],
    },
    {
      path: "/doctor/delete",
      pathChildName: path["delete"],
    },
    {
      path: "/doctor/get",
      pathChildName: path["get"],
    },
  ],
  "Posición del Doctor": [
    { path: "/doctorposition/create", pathChildName: path["create"] },
    { path: "/doctorposition/get", pathChildName: path["get"] },
  ],
  Paciente: [
    {
      path: "/patient/create",
      pathChildName: path["create"],
    },
    {
      path: "/patient/update",
      pathChildName: path["update"],
    },
    {
      path: "/patient/delete",
      pathChildName: path["delete"],
    },
    { path: "/patient/get", pathChildName: path["get"] },
  ],
  // Employee: [
  //   {
  //     path: "/employee/create",
  //     pathChildName: path["create"],
  //   },
  //   {
  //     path: "/employee/delete",
  //     pathChildName: path["delete"],
  //   },
  // ],
  // EmployeePosition: [
  //   {
  //     path: "/employeeposition/create",
  //     pathChildName: path["create"],
  //   },
  //   {
  //     path: "/employeeposition/get",
  //     pathChildName: path["get"],
  //   },
  // ],
  "Dirección de Personal": [
    {
      path: "/personaddress/create",
      pathChildName: path["create"],
    },
    {
      path: "/personaddress/update",
      pathChildName: path["update"],
    },
    /*{
      path: "/personaddress/delete",
      pathChildName: path["delete"],
    }, */
    {
      path: "/personaddress/get",
      pathChildName: path["get"],
    },
  ],
};

export { router, routes };
