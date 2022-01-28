import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormCustomer from "../components/FormCustomer";

const EditCustomer = () => {
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
   <>
      <h1 className="font-medium text-4xl text-slate-500">Edit Costumer</h1>
      <p className='mt-3'>You can edit customer info with this form.</p>

      {customer?.name ? (
        <FormCustomer 
          customer={customer}
          loading={loading}
        />
      ): <p>Customer ID not Found!!!</p>}
      
    </>
  ) 
};

export default EditCustomer;
