import React from 'react'
import Card from '@/components/Card'
import PageHeader from '@/components/PageHeader'
import { FaBook } from 'react-icons/fa'
import Table from '@/components/Table'
import { FaPlus } from 'react-icons/fa'

const page = () => {
    const ledgerData = [
        ["1", "Investors", "-", "400,000","0.00"],
        ["2", "Buyer", "1,788,000", "-","0.00"],
        ["3", "Employee", "10,000", "-","0.00"],
      ];
    const headers=["No.", "Account Book Name", "Debit", "Credit","Balance"]
    const buttons = ledgerData.map((i,k)=>(
                [
                    { label: 'Detail', className: 'bg-blue-500 text-white px-3 py-2 rounded mr-1', actionType: 'DETAIL' },
                ]
            ))
  return (
    <div className="w-full flex flex-col gap-5">
    <Card>
        <PageHeader
        icon={<FaBook className='text-4xl'/>}
        title="Account Books"
        />
    </Card>
    <Card>
    <div className='flex justify-end gap-2'>
      <button className="flex items-center bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded">
        <FaPlus className="mr-2" />
        New Ledger
      </button>
      <button className="flex items-center bg-red-500 hover:opacity-90 text-white py-2 px-4 rounded">
        Cash Payment
      </button>
      <button className="flex items-center bg-green-500 hover:opacity-90 text-white py-2 px-4 rounded">
        Cash Received
      </button>
      <button className="flex items-center bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded">
        Trial Balance
      </button> 
      <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
        Balance Sheet
      </button>
      <button className="flex items-center bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded">
        Daily Cash
      </button> 
      </div>
        <Table data={ledgerData} headers={headers} buttons={buttons}/>
    </Card>
    </div>
  )
}

export default page
