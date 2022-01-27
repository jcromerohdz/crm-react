import FormCustomer from "../components/FormCustomer";

const NewCustomer = () => {
  return (
    <>
      <h1 className="font-medium text-4xl text-slate-500">New Costumer</h1>
      <p className='mt-3'>Filled up the following fields to create a new customer</p>


      <FormCustomer />
      
    </>
  ) 
};

export default NewCustomer;
