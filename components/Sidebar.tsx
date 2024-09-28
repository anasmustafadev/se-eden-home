import React from "react";

import Link from "next/link";

function Sidebar() {
  return (
    <div className="h-screen hidden md:flex flex-col w-52 bg-gray-800 fixed">
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex flex-col flex-1 overflow-y-auto bg-slate-600 px-2 gap-10">
          <div></div>
          <div className="flex flex-col flex-1 gap-3">
            {[
              { name: "Dashboard", link: "/home/dashboard" },
              { name: "Profile", link: "/home/profile" },
              { name: "SMS", link: "/home/sms" },
              { name: "Plots", link: "/home/plots" },
              { name: "Ledger", link: "/home/ledger" },
              { name: "Plot Allotment", link: "/home/allotment" },
              { name: "Expenses", link: "/home/expenses" },
            ].map((element) => {
              return (
                <Link
                  href={element.link}
                  key={element.name}
                  className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 hover:cursor-pointer rounded-2xl"
                >
                  {element.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
