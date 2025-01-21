import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "./UserLayout";
import UserDashboard from "./UserDashboard";
import UserProfile from "./UserProfile";
import UserSchedule from "./UserSchedule";

export default function UserRoutes() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="schedule" element={<UserSchedule />} />
      </Route>
    </Routes>
  );
}
