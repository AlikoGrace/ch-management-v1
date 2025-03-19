import React from "react";
import Annoucement from "../annoucements/Announcement";

const DashboardPage = () => {
  return (
    <section className="w-full text-Primary-semi-light font-semibold">
      <header className="rounded-sm px-4 py-3 text-Primary my-2">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 justify-between text-lg items-center p-4 rounded shadow-md border px-4 border-Primary-light">
          <div className="flex gap-2">
            <svg className="w-5 h-5 fill-Primary-semi-light">
              <use href="/sprite.svg#icon-users"></use>
            </svg>
            <h3 className="flex gap-2 items-center ">Total Branches</h3>
          </div>

          <div className="flex gap-4 items-center">
            <span className="text-xl">150</span>
            <div className="border-l-2 px-4 border-Primary-light">
              <p className="flex gap-2  border-b-2   border-Primary-light items-center">
                Male: 534
              </p>
              <p className="flex gap-2 items-center">Female: 647</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between text-lg items-center  p-4 rounded shadow-md border px-4 border-Primary-light">
          <h3 className="flex gap-2 items-center ">Total Youth</h3>
          <div className="flex gap-4 items-center">
            <span className="text-xl">1583</span>
            <div className="border-l-2 px-4 border-Primary-light">
              <p className="flex gap-2   border-b-2   border-Primary-light px-2items-center">
                Male: 534
              </p>
              <p className="flex gap-2 items-center">Female: 647</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between text-lg items-center  p-4 rounded shadow-md border px-4 border-Primary-light">
          <h3 className="flex gap-2 items-center ">Total Youth</h3>
          <div className="flex gap-4 items-center">
            <span className="text-xl">583</span>
            <div className="border-l-2 px-4 border-Primary-light">
              <p className="flex gap-2 items-center">Male: 340</p>
              <p className="flex gap-2 items-center">Female: 247</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between text-lg items-center  p-4 rounded shadow-md border px-4 border-Primary-light">
          <h3 className="flex gap-2 items-center ">Total Offering</h3>
          <span>GHC 14,683</span>
        </div>

        <div className="flex flex-col gap-2 justify-between text-lg items-center  p-4 rounded shadow-md border px-4 border-Primary-light">
          <h3 className="flex gap-2 items-center ">Total Tithe</h3>

          <span>GHC 4,683</span>
        </div>
        <div className="flex flex-col gap-2 justify-between text-lg items-center  p-4 rounded shadow-md border px-4 border-Primary-light">
          <h3 className="flex gap-2 items-center ">Total Children: 840</h3>
          <div className="flex gap-4">
            <p className="flex gap-2 items-center">Male: 640</p>
            <p className="flex gap-2 items-center">Female: 347</p>
          </div>
        </div>
      </div>
      <Annoucement />
    </section>
  );
};

export default DashboardPage;
