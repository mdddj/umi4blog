import React from "react";
import {Outlet} from "@@/exports";

export default function Layout() {
  return (
    <div >
        <Outlet/>
    </div>
  );
}
