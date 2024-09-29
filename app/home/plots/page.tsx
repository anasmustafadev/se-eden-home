
import React from 'react'
import Card from '@/components/Card'
import PageHeader from '@/components/PageHeader'
import { MdLandscape } from 'react-icons/md'
import Table from '@/components/Table'
import { FaPlus, FaPrint } from 'react-icons/fa';


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
      const headers = ["No.",
          "Plot",
          "Area",
          "Size",
          "Rate",
          "Amount",
          "Advance",
          "Installment",
          "No of Installments"];
          const buttons = 
            plotData.map((i,k)=>(
                [
                    { label: 'Detail', className: 'bg-blue-500 text-white px-3 py-2 rounded mr-1', actionType: 'DETAIL' },
                ]
            ))
          
  return (
    <div>
      <div className="w-full flex flex-col gap-5">
        <Card>
            <PageHeader 
            icon={<MdLandscape className='text-4xl'/>}
            title="Plots"
            />
        </Card>
        <Card>
        <div className='flex gap-2'>
        <button className="flex items-center bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded">
        <FaPlus className="mr-2" />
        Add Plot
      </button>

      <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
        <FaPrint className="mr-2" />
        Print
      </button>
      </div>
          <Table data={plotData} headers={headers} buttons={buttons}/>
        </Card>
      </div>
    </div>
  )
}

export default page
