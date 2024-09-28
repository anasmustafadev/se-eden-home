import React from 'react'
import { IoIosPerson } from 'react-icons/io'
import Card from '@/components/Card'
import PageHeader from '@/components/PageHeader'
import { FaSave,FaPlus } from 'react-icons/fa'
import Table from '@/components/Table'


const page = () => {
    const userData = [
        ["1", "Anas Mustafa", "0343123123", "Lahore", "ANAS", "********"],
        ["2", "Mudassir", "0343126153", "Lahore", "MUDASSIR", "********"],
        ["3", "AbdulRehman", "0325673123", "Lahore", "ABDULREHMAN", "********"],
      ];
    const headers=["No.", "Name", "Phone Number", "Address", "Admin", "Password"]
    const buttons = userData.map((i,k)=>(
                [
                    { label: 'Update', className: 'bg-blue-500 text-white px-3 py-2 rounded mr-1', actionType: 'UPDATE' },
                ]
            ))
  return (
    <div className="w-full flex flex-col gap-5">
      <Card>
        <PageHeader
        icon={<IoIosPerson className='text-4xl'/>}
        title="Profile"
        />
      </Card>
      <Card>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-2'>
          <input
            type="Name"
            name="name"
            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Full Name"
          />
          <input
            type="phone"
            name="phone"
            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Phone Number"
          />
         </div>
         <div className='flex gap-2'>
          <input
            type="text"
            name="username"
            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Password"
          />
          </div>
          <input
            type="text"
            name="address"
            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Address"
          />
       </div>
       <button className="flex items-center mt-5 bg-green-500 hover:opacity-90 text-white py-2 px-4 rounded">
        <FaSave className='mr-2'/>
        Save
      </button>
      </Card>
      <Card>
        <h1 className='text-2xl'>Users</h1>
        <Table data={userData} headers={headers} buttons={buttons}/>
        <button className="flex items-center mt-5 bg-blue-500 hover:opacity-90 text-white py-2 px-4 rounded">
        <FaPlus className='mr-2'/>
         Add User
      </button>
      </Card>
    </div>
  )
}

export default page
