import React from 'react'
import SimpleTable from '@/components/SimpleTable'
import Card from '@/components/Card'
import PageHeader from '@/components/PageHeader'
import { FaMoneyBillAlt } from 'react-icons/fa'

const page = () => {
    const expenseData = [
        ["No.", "Expense Accounts", "Amount"],
        ["1", "Office Expense", "15,000"],
        ["2", "File Expense", "450,000"],
        ["3", "Total Expense", "465,000"],
      ];

    
  return (
    <div className="w-full flex flex-col gap-5">
      <Card>
        <PageHeader
        icon={<FaMoneyBillAlt className='text-4xl'/>}
        title="Expenses"
        />
      </Card>
      <Card>
        <div className='flex justify-end gap-2'>
            <button className="flex items-center bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded">
             Add Expense Account
            </button>
            <button className="flex items-center bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded">
             Expense List
            </button>
            <button className="flex items-center bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded">
             Daily Expense List
            </button>
        </div>
        <SimpleTable data={expenseData}/>
      </Card>
    </div>
  )
}

export default page
