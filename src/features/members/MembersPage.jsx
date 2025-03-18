import React from "react";
import LinkButton from "../../ui/LinkButton";

const MembersPage = () => {
  return (
    <section className="w-full text-Primary-semi-light p-6">
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
            <label className="font-semibold text-Primary-semi-light ">
              Role
            </label>
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

      <h3 className="font-bold mt-4">All members</h3>
      <table className="min-w-full table-auto border-collapse border border-Primary-light mt-4">
        <thead className="bg-Primary-light text-white">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Role</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Table Row 1 */}
          <tr className="border-b border-Primary-light">
            <td className="py-2 px-4">John Doe</td>
            <td className="py-2 px-4">john@example.com</td>
            <td className="py-2 px-4">MC Head</td>
            <td className="py-2 px-4 flex jsutify-end gap-2">
              <button className="bg-yellow-500 text-white px-4 py-1 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-1 rounded">
                Delete
              </button>
            </td>
          </tr>
          {/* Table Row 2 */}
          <tr className="border-b border-Primary-light">
            <td className="py-2 px-4">Jane Smith</td>
            <td className="py-2 px-4">jane@example.com</td>
            <td className="py-2 px-4">Assistant Pastor</td>
            <td className="py-2 px-4">
              <button className="bg-yellow-500 text-white px-4 py-1 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-1 rounded">
                Delete
              </button>
            </td>
          </tr>
          {/* Table Row 3 */}
          <tr className="border-b border-Primary-light">
            <td className="py-2 px-4">Alice Johnson</td>
            <td className="py-2 px-4">alice@example.com</td>
            <td className="py-2 px-4">Leader</td>
            <td className="py-2 px-4">
              <button className="bg-yellow-500 text-white px-4 py-1 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-1 rounded">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default MembersPage;
