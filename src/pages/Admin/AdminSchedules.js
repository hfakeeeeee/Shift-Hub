import React, { useState } from "react";

const initialSchedules = [
  {
    id: 1,
    employee: "Alice",
    store: "Store 1",
    startTime: "2025-01-01 09:00",
    endTime: "2025-01-01 13:00",
    status: "approved",
  },
  {
    id: 2,
    employee: "Bob",
    store: "Store 2",
    startTime: "2025-01-02 10:00",
    endTime: "2025-01-02 14:00",
    status: "pending",
  },
];

export default function AdminSchedules() {
  const [schedules, setSchedules] = useState(initialSchedules);

  const handleApprove = (id) => {
    const newSchedules = schedules.map((s) =>
      s.id === id ? { ...s, status: "approved" } : s
    );
    setSchedules(newSchedules);
  };

  const handleReject = (id) => {
    const newSchedules = schedules.map((s) =>
      s.id === id ? { ...s, status: "rejected" } : s
    );
    setSchedules(newSchedules);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Schedules</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Employee</th>
              <th className="px-4 py-2 text-left">Store</th>
              <th className="px-4 py-2 text-left">Start</th>
              <th className="px-4 py-2 text-left">End</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((sch) => (
              <tr key={sch.id} className="border-b">
                <td className="px-4 py-2">{sch.id}</td>
                <td className="px-4 py-2">{sch.employee}</td>
                <td className="px-4 py-2">{sch.store}</td>
                <td className="px-4 py-2">{sch.startTime}</td>
                <td className="px-4 py-2">{sch.endTime}</td>
                <td className="px-4 py-2 capitalize">{sch.status}</td>
                <td className="px-4 py-2 space-x-2">
                  {sch.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleApprove(sch.id)}
                        className="px-2 py-1 bg-green-600 text-white rounded"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(sch.id)}
                        className="px-2 py-1 bg-red-600 text-white rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  {sch.status === "approved" && (
                    <span className="text-green-700 font-semibold">
                      Approved
                    </span>
                  )}
                  {sch.status === "rejected" && (
                    <span className="text-red-700 font-semibold">
                      Rejected
                    </span>
                  )}
                </td>
              </tr>
            ))}
            {schedules.length === 0 && (
              <tr>
                <td colSpan="7" className="p-4 text-center">
                  Chưa có lịch nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
