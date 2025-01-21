// src/pages/user/UserSchedule.jsx
import React, { useState } from "react";

export default function UserSchedule() {
  const [shifts, setShifts] = useState([
    {
      id: 1,
      date: "2025-01-01",
      start: "09:00",
      end: "13:00",
      store: "Store 1",
    },
    {
      id: 2,
      date: "2025-01-03",
      start: "14:00",
      end: "18:00",
      store: "Store 2",
    },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Schedule</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Time</th>
              <th className="py-2 px-4 text-left">Store</th>
            </tr>
          </thead>
          <tbody>
            {shifts.map((shift) => (
              <tr key={shift.id} className="border-b">
                <td className="py-2 px-4">{shift.date}</td>
                <td className="py-2 px-4">
                  {shift.start} - {shift.end}
                </td>
                <td className="py-2 px-4">{shift.store}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
