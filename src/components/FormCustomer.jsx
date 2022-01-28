import React from 'react';
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alert from './Alert';
import Spinner from './Spinner';

const FormCustomer = ({customer, loading}) => {
  const navigate = useNavigate()

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const newCustomerSchema = Yup.object().shape({
    name: Yup.string()
              .min(3, 'Customer Name is to short!')
              .max(45, 'Customer Name is to long!')
              .required('Customer Name is required!'),
    company: Yup.string()
                .required('Customer Company Name is required!'),
    email: Yup.string()
                .email('E-mail Is Not Valid!')
                .required('Customer E-mail is required!'),
    phone: Yup.string()
                .matches(phoneRegExp, 'Phone Is Not Valid!')
                .typeError('Phone Is Not Valid!')
                .required('Cutomer Phone is required!'),
    notes: '',
  })

  const handleSubmit = async (values) => {

    try{
      let response
      if(customer.id){
        console.log('Editing...')
        const url = `http://localhost:4000/customers/${customer.id}`

        response = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }else{
        console.log('New Customer')
        const url = 'http://localhost:4000/customers'

        response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        })

      }

      await response.json()
      navigate('/customers')
    }catch(error){
      console.log(error)
    }
  }

  return (
    loading ? <Spinner /> : (
      <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-slate-500 font-bold text-xl uppercase text-center'>
          {customer?.name ? 'Edit Customer' : 'Create Customer'}
          </h1>

        <Formik
          initialValues={{
            name: customer?.name ?? "",
            company: customer?.company ?? "",
            email: customer?.email ?? "",
            phone: customer?.phone ?? "",
            notes: customer?.notes ?? "",
          }}
          enableReinitialize={true}
          onSubmit={ async (values, {resetForm}) => {
              await handleSubmit(values)

              resetForm()
            }
          }
          validationSchema={newCustomerSchema}
        >
          {({errors, touched}) => {
            return (
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

                  { errors.name && touched.name ? (
                    <Alert>{errors.name}</Alert>
                  ): null}

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

                  { errors.company && touched.company ? (
                    <Alert>{errors.company}</Alert>
                  ): null}

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

                  { errors.email && touched.email ? (
                    <Alert>{errors.email}</Alert>
                  ): null}

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

                  { errors.phone && touched.phone ? (
                    <Alert>{errors.phone}</Alert>
                  ): null}

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
                  value={customer?.name ? 'Edit Customer' : 'Create Customer'}
                  className="mt-5 w-full bg-slate-500 p-3 uppercase font-bold text-lg text-white rounded-md hover:bg-slate-600"
                />
              </Form>
            )}
          }
        </Formik>
      </div>
    )
  ) 
};

FormCustomer.defaultProps = {
  customer: {},
  loading: false
}

export default FormCustomer;
