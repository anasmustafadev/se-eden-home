"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AppTable from "@/components/Table";
import SimpleTable from "@/components/SimpleTable";
import PageHeader from "@/components/PageHeader";
import { FaChartBar, FaHamburger, FaHandMiddleFinger } from "react-icons/fa";
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
  const allotmentData = [
    [
      "1",
      "25-11-2024",
      "Plot#1",
      "Mudasir Ahmed",
      "4.00M",
      "250,000",
      "1,000,000",
      "100,000",
      "15000",
      "60(Monthly)",
    ],
    [
      "2",
      "27-4-2024",
      "Plot#2",
      "Anas Mustafa",
      "4.00M",
      "250,000",
      "1,000,000",
      "100,000",
      "15000",
      "45(Monthly)",
    ],
  ];
  const headers = [
    "ID",
    "Date",
    "Plot",
    "Client Name",
    "Area",
    "Sale Rate",
    "Price",
    "Advance",
    "Installment",
    "No of Installments",
  ];
  const buttons = allotmentData.map((i, k) => [
    {
      label: "Stamp paper",
      className: "bg-blue-500 text-white px-3 py-2 rounded mr-1",
      actionType: "STAMPPAPER",
    },
  ]);

  const report = [
    ["Sales Report", ""],
    ["Total Area", "47.49 Marla"],
    ["Sold Area", "5.56 Marla"],
    ["For Sale Area", "41.83 Marla"],
    ["Total Expenses", "465,000,000"],
  ];

  const [isAddAllotmentOpen, setIsAddAllotmentOpen] = useState(false);
  const [isAddAdvanceOpen, setIsAddAdvanceOpen] = useState(false);
  const [isAddInstallmentOpen, setIsAddInstallmentOpen] = useState(false);
  const [isAddMultiInstallmentOpen, setIsAddMultiInstallmentOpen] =
    useState(false);
  const [isCancelAllotmentOpen, setIsCancelAllotmentOpen] = useState(false);
  const [isReturnAmountOpen, setIsReturnAmountOpen] = useState(false);
  const [isDeletePermanentAllotmentOpen, setIsDeletePermanentAllotmentOpen] =
    useState(false);

  const onCloseAddAllotment = () => {
    setIsAddAllotmentOpen(false);
  };
  const onCloseAddAdvance = () => {
    setIsAddAdvanceOpen(false);
  };
  const onCloseAddInstallment = () => {
    setIsAddInstallmentOpen(false);
  };
  const onCloseAddMultiInstallment = () => {
    setIsAddMultiInstallmentOpen(false);
  };
  const onCloseCancelAllotment = () => {
    setIsCancelAllotmentOpen(false);
  };
  const onCloseReturnAmount = () => {
    setIsReturnAmountOpen(false);
  };
  const onCloseDeletePermanentAllotment = () => {
    setIsDeletePermanentAllotmentOpen(false);
  };
  const openAddAllotment = () => {
    setIsAddAllotmentOpen(true);
  };
  const openAddAdvance = () => {
    setHeading("Add Advance Detail");
    setIsAddAdvanceOpen(true);
  };
  const openAddInstallment = () => {
    setHeading("Add Installment Detail");
    setIsAddInstallmentOpen(true);
  };
  const openAddMultiInstallment = () => {
    setIsAddMultiInstallmentOpen(true);
  };
  const openCancelAllotment = () => {
    setIsCancelAllotmentOpen(true);
  };
  const openReturnAmount = () => {
    setHeading("Return Amount of Canceled Plot");
    setIsReturnAmountOpen(true);
  };
  const openDeletePermanentAllotment = () => {
    setIsDeletePermanentAllotmentOpen(true);
  };
  const [heading, setHeading] = useState("");
  return (
    <>
      <Backdrop isOpen={isAddAllotmentOpen} onClose={onCloseAddAllotment}>
        <Card>
          <div className="flex flex-col gap-3 p-5 w-[30rem] h-[90vh] overflow-y-auto">
            <h1 className="text-3xl mb-5">Add New Allotment Detail</h1>
            <div>
              <p>Date</p>
              <input
                type="date"
                className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div>
              <p>Account Book</p>

              <select className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                <option value="">Select Account Book</option>
              </select>
            </div>
            <div>
              <p>Client</p>
              <select className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"></select>
            </div>
            <div>
              <p>Plot</p>
              <select className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                <option value="">Choose</option>
              </select>
            </div>
            <div className="flex gap-1 flex-col">
              <p>Length:</p>
              <p>Feet</p>
              <input
                type="number"
                min="0"
                className="mt-1 w-full block rounded-md border border-slate-300 bg-slate-200 px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
              <p>Inches</p>
              <input
                type="number"
                min="0"
                className="mt-1 w-full block rounded-md border border-slate-300 bg-slate-200 px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div className="flex gap-1 flex-col">
              <p>Width:</p>
              <p>Feet</p>
              <input
                type="number"
                min="0"
                className="mt-1 w-full block rounded-md border border-slate-300 bg-slate-200 px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
              <p>Inches</p>
              <input
                type="number"
                min="0"
                className="mt-1 w-full block rounded-md border border-slate-300 bg-slate-200 px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div className="flex justify-between">
              <div>
                <p>Heirs Name</p>
                <input
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Contact Number</p>
                <input
                  type="number"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p>CNIC</p>
                <input
                  type="number"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Address</p>
                <input
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p>Rate per marla</p>
                <input
                  type="number"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Total Price</p>
                <input
                  type="number"
                  min="0"
                  value="0"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p>Advance %</p>
                <input
                  type="number"
                  value="10"
                  min="0"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Amount</p>
                <input
                  type="number"
                  min="0"
                  value="0"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p>Number of Months</p>
                <input
                  type="number"
                  value="60"
                  min="0"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Type of Installment</p>
                <select className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                  <option value="monthly">Monthly</option>
                  <option value="3month">3 Month</option>
                  <option value="6month">6 Month</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <button
                className="bg-blue-500 px-3 py-2 rounded "
                onClick={() => setIsAddAllotmentOpen(false)}
              >
                Save
              </button>
              <button
                className="bg-red-500 px-3 py-2 rounded "
                onClick={() => setIsAddAllotmentOpen(false)}
              >
                Exit
              </button>
            </div>
          </div>
        </Card>
      </Backdrop>

      <Backdrop
        isOpen={isAddAdvanceOpen || isAddInstallmentOpen || isReturnAmountOpen}
        onClose={
          onCloseAddAdvance || onCloseAddInstallment || onCloseReturnAmount
        }
      >
        <Card>
          <div className="flex flex-col gap-3 p-5 w-[30rem]">
            <h1 className="text-3xl mb-5">{heading}</h1>
            <div>
              <p>Date</p>
              <input
                type="date"
                className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div>
              <p>Plot</p>
              <select className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                <option value="">Choose</option>
              </select>
            </div>
            <div className="flex justify-between">
              <div>
                <p>Amount</p>
                <input
                  type="number"
                  min="0"
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
            </div>
            <div className="flex justify-between mt-5">
              <button
                className="bg-blue-500 px-3 py-2 rounded "
                onClick={() => {
                  setIsAddAdvanceOpen(false);
                  setIsAddInstallmentOpen(false);
                  setIsReturnAmountOpen(false);
                }}
              >
                Save
              </button>
              <button
                className="bg-red-500 px-3 py-2 rounded "
                onClick={() => {
                  setIsAddAdvanceOpen(false);
                  setIsAddInstallmentOpen(false);
                  setIsReturnAmountOpen(false);
                }}
              >
                Exit
              </button>
            </div>
          </div>
        </Card>
      </Backdrop>

      <Backdrop
        isOpen={isAddMultiInstallmentOpen}
        onClose={onCloseAddMultiInstallment}
      >
        <Card>
          <div className="flex flex-col gap-3 p-5 w-[30rem]">
            <h1 className="text-3xl mb-5">
              Add Multiple Installment of a Client
            </h1>
            <div>
              <p>Date</p>
              <input
                type="date"
                className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div>
              <p>Account Book</p>
              <select className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                <option value="">Choose</option>
              </select>
            </div>
            <div>
              <p>Party</p>
              <select className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                <option value="">Choose</option>
              </select>
            </div>
            <div className="flex justify-between">
              <div>
                <p>Amount</p>
                <input
                  type="number"
                  min="0"
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
            </div>
            <div className="flex justify-between mt-5">
              <button
                className="bg-blue-500 px-3 py-2 rounded "
                onClick={() => setIsAddMultiInstallmentOpen(false)}
              >
                Save
              </button>
              <button
                className="bg-red-500 px-3 py-2 rounded "
                onClick={() => setIsAddMultiInstallmentOpen(false)}
              >
                Exit
              </button>
            </div>
          </div>
        </Card>
      </Backdrop>

      <Backdrop isOpen={isCancelAllotmentOpen} onClose={onCloseCancelAllotment}>
        <Card>
          <div className="flex flex-col gap-3 p-5 w-[30rem]">
            <h1 className="text-3xl mb-5">Cancel Allotment</h1>
            <div>
              <p>Date</p>
              <input
                type="date"
                className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div>
              <p>Plot</p>
              <select className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                <option value="">Choose</option>
              </select>
            </div>
            <div className="flex justify-between">
              <div>
                <p>Deduction Amount</p>
                <input
                  type="number"
                  min="0"
                  value="0"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Deduction Amount %</p>
                <input
                  type="number"
                  min="0"
                  value="0"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <p>Reason for Allotment Cancel</p>
              <input
                type="text"
                className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div className="flex justify-between mt-5">
              <button
                className="bg-blue-500 px-3 py-2 rounded "
                onClick={() => setIsCancelAllotmentOpen(false)}
              >
                Save
              </button>
              <button
                className="bg-red-500 px-3 py-2 rounded "
                onClick={() => setIsCancelAllotmentOpen(false)}
              >
                Exit
              </button>
            </div>
          </div>
        </Card>
      </Backdrop>

      <Backdrop
        isOpen={isDeletePermanentAllotmentOpen}
        onClose={onCloseDeletePermanentAllotment}
      >
        <Card>
          <div className="flex flex-col gap-3 p-5 w-[30rem]">
            <h1 className="text-3xl mb-5">Delete Allotment Completely</h1>
            <div>
              <p>Plot</p>
              <select className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                <option value="">Choose</option>
              </select>
            </div>
            <div>
              <label>
                <input type="checkbox" className="mr-2" />
                1. Choose Allotment that will be permanently Deleted carefully.
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" className="mr-2" />
                2. Your above selected allotment information will be deleted
                permanently.
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" className="mr-2" />
                3. Enter your login password.
              </label>
            </div>
            <div>
              <p>Enter Password</p>
              <input
                type="password"
                value="1234"
                className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div className="flex justify-between mt-5">
              <button
                className="bg-blue-500 px-3 py-2 rounded "
                onClick={() => setIsDeletePermanentAllotmentOpen(false)}
              >
                Delete Allotment
              </button>
              <button
                className="bg-red-500 px-3 py-2 rounded "
                onClick={() => setIsDeletePermanentAllotmentOpen(false)}
              >
                Exit
              </button>
            </div>
          </div>
        </Card>
      </Backdrop>

      <div className="w-full flex flex-col gap-5">
        <Card>
          <CardHeader>
            <PageHeader
              icon={<FaChartBar className="text-4xl" />}
              title="Allotments"
            />
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>Allotments</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <IoMdMenu className="text-2xl" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={openAddAllotment}
                    className="flex items-center hover:opacity-90 py-2 px-4 rounded"
                  >
                    Add New Allotment
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={openAddAdvance}
                    className="flex items-center  hover:opacity-90 py-2 px-4 rounded"
                  >
                    Add Advance
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={openAddInstallment}
                    className="flex items-center  hover:bg-blue-700 py-2 px-4 rounded"
                  >
                    Add Installment
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={openAddMultiInstallment}
                    className="flex items-center  hover:opacity-90 py-2 px-4 rounded"
                  >
                    Add Multi Installment
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center hover:opacity-90 py-2 px-4 rounded">
                    Sale Report
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center hover:opacity-90 py-2 px-4 rounded">
                    Defaulters SMS Client wise
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center hover:opacity-90 py-2 px-4 rounded">
                    Defaulter Report
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center hover:opacity-90 py-2 px-4 rounded">
                    List of Installments
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center hover:opacity-90 py-2 px-4 rounded">
                    Plot wise Sale Report
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={openCancelAllotment}
                    className="flex items-cente hover:opacity-90 py-2 px-4 rounded"
                  >
                    Cancel Allotment
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={openReturnAmount}
                    className="flex items-cente hover:opacity-90 py-2 px-4 rounded"
                  >
                    Add Return Amount
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={openDeletePermanentAllotment}
                    className="flex items-cente hover:opacity-90 py-2 px-4 rounded"
                  >
                    Delete Permanent Allotment With data
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent></CardContent>
          <div>
            <AppTable
              data={allotmentData}
              headers={headers}
              buttons={buttons}
            />
          </div>
          <SimpleTable data={report} />
        </Card>
      </div>
    </>
  );
};

export default page;
