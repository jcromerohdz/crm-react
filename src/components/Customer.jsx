import React from 'react';

const Customer = ({ customer }) => {
  const { name, company, email, phone, notes, id} = customer


  return (
    <tr className='border-b hover:bg-slate-200'>
      <td className='p-3'>{name}</td>
      <td className='p-3'>
        <p><span className='text-slate-600 uppercase font-bold'>E-mail: </span>{email}</p>
        <p><span className='text-slate-600 uppercase font-bold'>Phone: </span>{phone}</p>
      </td>
      <td className='p-3'>{company}</td>
      <td className='p-3'>
        <button
          type='button'
          className='bg-blue-300 hover:bg-blue-500 block w-full text-white p-2 uppercase font-bold rounded-md text-xs mt-2'
        >
          Show
        </button>
        <button
          type='button'
          className='bg-slate-300 hover:bg-slate-500 block w-full text-white p-2 uppercase font-bold rounded-md text-xs mt-2'
        >
          Edit
        </button>
        <button
          type='button'
          className='bg-red-300 hover:bg-red-500 block w-full text-white p-2 uppercase font-bold rounded-md text-xs mt-2'
        >
          Remove
        </button>
      </td>

    </tr>
  );
};

export default Customer;
