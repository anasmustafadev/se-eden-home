"use client";
import React, { ChangeEvent, use, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      label: "Update",
      className:
        "bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out",
      actionType: "DETAIL",
      onClick: () => openBackdrop(),
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const defaultValue = {
    number: 0,
    type: 0,
    area: 0,
    feet1: 0,
    inch1: 0,
    feet2: 0,
    inch2: 0,
    rate: 0,
    price: 0,
    month: 0,
    installment: 0,
    advance: 0,
    advamount: 0,
    feature: 0,
    total: 0,
  };

  const [form, setForm] = useState(defaultValue);

  const onClose = () => {
    setForm((prev) => defaultValue);
    setIsOpen(false);
  };

  const openBackdrop = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    setForm((prev) => {
      if (prev.rate != undefined && prev.area != undefined) {
        return {
          ...prev,
          price: prev.rate * prev.area,
        };
      }
      return prev;
    });
  }, [form.rate, form.area]);

  useEffect(() => {
    setForm((prev) => {
      return {
        ...prev,
        total:
          prev.feature == 1
            ? prev.price + prev.price * 0.1
            : prev.feature == 2
            ? prev.price + prev.price * 0.05
            : prev.price,
      };
    });
  }, [form.price, form.feature]);

  useEffect(() => {
    setForm((prev) => {
      return {
        ...prev,
        rate: prev.type == 1 ? 120000 : prev.rate,
      };
    });
  }, [form.type]);

  function setFormValue(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.name == "type" ||
          e.target.name == "installment" ||
          e.target.name == "feature"
            ? Number(e.target.value)
            : e.target.value,
      };
    });
  }

  return (
    <>
      <Backdrop isOpen={isOpen} onClose={onClose}>
        <Card className="flex flex-col justify-center">
          <CardHeader>
            <CardTitle className="text-3xl mb-5">Plot Menu</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col p-5 w-[30rem] flex-wrap">
            <div className="flex items-center gap-2 justify-around">
              <div>
                <p>Plot #</p>
                <input
                  placeholder="231"
                  name="number"
                  type="text"
                  value={form.number}
                  onChange={setFormValue}
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Plot Type</p>
                <select
                  name="type"
                  value={form.type}
                  onChange={setFormValue}
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                >
                  <option value={0}>Select Type</option>
                  <option value={1}>Residential</option>
                  <option value={2}>Commercial</option>
                </select>
              </div>
              <div>
                <p>Area</p>
                <input
                  placeholder="20"
                  type="text"
                  name="area"
                  value={form.area}
                  onChange={setFormValue}
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center gap-10 mt-5 justify-around">
              <div>
                <p>Feets</p>
                <input
                  placeholder="30"
                  type="text"
                  name="feet1"
                  value={form.feet1}
                  onChange={setFormValue}
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Inches</p>
                <input
                  placeholder="6"
                  type="text"
                  name="inch1"
                  value={form.inch1}
                  onChange={setFormValue}
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Feets</p>
                <input
                  placeholder="50"
                  type="text"
                  name="feet2"
                  value={form.feet2}
                  onChange={setFormValue}
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Inches</p>
                <input
                  placeholder="2"
                  type="text"
                  name="inch2"
                  value={form.inch2}
                  onChange={setFormValue}
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center mt-5 gap-16">
              <div>
                <p>Rate Per Marla</p>
                <input
                  placeholder="0"
                  type="text"
                  disabled={form.type == 1 ? true : false}
                  name="rate"
                  value={form.rate}
                  onChange={setFormValue}
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Price</p>
                <input
                  placeholder="0"
                  type="text"
                  disabled
                  name="price"
                  value={form.price}
                  onChange={setFormValue}
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center mt-5 gap-16">
              <div>
                <p>Number of Months</p>
                <input
                  placeholder="6"
                  type="text"
                  name="month"
                  value={form.month}
                  onChange={setFormValue}
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Installment Type</p>
                <select
                  name="installment"
                  value={form.installment}
                  onChange={setFormValue}
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                >
                  <option value={0}>Select Type</option>
                  <option value={1}>Monthly</option>
                  <option value={2}>3 Months</option>
                  <option value={3}>Half Year</option>
                  <option value={4}>Yearly</option>
                </select>
              </div>
            </div>
            <div className="flex items-center mt-5 gap-16">
              <div>
                <p>Advance %</p>
                <input
                  type="text"
                  name="advance"
                  value={form.advance}
                  onChange={setFormValue}
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Advance Amount</p>
                <input
                  type="text"
                  name="advamount"
                  value={form.advamount}
                  onChange={setFormValue}
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center mt-5 gap-16">
              <div>
                <p>Feature</p>
                <select
                  name="feature"
                  value={form.feature}
                  onChange={setFormValue}
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                >
                  <option value={0}>Select Type</option>
                  <option value={1}>Front</option>
                  <option value={2}>Back</option>
                </select>
              </div>
              <div>
                <p>Total Price</p>
                <input
                  type="text"
                  disabled
                  name="total"
                  value={form.total}
                  onChange={setFormValue}
                  className="mt-1 w-full block rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out "
                onClick={() => setIsOpen(false)}
              >
                Save
              </button>
              <button
                className="bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                Exit
              </button>
            </div>
          </CardContent>
        </Card>
      </Backdrop>

      <div>
        <div className="w-full flex flex-col gap-5">
          <Card>
            <CardHeader>
              <PageHeader
                icon={<MdLandscape className="text-4xl" />}
                title="Plots"
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
                      Add Plot
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
