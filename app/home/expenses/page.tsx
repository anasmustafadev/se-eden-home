"use client";
import React from "react";
import SimpleTable from "@/components/SimpleTable";
import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import Backdrop from "@/components/Backdrop";
import { FaMoneyBillAlt } from "react-icons/fa";
import { useState } from "react";

const page = () => {
  const expenseData = [
    ["No.", "Expense Accounts", "Amount"],
    ["1", "Office Expense", "15,000"],
    ["2", "File Expense", "450,000"],
    ["3", "Total Expense", "465,000"],
  ];

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
        <Card>
          <div className="p-5 w-[30rem]">
            <h1 className="text-3xl mb-5">Add Expense</h1>
            <div>
              <p>Date</p>
              <input
                type="date"
                className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div>
              <p>Amount</p>
              <input
                type="text"
                className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div>
              <p>Description</p>
              <input
                type="text"
                className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
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
            icon={<FaMoneyBillAlt className="text-4xl" />}
            title="Expenses"
          />
        </Card>
        <Card>
          <div className="flex justify-end gap-2">
            <button
              onClick={openBackdrop}
              className="flex items-center bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded"
            >
              Add Expense Account
            </button>
            <button className="flex items-center bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded">
              Print Expenses
            </button>
          </div>
          <SimpleTable data={expenseData} />
        </Card>
      </div>
    </>
  );
};

export default page;
