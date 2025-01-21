import React from "react";

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p>Chào mừng bạn đến khu vực quản trị. Tại đây bạn có thể quản lý mọi thứ.</p>

      {/* Ví dụ: Thống kê nhanh */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold">Tổng số Employees</h3>
          <p className="text-2xl mt-2">12</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold">Tổng số Schedules</h3>
          <p className="text-2xl mt-2">25</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold">Tổng số Stores</h3>
          <p className="text-2xl mt-2">2</p>
        </div>
      </div>
    </div>
  );
}
