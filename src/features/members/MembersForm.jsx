import React from "react";

const MembersForm = () => {
  return (
    <header>
      <h3 className="font-bold mb-2">Add new member</h3>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col w-full md:w-1/4">
          <label className="font-semibold text-Primary-semi-light ">
            Full Name
          </label>
          <input
            type="tel"
            placeholder="John Doe"
            className="border-2 border-Primary-light rounded-md outline-0 py-1  px-4 md:px-7"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/4">
          <label className="font-semibold text-Primary-semi-ligh">
            Contact
          </label>
          <input
            type="tel"
            placeholder="John Doe"
            className="border-2 rounded-md border-Primary-light outline-0 py-1 px-4"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/4">
          <label className="font-semibold text-Primary-semi-light ">Role</label>
          <select className="border-2 rounded-md border-Primary-light outline-0 py-1 px-4">
            <option value="">Select a Role</option>
            <option value="main-pastor">Main Pastor</option>
            <option value="assistant-pastor">Assistant Pastor</option>
            <option value="cell-shepherd">Cell Shepherd</option>
            <option value="mc-head">MC Head</option>
            <option value="member">Member</option>
          </select>
        </div>
      </div>
      <button className="bg-primary text-white px-3 py-2 rounded-md mt-4 shadow-2xl">
        Add User
      </button>
    </header>
  );
};

export default MembersForm;
