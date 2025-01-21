import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

export default function UserLayout() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 font-bold border-b border-gray-600">User Panel</div>

        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/user/dashboard"
            className="block px-2 py-1 hover:bg-gray-700 rounded"
          >
            Dashboard
          </Link>
          <Link
            to="/user/profile"
            className="block px-2 py-1 hover:bg-gray-700 rounded"
          >
            Profile
          </Link>
          <Link
            to="/user/schedule"
            className="block px-2 py-1 hover:bg-gray-700 rounded"
          >
            Schedule
          </Link>
        </nav>
      </aside>

      <div className="flex-1 bg-gray-50 p-6">
        <header className="mb-4 border-b pb-2 flex justify-between items-center">
          <h1 className="text-xl font-semibold">User Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </header>

        <Outlet />
      </div>
    </div>
  );
}
