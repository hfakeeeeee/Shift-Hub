import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import AdminDashboard from "./AdminDashboard";
import AdminEmployees from "./AdminEmployees";
import AdminSchedules from "./AdminSchedules";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="employees" element={<AdminEmployees />} />
        <Route path="schedules" element={<AdminSchedules />} />
      </Route>
    </Routes>
  );
}
