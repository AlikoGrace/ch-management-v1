import React from "react";
import Logo from "../../public/img/Logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <img src="Logo" alt="" />

      <input
        type="text"
        placeholder="Search..."
        className="border px-4 py-2 rounded-md"
      />

      <div className="flex items-center gap-2">
        <img
          src="/user.jpg"
          alt="User Profile"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm">Aliko</span>
      </div>

      {/* Logout Button */}
      <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
        Logout
      </button>
    </header>
  );
};

export default Header;
