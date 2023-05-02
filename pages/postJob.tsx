import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import ReactSlidy from 'react-slidy'
import person from '/assets/person1.png'
import 'react-slidy/lib/styles.css'
import Image from "next/image"
import * as Yup from 'yup';
import { Form , Field , Formik , ErrorMessage, FormikHelpers} from 'formik';
import React from 'react'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

interface MyFormValues {
  companyName: string;
  companyWebsite: string;
  companyEmail: string;
  jobTitle: string;
  jobType: string;
  Qualification: string;
  jobDescription: string;
  experience: string;
  salaryRange: string;
  jobCategory: string;
  jobLocation: string;
}


  const postJobSchema = Yup.object().shape({
      companyName: Yup.string()
          .required('Please enter a valid company name')
          .min(5,'please enter at least 05 characters')
          .max(50,'You should not pass 50 characters'),
      companyWebsite: Yup.string()
          .required('Please enter a valid company name')
          .min(10,'please enter at least 03 characters')
          .max(50,'You should not pass 50 characters'),
      companyEmail: Yup.string()
        .email('Invalid email')
        .required('Required'),
      jobTitle: Yup.string()
        .required('Please enter a valid company name')
        .min(5,'please enter at least 05 characters')
        .max(50,'You should not pass 50 characters'),
      jobType: Yup.string()
        .required('Please enter a valid company name')
        .min(5,'please enter at least 05 characters')
        .max(50,'You should not pass 50 characters'),
      jobCategory: Yup.string()
        .required('Please enter a valid company name')
        .min(5,'please enter at least 05 characters')
        .max(50,'You should not pass 50 characters'),
      jobLocation: Yup.string()
        .required('Please enter a valid company name')
        .min(5,'please enter at least 05 characters')
        .max(50,'You should not pass 50 characters'),
      salaryRange: Yup.string()
        .required('Please enter a valid salary range')
        .min(5,'please enter at least 05 characters')
        .max(50,'You should not pass 50 characters'),
      experience: Yup.string()
        .required('Please enter a valid experience')
        .min(5,'please enter at least 05 characters')
        .max(50,'You should not pass 50 characters'),
      Qualification: Yup.string()
        .required('Please enter a valid qualification')
        .min(5,'please enter at least 05 characters')
        .max(50,'You should not pass 50 characters'),
      jobDescription: Yup.string()
        .required('Please enter a valid job description')
        .min(5,'please enter at least 05 characters')
        .max(50,'You should not pass 50 characters'),
})

