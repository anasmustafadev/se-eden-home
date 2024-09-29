"use client";
import React from "react";
import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { MdLandscape } from "react-icons/md";
import Table from "@/components/Table";
import { FaPlus, FaPrint } from "react-icons/fa";
import { useState } from "react";
import Backdrop from "@/components/Backdrop";

const page = () => {
  const plotData = [
    [
      "1",
      "Shop Commercial",
      "1 Marla",
      "27x10",
      "2,000,000",
      "2,000,000",
      "4,000,000",
      "33,333.33",
      "48",
    ],
    [
      "2",
      "Shop Commercial",
      "1.5 Marla",
      "27x10",
      "400,000",
      "600,000",
      "120,000",
      "10,000",
      "48",
    ],
    [
      "3",
      "Plot Residential",
      "5 Marla",
      "50x27",
      "250,000",
      "1,250,000",
      "250,000",
      "20,833.33",
      "48",
    ],
    [
      "4",
      "Plot Residential",
      "6.67 Marla",
      "45x40",
      "250,000",
      "1,666,667",
      "333,333",
      "27,777.78",
      "48",
    ],
    ["5", "Plot Residential", "0 Marla", "30x50", "0", "0", "0", "0", "48"],
  ];
  const headers = [
    "No.",
    "Plot",
    "Area",
    "Size",
    "Rate",
    "Amount",
    "Advance",
    "Installment",
    "No of Installments",
  ];
  const buttons = plotData.map((i, k) => [
    {
      label: "Detail",
      className: "bg-blue-500 text-white px-3 py-2 rounded mr-1",
      actionType: "DETAIL",
      onClick: () => {},
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const openBackdrop = (index: number) => {
    setIsOpen(true);
  };

  return (
    <>
      <Backdrop isOpen={isOpen} onClose={onClose}>
        <Card>
          <div className="flex flex-col p-5 w-[30rem]">
            <h1 className="text-3xl mb-5">Plot Menu</h1>
            <div className="flex items-center gap-2 justify-around">
              <div>
                <p>Plot #</p>
                <input
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Plot Type #</p>
                <input
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Area</p>
                <input
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center gap-10 mt-5 justify-around">
              <div>
                <p>Feets</p>
                <input
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Inches</p>
                <input
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Feets</p>
                <input
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Inches</p>
                <input
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center mt-5 gap-16">
              <div>
                <p>Rate Per Marla</p>
                <input
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Price</p>
                <input
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center mt-5 gap-16">
              <div>
                <p>Number of Months</p>
                <input
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Installment Type</p>
                <input
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center mt-5 gap-16">
              <div>
                <p>Advance %</p>
                <input
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Advance Amount</p>
                <input
                  type="text"
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
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

      <div>
        <div className="w-full flex flex-col gap-5">
          <Card>
            <PageHeader
              icon={<MdLandscape className="text-4xl" />}
              title="Plots"
            />
          </Card>
          <Card>
            <div className="flex gap-2">
              <button
                onClick={() => openBackdrop(0)}
                className="flex items-center bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded"
              >
                <FaPlus className="mr-2" />
                Add Plot
              </button>

              <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                <FaPrint className="mr-2" />
                Print
              </button>
            </div>
            <Table data={plotData} headers={headers} buttons={buttons} />
          </Card>
        </div>
      </div>
    </>
  );
};

export default page;
