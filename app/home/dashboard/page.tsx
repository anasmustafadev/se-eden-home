import React from "react";
import PageHeader from "@/components/PageHeader";
import { MdDashboard } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function page() {
  const data = [
    { name: "SALE", amount: "100,000/- Rs." },
    { name: "SALE RETURN", amount: "100,000/- Rs." },
    { name: "ACTUAL SALE", amount: "100,000/- Rs." },
    { name: "EXPENCE", amount: "100,000/- Rs." },
    { name: "PENDING", amount: "100,000/- Rs." },
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

  const yearData = [
    { name: "January", amount: 23420000 },
    { name: "February", amount: 12200000 },
    { name: "March", amount: 3410300 },
    { name: "April", amount: 34890000 },
    { name: "May", amount: 25509000 },
    { name: "June", amount: 27000500 },
    { name: "July", amount: 14420000 },
    { name: "August", amount: 17350000 },
    { name: "September", amount: 19210000 },
    { name: "October", amount: 23890000 },
    { name: "November", amount: 8221000 },
    { name: "December", amount: 20580000 },
  ];

  return (
    <div className="w-full flex flex-col gap-5">
      <Card>
        <CardHeader>
          <PageHeader
            icon={<MdDashboard className="text-4xl" />}
            title="Dashboard"
          />
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Town Account Management System</CardTitle>
        </CardHeader>
        <CardContent className="mt-5 flex gap-5 flex-wrap justify-around">
          {data.map((element) => {
            return (
              <Card className="shadow-sm w-48 p-2 shadow-slate-300">
                <CardHeader>
                  <CardTitle className="font-bold">{element.name}</CardTitle>
                  <CardDescription>
                    <p>{element.amount}</p>
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </CardContent>
      </Card>
      <div className="flex justify-between flex-wrap">
        <Card className="w-[100%] md:w-[49%]">
          <CardHeader>
            <CardTitle>Plots</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col flex-wrap gap-10">
            {plotsData.map((element) => {
              return (
                <div className="w-full">
                  <div className="flex justify-between w-full">
                    <Card className="w-full">
                      <CardHeader className="w-full">
                        <div className="flex justify-between w-full">
                          <h1 className="font-bold">{element.name}</h1>
                          <p>{element.amount}</p>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
        <div></div>
      </div>
    </div>
  );
}

export default page;
