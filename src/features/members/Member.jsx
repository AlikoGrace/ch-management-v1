import React from "react";

const Member = ({ name, email, role }) => {
  return (
    <tr className="border-b border-Primary-light">
      <td className="py-2 px-4">{name}</td>
      <td className="py-2 px-4">{email}</td>
      <td className="py-2 px-4">{role}</td>
      <td className="py-2 px-4 flex justify-end gap-2">
        <button className="bg-yellow-500 text-white px-4 py-1 rounded">
          Edit
        </button>
        <button className="bg-red-500 text-white px-4 py-1 rounded">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Member;
