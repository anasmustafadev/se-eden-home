import React from 'react'
import Card from '@/components/Card'
import Table from '@/components/Table'
import SimpleTable from '@/components/SimpleTable'
import PageHeader from '@/components/PageHeader'
import { FaChartBar } from 'react-icons/fa'

const page = () => {
    const allotmentData=[
        ["1","25-11-2024","Plot#1","Mudasir Ahmed","4.00M","250,000","1,000,000","100,000","15000","60(Monthly)"],
        ["2","27-4-2024","Plot#2","Anas Mustafa","4.00M","250,000","1,000,000","100,000","15000","45(Monthly)"]

    ]
    const headers=["ID","Date","Plot","Client Name","Area","Sale Rate","Price","Advance","Installment","No of Installments"]
    const buttons=allotmentData.map((i,k)=>(
        [
            { label: 'Stamp paper', className: 'bg-blue-500 text-white px-3 py-2 rounded mr-1', actionType: 'STAMPPAPER' },
        ]
    ))

    const report = [
        ["Sales Report", ""],
        ["Total Area", "47.49 Marla"],
        ["Sold Area", "5.56 Marla"],
        ["For Sale Area", "41.83 Marla"],
        ["Total Expenses", "465,000,000"],
      ];
    return (
    <div className="w-full flex flex-col gap-5">
      <Card>
        <PageHeader
        icon = {<FaChartBar className='text-4xl'/>}
        title="Allotments"
        />
      </Card>
      <Card>
      <div className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <button className="flex items-center bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded">
        Add New Allotment
      </button>
      <button className="flex items-center bg-green-500 hover:opacity-90 text-white py-2 px-4 rounded">
        Add Advance
      </button>
      <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
        Add Installment
      </button>
      <button className="flex items-center bg-green-500 hover:opacity-90 text-white py-2 px-4 rounded">
        Add Multi Installment
      </button>
      <button className="flex items-center bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded">
        Sale Report
      </button>
      <button className="flex items-center bg-blue-700 hover:opacity-90 text-white py-2 px-4 rounded">
        Defaulters SMS Client wise
      </button>
      <button className="flex items-center bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded">
        Defaulter Report
      </button>
      </div>
      <div className='flex gap-2'>
      <button className="flex items-center bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded">
        List of Installments
      </button>
      <button className="flex items-center bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded">
        Plot wise Sale Report
      </button>
      <button className="flex items-center bg-red-500 hover:opacity-90 text-white py-2 px-4 rounded">
        Cancel Allotment
      </button>
      <button className="flex items-center bg-red-500 hover:opacity-90 text-white py-2 px-4 rounded">
        Add Return Amount
      </button>
      <button className="flex items-center bg-red-500 hover:opacity-90 text-white py-2 px-4 rounded">
        Delete Permanent Allotment With data
      </button>
      </div>
      </div>
        <Table data={allotmentData} headers={headers} buttons={buttons}/>
        <SimpleTable data={report} />
      </Card>
    </div>
  )
}

export default page
