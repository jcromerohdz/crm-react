import { useState, useEffect} from 'react';
import Customer from '../components/Customer';

const Init = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const getCustumesAPI = async () => {
      try {
        const url = 'http://localhost:4000/customers'
        const response = await fetch(url)
        const result = await response.json()

        setCustomers(result)
        
      } catch (error) {
        console.log(error)
        
      }

    }
    getCustumesAPI()

  }, [])

  const handleDelete = async id => {
    console.log('Deleting....', id)
    const remove = confirm("Are you sure you want to delete this customer?")
    console.log(remove)

    if(remove){
      try {
        const url = `http://localhost:4000/customers/${id}`
        const response = await fetch(url, {
          method: 'DELETE'
        })

        await response.json()
        const arrayCustomers = customers.filter( customer => customer.id !== id)
        setCustomers(arrayCustomers)
      } catch (error) {
        console.log(error)
      }
    }
    
  }

  return (
    <>
      <h1 className="font-medium text-4xl text-slate-500">Customers</h1>
      <p className='mt-3'>Customers Management</p>

      <table
        className='w-full mt-5 table-auto shadow bg-white'
      >
        <thead className='bg-slate-500 text-white'>
          <tr>
            <th className='p-2'>Name</th>
            <th className='p-2'>Contact</th>
            <th className='p-2'>Company</th>
            <th className='p-2'>Actions</th>
          </tr>

        </thead>

        <tbody>
          {customers.map(customer => (
            <Customer 
              key={customer.id}
              customer={customer}
              handleDelete={handleDelete}
            />

          ))}

        </tbody>

      </table>
    </>
  ) 
};

export default Init;