export const PostJob: React.FC<{}> = () => {

  const initialValues: MyFormValues = { 
    companyName: '', 
    companyWebsite:"",
    companyEmail:"" ,
    jobDescription:"",
    Qualification:"",
    salaryRange:"",
    jobTitle:"",
    jobType:"",
    experience:"",
    jobCategory:"",
    jobLocation:""
  };

  return (
    <>
      <NavBar />
      <ReactSlidy fullHeight imageObjectFit="contain" useFullWidth={false}>
        <Image src="/assets/person0.png" alt="bolo" width={400} height={400} />
        <Image src="/assets/person5.png" alt="bolo" width={400} height={400} />
        <Image src="/assets/person0.png" alt="bolo" width={400} height={400} />
        <Image src="/assets/person5.png" alt="bolo" width={400} height={400} />
      </ReactSlidy>
      {/* <!-- ====== Form Elements Section Start --> */}
      <Formik 
        initialValues={initialValues}
        validationSchema={postJobSchema}
         onSubmit={(values, actions) => {
           console.log({ values, actions });
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);

         }}
        
      >
        {({ errors, touched }) => (

          <Form>

      <section className="mx-10 pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      
        <div className="container mx-auto p-15">
        <h1 className="text-2xl font-medium uppercase">Fill this formular</h1>
        <div className="bg-blue-500 w-20 h-1 mt-1 mb-10"></div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-blue-500">
                  Company Name
                </label>
                <Field 
                  id="companyName" 
                  name="companyName" 
                  placeholder="Beyond technologies" 
                  className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                  />
                  {errors.companyName && touched.companyName ? (<div className='text-red-700 p-1 font-semibold'>{errors.companyName}</div>) : null}
                  <ErrorMessage name="name" />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-blue-500">
                  Company Website
                </label>
                <Field 
                  id="companyWebsite" 
                  name="companyWebsite" 
                  placeholder="www.beyondtechsarl.com" 
                  className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                  />
                  {errors.companyWebsite && touched.companyWebsite ? (<div className='text-red-700 p-1 font-semibold'>{errors.companyWebsite}</div>) : null}
                  <ErrorMessage name="name" />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-blue-500">
                  Company Email
                </label>
                <Field 
                  id="companyEmail" 
                  name="companyEmail" 
                  placeholder="beyondtechsarl@gmail.com" 
                  className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                  />
                  {errors.companyEmail && touched.companyEmail ? (<div className='text-red-700 font-semibold p-1'>{errors.companyEmail}</div>) : null}
                  <ErrorMessage name="name" />
              </div>
            </div>
            
            <div className="w-full px-4 lg:w-6/12">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-blue-500">
                  Job Category
                </label>
                <div className="relative">
                  <select className="border-form-stroke text-body-color focus:border-primary active:border-primary w-full appearance-none rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]">
                    <option value="">Technology</option>
                    <option value="">Design</option>
                    <option value="">Marketing</option>
                    <option value="">Trading</option>
                    <option value="">Agriculture</option>
                  </select>
                  <span className="border-body-color absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2"></span>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-blue-500">
                  Job Type
                </label>
                <div className="relative">
                  <select className="border-form-stroke text-body-color focus:border-primary active:border-primary w-full appearance-none rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]">
                    <option value="">Full Time</option>
                    <option value="">Part Time</option>
                    <option value="">Week Time</option>
                    <option value="">Season Time</option>
                    <option value="">Evening Time</option>
                  </select>
                  <span className="border-body-color absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2"></span>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-8/12">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-blue-500">
                  Job Location
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  className="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              {errors.Qualification && touched.Qualification ? (<div className='text-red-700 p-1 font-semibold'>{errors.Qualification}</div>) : null}
              <ErrorMessage name="name" />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-4/12">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black">
                  Salary Range
                </label>
                <input
                  type="text"
                  placeholder="Salary Range"
                  className="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                  />
              {errors.salaryRange && touched.salaryRange ? (<div className='text-red-700 p-1 font-semibold'>{errors.salaryRange}</div>) : null}
              <ErrorMessage name="name" />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-5/12">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-blue-500">
                  Experience
                </label>
                <input
                  type="text"
                  placeholder="Experience"
                  className="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              {errors.experience && touched.experience ? (<div className='text-red-700 p-1 font-semibold'>{errors.experience}</div>) : null}
              <ErrorMessage name="name" />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-7/12">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-blue-500">
                  Qualification
                </label>
                <input
                  type="text"
                  placeholder="Qualification"
                  className="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                  />
              {errors.Qualification && touched.Qualification ? (<div className='text-red-700 p-1 font-semibold'>{errors.Qualification}</div>) : null}
              <ErrorMessage name="name" />
              </div>
            </div>
            <div className="lg:w-12/12 w-full px-4 md:w-1/2">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-blue-500">
                  Job Description
                </label>
                <textarea
                  rows={8}
                  placeholder="Job Description"
                  className="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary resize-none rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD] max-sm:w-full sm:w-[1020px] md:w-full lg:w-[1020px] xl:w-[1280px]"
                  ></textarea>
              {errors.jobDescription && touched.jobDescription ? (<div className='text-red-700 p-1 font-semibold'>{errors.jobDescription}</div>) : null}
                  <ErrorMessage name="name" />
              </div>
            </div>
          </div>
          <div className="flex w-full">
                  <div className='mx-auto'>
                    <button 
                        type="submit"
                        className="
                              w-24
                              text-body-color
                              p-2
                              bg-blue-500
                              active:bg-blue-300
                              hover:bg-blue-400 
                              text-gray-800
                              rounded-md
                                "
                        >Submit
                    </button>
                  </div>
                  <div className='mx-auto'>
                    <button 
                        type="submit"
                        className="
                                w-24
                                text-body-color
                                p-2
                                bg-red-500
                                active:bg-red-300
                                hover:bg-red-400 
                                text-gray-800
                                rounded-md
                                
                                "
                        >Cancel
                    </button>
                  </div>
               </div> 
          </div>
      </section>
    </Form>
    )}
    </Formik>
      {/* <!-- ====== Form Elements Section End --> */}
      <Footer />
    </>
  );
}


export default PostJob;