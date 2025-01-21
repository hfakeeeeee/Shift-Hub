import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white">
        <div className="p-4 border-b border-gray-700 font-bold">
          Admin Panel
        </div>
        <nav className="p-4 space-y-2">
          <Link
            to="/admin/dashboard"
            className="block py-1 px-2 rounded hover:bg-gray-800"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/employees"
            className="block py-1 px-2 rounded hover:bg-gray-800"
          >
            Employees
          </Link>
          <Link
            to="/admin/schedules"
            className="block py-1 px-2 rounded hover:bg-gray-800"
          >
            Schedules
          </Link>
        </nav>
      </aside>

      <div className="flex-1 bg-gray-100 p-6">
        <header className="flex justify-between items-center mb-4 border-b pb-2">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          <button
            onClick={() => alert("Logout logic ở đây")}
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
