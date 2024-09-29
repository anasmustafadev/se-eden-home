"use client";
import React from 'react';

interface ButtonConfig {
  label: string;
  className: string;
  actionType: string; 
}

interface TableProps {
  data: string[][];
  headers: string[];
  buttons: ButtonConfig[][];
}

function Table({ data, headers, buttons }:TableProps) {
  const handleButtonClick = (rowIndex: number, actionType: string) => {
    if (actionType === "RECEIVE") {
      console.log(`Cash Receive for row ${rowIndex}`);
    } else if (actionType === "DETAIL") {
      console.log(`Detail for row ${rowIndex}`);
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    {headers.map((header, index) => (
                      <th
                        scope="col"
                        key={index}
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        {header}
                      </th>
                    ))}
                    <th className="text-sm font-medium text-center text-gray-900 px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-900"
                        >
                          {cell}
                        </td>
                      ))}
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                        {buttons[rowIndex].map((button, buttonIndex) => (
                          <button
                            key={buttonIndex}
                            className={button.className}
                            onClick={() => handleButtonClick(rowIndex, button.actionType)} // Call handleButtonClick with rowIndex and actionType
                          >
                            {button.label}
                          </button>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
