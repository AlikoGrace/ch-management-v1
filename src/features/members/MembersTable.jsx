import React, { useEffect, useState } from "react";
import Member from "./Member";

const MembersTable = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("/members.json");
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.errror("Error fetching members", error);
      }
    };
    fetchMembers();
  }, []);
  return (
    <>
      <h3 className="font-bold mt-4">All members</h3>
      <table className="min-w-full table-auto border-collapse border border-Primary-light mt-4">
        <thead className="bg-Primary-light text-white">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Role</th>
            <th className="py-2 px-4 text-left flex justify-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <Member
              key={member.id}
              name={member.name}
              email={member.email}
              role={member.role}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MembersTable;
