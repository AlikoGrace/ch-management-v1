import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Error from "../ui/Error";
import DashboardPage from "../features/dashboard/DashboardPage";
import BranchesPage from "../features/branches/BranchesPage";
import MembersPage from "../features/members/MembersPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/branches",
        element: <BranchesPage />,
      },
      {
        path: "/members",
        element: <MembersPage />,
      },
    ],
  },
]);
