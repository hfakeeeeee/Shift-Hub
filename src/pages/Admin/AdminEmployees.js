import React, { useState } from "react";

const initialEmployees = [
  { id: 1, name: "Alice", type: "Part-time", phone: "0123456789" },
  { id: 2, name: "Bob", type: "Full-time", phone: "0987654321" },
];

export default function AdminEmployees() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState("Part-time");
  const [newPhone, setNewPhone] = useState("");

  const handleAdd = () => {
    if (!newName) {
      alert("Name is required!");
      return;
    }
    const newEmployee = {
      id: employees.length + 1, 
      name: newName,
      type: newType,
      phone: newPhone,
    };
    setEmployees([...employees, newEmployee]);
    setNewName("");
    setNewType("Part-time");
    setNewPhone("");
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Bạn có chắc chắn xóa?");
    if (confirmed) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Employees</h2>

      <div className="bg-white rounded shadow p-4 mb-6 max-w-md">
        <h3 className="font-semibold mb-2">Thêm nhân viên mới</h3>
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Tên</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Nhập tên..."
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Loại nhân viên</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
          >
            <option value="Part-time">Part-time</option>
            <option value="Full-time">Full-time</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Số điện thoại</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            placeholder="SĐT..."
          />
        </div>
        <button
          onClick={handleAdd}
          className="px-4 py-2 mt-2 bg-blue-600 text-white rounded font-semibold"
        >
          Thêm nhân viên
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Tên</th>
              <th className="px-4 py-2 text-left">Loại</th>
              <th className="px-4 py-2 text-left">SĐT</th>
              <th className="px-4 py-2 text-left">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="border-b">
                <td className="px-4 py-2">{emp.id}</td>
                <td className="px-4 py-2">{emp.name}</td>
                <td className="px-4 py-2">{emp.type}</td>
                <td className="px-4 py-2">{emp.phone}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
            {employees.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  Không có nhân viên nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
