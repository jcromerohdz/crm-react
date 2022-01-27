import React from 'react';
import { Formik, Form, Field} from 'formik'

const FormCustomer = () => {

  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
      <h1 className='text-slate-500 font-bold text-xl uppercase text-center'>Create Customer</h1>

      <Formik
        initialValues={{
          name: '',
          company: '',
          email: '',
          phone: '',
          notes: '',
        }}
        onSubmit={ (values) => {
            console.log(values)
            handleSubmit(values)
          }
        }
      >
        {() => (

          <Form
            className='mt-10'
          >
            <div className='mb-4'>
              <label
                className='text-gray-800'
                htmlFor='name'
              >
                Name:
              </label>
              <Field 
                id="name"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Customer Name"
                name="name"
              />
            </div>
            <div className='mb-4'>
              <label
                className='text-gray-800'
                htmlFor='company'
              >
                Company:
              </label>
              <Field 
                id="company"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Customer Company"
                name="company"
              />
            </div>
            <div className='mb-4'>
              <label
                className='text-gray-800'
                htmlFor='email'
              >
                E-mail:
              </label>
              <Field 
                id="email"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Customer E-mail"
                name="email"
              />
            </div>
            <div className='mb-4'>
              <label
                className='text-gray-800'
                htmlFor='phone'
              >
                Phone:
              </label>
              <Field 
                id="phone"
                type="tel"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Customer Phone Number"
                name="phone"
              />
            </div>
            <div className='mb-4'>
              <label
                className='text-gray-800'
                htmlFor='notes'
              >
                Notes:
              </label>
              <Field 
                as="textarea"
                id="notes"
                type="tel"
                className="mt-2 block w-full p-3 bg-gray-50 h-40"
                placeholder="Notes"
                name="notes"
              />
            </div>

            <input 
              type="submit"
              value="Create Customer"
              className="mt-5 w-full bg-slate-500 p-3 uppercase font-bold text-lg text-white rounded-md hover:bg-slate-600"
            />
          </Form>
        )}
      </Formik>
    </div>
  ) 
};

export default FormCustomer;
