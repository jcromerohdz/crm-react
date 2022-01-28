import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Customer from '../components/Customer';
import Spinner from '../components/Spinner';

const ShowCustomer = () => {

  const {id} = useParams()
  
  const [customer, setCustumer] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCustomerAPI = async () => {
      try {
        const url = `http://localhost:4000/customers/${id}`
        const response = await fetch(url)
        const result = await response.json() 
        console.log(result)

        setCustumer(result)
        
      } catch (error) {
        console.log(error)
      }

      setLoading(false)

    }

    getCustomerAPI()

  }, [])


  return (

    loading ? <Spinner /> : Object.keys(customer).length === 0 ? <p>There is no results.</p> : (

  
      <div>

          <>
            <h1 className="font-medium text-4xl text-slate-500">Show Customer</h1>
            <p className='mt-3'>Customer Information</p>

            <p className='text-xl text-slate-600 mt-8'>
              <span className='uppercase font-bold'>Customer: </span>
              {customer.name}
            </p>
            <p className='text-xl text-slate-600 mt-2'>
              <span className='uppercase font-bold'>E-mail: </span>
              {customer.email}
            </p>
            <p className='text-xl text-slate-600 mt-2'>
              <span className='uppercase font-bold'>Phone: </span>
              {customer.phone}
            </p>
            <p className='text-xl text-slate-600 mt-2'>
              <span className='uppercase font-bold'>Company: </span>
              {customer.company}
            </p>
            {customer.notes && (
              <p className='text-xl text-slate-600 mt-2'>
                <span className='uppercase font-bold'>Notes: </span>
                {customer.notes}
              </p>
            )}
          </>
       
      </div>
    ) 
  )
};

export default ShowCustomer;
