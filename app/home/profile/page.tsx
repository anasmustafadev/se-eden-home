"use client";

import React, { ChangeEvent } from "react";
import { IoIosPerson } from "react-icons/io";
import { Card } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import { FaSave, FaPlus } from "react-icons/fa";
import AppTable from "@/components/Table";
import { useState } from "react";
import Backdrop from "@/components/Backdrop";

const page = () => {
  const userData = [
    ["1", "Anas Mustafa", "0343123123", "Lahore", "ANAS", "********"],
    ["2", "Mudassir", "0343126153", "Lahore", "MUDASSIR", "********"],
    ["3", "AbdulRehman", "0325673123", "Lahore", "ABDULREHMAN", "********"],
    [" ", " ", " ", " ", " ", " "],
  ];

  const headers = [
    "No.",
    "Name",
    "Phone Number",
    "Address",
    "Admin",
    "Password",
  ];

  const buttons = userData.map((i, k) => [
    {
      label: "Update",
      className: "bg-blue-500 text-white px-3 py-2 rounded mr-1",
      actionType: "UPDATE",
      onClick: () => {
        openBackdrop(k);
      },
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const onClose = () => {
    setIsOpen(false);
  };

  const openBackdrop = (index: number) => {
    console.log("Hello");
    setIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Backdrop isOpen={isOpen} onClose={onClose}>
        <Card>
          <div className="p-5 w-[40rem]">
            <h1 className="text-3xl text-gray-800">Update User Details</h1>
            <div>
              <div>
                <p>Name:</p>
                <input
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  type="text"
                  placeholder="Name"
                  value={userData[index][1]}
                />
              </div>
              <div>
                <p>Contact:</p>
                <input
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  type="text"
                  placeholder="Contact"
                  value={userData[index][2]}
                />
              </div>
              <div>
                <p>Address</p>
                <input
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  type="text"
                  placeholder="Address"
                  value={userData[index][3]}
                />
              </div>
              <div>
                <p>Username:</p>
                <input
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  type="text"
                  placeholder="Password"
                  value={userData[index][4]}
                />
              </div>
              <div>
                <p>Password:</p>
                <input
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  type="text"
                  placeholder="Username"
                  value={userData[index][5]}
                />
              </div>
            </div>
            <div className="flex justify-between mt-5">
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
          </div>
        </Card>
      </Backdrop>

      <div className="w-full flex flex-col gap-5">
        <Card>
          <PageHeader
            icon={<IoIosPerson className="text-4xl" />}
            title="Profile"
          />
        </Card>
        <Card>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <input
                type="Name"
                name="name"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Full Name"
              />
              <input
                type="phone"
                name="phone"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                name="username"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Username"
              />
              <input
                type="password"
                name="password"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <input
              type="text"
              name="address"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Address"
            />
          </div>
          <button className="flex items-center mt-5 bg-green-500 hover:opacity-90 text-white py-2 px-4 rounded">
            <FaSave className="mr-2" />
            Save
          </button>
        </Card>
        <Card>
          <h1 className="text-2xl">Users</h1>
          <AppTable data={userData} headers={headers} buttons={buttons} />
          <button
            onClick={() => openBackdrop(3)}
            className="flex items-center mt-5 bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded"
          >
            <FaPlus className="mr-2" />
            Add User
          </button>
        </Card>
      </div>
    </>
  );
};

export default page;
