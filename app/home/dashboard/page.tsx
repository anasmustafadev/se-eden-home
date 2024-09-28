import React from "react";
import PageHeader from "@/components/PageHeader";
import { MdDashboard } from "react-icons/md";
import Card from "@/components/Card";

function page() {
  const data = [
    { name: "SALE", amount: "100,000/- Rs." },
    { name: "SALE RETURN", amount: "100,000/- Rs." },
    { name: "ACTUAL SALE", amount: "100,000/- Rs." },
    { name: "EXPENCE", amount: "100,000/- Rs." },
    { name: "PENDING COLLECTION", amount: "100,000/- Rs." },
    { name: "LOSE", amount: "100,000/- Rs." },
  ];

  const plotsData = [
    { name: "Total Plots", sub: "Number of Plots", amount: "10" },
    { name: "Total Homes", sub: "Number of Homes", amount: "6" },
    { name: "Total Shops", sub: "Number of shops", amount: "4" },
    { name: "Overall", sub: "Number of shops and plots", amount: "10" },
  ];

  const monthData = [
    { name: "Sale", amount: "0/- Rs." },
    { name: "Sale Return", amount: "0/- Rs." },
    { name: "Actual Sale", amount: "0/- Rs." },
    { name: "Expense", amount: "0/- Rs." },
    { name: "Collection", amount: "0/- Rs." },
    { name: "Lose", amount: "0/- Rs." },
  ];

  return (
    <div className="w-full flex flex-col gap-5">
      <Card>
        <PageHeader
          icon={<MdDashboard className="text-4xl" />}
          title="Dashboard"
        />
      </Card>
      <Card>
        <h1>Town Account Management System</h1>
        <div className="mt-5 flex gap-5 flex-wrap md:flex-nowrap justify-around">
          {data.map((element) => {
            return (
              <div className="p-5 pt-2 shadow-sm shadow-slate-300">
                <h1 className="font-bold">{element.name}</h1>
                <p>{element.amount}</p>
              </div>
            );
          })}
        </div>
      </Card>
      <div>
        {plotsData.map((element) => {
          return (
            <Card>
              <div className="flex justify-between">
                <div>
                  <h1 className="font-bold">{element.name}</h1>
                  <p>{element.sub}</p>
                </div>
                <p>{element.amount}</p>
              </div>
            </Card>
          );
        })}
      </div>
      <Card>
        <h2>This month</h2>
        <div className="flex flex-row mt-5 flex-wrap md:flex-nowrap justify-around">
          {monthData.map((element) => {
            return (
              <div
                className={`pt-5 pb-2 pl-2 pr-5 border-b-4 ${
                  element.name.length > 7
                    ? "border-red-700"
                    : "border-green-700"
                }`}
              >
                <p>Rs. {<span className="font-bold">{element.amount}</span>}</p>
                <p>{element.name}</p>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

export default page;
