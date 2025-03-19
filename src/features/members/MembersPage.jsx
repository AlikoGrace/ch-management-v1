import React from "react";
import LinkButton from "../../ui/LinkButton";
import MembersForm from "./MembersForm";
import MembersTable from "./MembersTable";

const MembersPage = () => {
  return (
    <section className="w-full text-Primary-semi-light p-6">
      <MembersForm />
      <MembersTable />
    </section>
  );
};

export default MembersPage;
