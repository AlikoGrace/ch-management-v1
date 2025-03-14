import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Church Management</h1>
      <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
        Logout
      </button>
    </header>
  );
};

export default Header;
