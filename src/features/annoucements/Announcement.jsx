import React, { useState } from "react";

const Annoucement = () => {
  const [announcement, setAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState([
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (announcement) {
      setAnnouncements([announcement, ...announcements]);
      setAnnouncement("");
    }
  };

  return (
    <div className="">
      <header className="rounded-sm">
        <h1 className="flex gap-2 p-4 items-center text-xl text-Primary mb-4 font-bold">
          <span>
            <svg className="w-6 h-6  fill-Primary-semi-light">
              <use href="/sprite.svg#icon-bullhorn"></use>
            </svg>
          </span>
          Announcement{" "}
        </h1>
      </header>
      <div className="flex flex-col sm:flex-row gap-4 justify-between text-Primary">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-4 rounded-md">
          <div className="gap-2">
            <select
              id="receivers"
              className="w-full text-Primary-light border p-2 border-Primary-light rounded focus:outline-none focus:border-none"
              defaultValue="">
              <option value="" disabled>
                Send Announcement To ?
              </option>
              <option value="all">All</option>
              <option value="leaders">Leaders</option>
              <option value="youth">Youth</option>
              <option value="children">Children</option>
            </select>
          </div>
          <textarea
            id="announcement"
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
            className="w-full p-2 border  text-Primary-semi-light border-Primary-light rounded focus:outline-none focus:border-none"
            placeholder="Enter your announcement here"
            rows="4"
          />
          <button
            type="submit"
            className="flex gap-2 justify-center items-center p-2 rounded bg-Primary-light font-semibold text-white hover:bg-custom-blue-light">
            <span>
              <svg className="w-4 h-4  fill-Primary-semi-light">
                <use href="/sprite.svg#icon-envelop"></use>
              </svg>
            </span>
            Send Announcement
          </button>
        </form>

        <div className="flex flex-col w-full p-4 px-4 rounded-md border-2 border-Primary-light">
          <h2 className="flex gap-2 items-center text-lg font-bold text-Primary-semi-light mb-4">
            {/* <MdNoteAlt size={25} /> */}
            Recent Announcements
          </h2>
          <ul>
            {announcements.map((announcement, index) => (
              <li
                key={index}
                className="text-sm text-Primary-semi-light font-semibold rounded-md mb-2 pb-2">
                * {announcement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Annoucement;
