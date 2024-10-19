"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import { MdLandscape } from "react-icons/md";
import AppTable from "@/components/Table";
import { FaPlus, FaPrint } from "react-icons/fa";
import { useState } from "react";
import Backdrop from "@/components/Backdrop";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMdMenu } from "react-icons/io";

const page = () => {
  const plotData = [
    [
      "1",
      "Purchaser",
      "Mudassir",
      "34032-123123123-1",
      "03107206547",
      "Layyah",
    ],
    [
      "1",
      "Purchaser",
      "Mudassir",
      "34032-123123123-1",
      "03107206547",
      "Layyah",
    ],
    [
      "1",
      "Purchaser",
      "Mudassir",
      "34032-123123123-1",
      "03107206547",
      "Layyah",
    ],
    [
      "1",
      "Purchaser",
      "Mudassir",
      "34032-123123123-1",
      "03107206547",
      "Layyah",
    ],
    [
      "1",
      "Purchaser",
      "Mudassir",
      "34032-123123123-1",
      "03107206547",
      "Layyah",
    ],
  ];
  const headers = ["No.", "Type", "Name", "CNIC", "Address"];
  const buttons = plotData.map((i, k) => [
    {
      label: "Update",
      className: "bg-blue-500 text-white px-3 py-2 rounded mr-1",
      actionType: "DETAIL",
      onClick: () => openBackdrop(),
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const openBackdrop = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Backdrop isOpen={isOpen} onClose={onClose}>
        <Card className="flex flex-col items-center max-w-[30rem] min-w-[20rem]">
          <CardHeader className="flex">
            <CardTitle className="text-3xl mx-auto mb-5">Client Menu</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col p-5 w-[20rem] flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <div className="w-full">
                <p>Type</p>
                <select className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                  <option value="">Select Type</option>
                  <option value="">Purchaser</option>
                  <option value="">Investor</option>
                  <option value="">Employees</option>
                  <option value="">Banks</option>
                </select>
              </div>
              <div className="w-full">
                <p>Name</p>
                <input
                  placeholder="Residential"
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div className="w-full">
                <p>CNIC</p>
                <input
                  placeholder="20"
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div className="w-full">
                <p>Address</p>
                <input
                  placeholder="20"
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <CardFooter className="w-full mt-5">
              <div className="flex justify-between w-full">
                <button
                  className="bg-blue-500 px-3 py-2 rounded "
                  onClick={() => setIsOpen(false)}
                >
                  Save
                </button>
                <button
                  className="bg-red-500 px-3 py-2 rounded "
                  onClick={() => setIsOpen(false)}
                >
                  Exit
                </button>
              </div>
            </CardFooter>
          </CardContent>
        </Card>
      </Backdrop>

      <div>
        <div className="w-full flex flex-col gap-5">
          <Card>
            <CardHeader>
              <PageHeader
                icon={<MdLandscape className="text-4xl" />}
                title="Clients"
              />
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle>Details</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <IoMdMenu className="text-2xl" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => openBackdrop()}
                      className="flex items-center hover:opacity-90 py-2 px-4 rounded"
                    >
                      <FaPlus className="mr-2" />
                      Add Client
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center hover:bg-blue-700 py-2 px-4 rounded">
                      <FaPrint className="mr-2" />
                      Print
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="flex gap-2">
              <AppTable data={plotData} headers={headers} buttons={buttons} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default page;
