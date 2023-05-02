import Footer from "@/components/Footer"
import NavBar from "@/components/Navbar"
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik"
import { Inter } from "next/font/google"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import ReactSlidy from "react-slidy"
import "react-slidy/lib/styles.css"
import * as Yup from "yup"
import person from "/assets/person1.png"

const inter = Inter({ subsets: ["latin"] })

interface MyFormValues {
  companyName: string
  companyWebsite: string
  companyEmail: string
  jobTitle: string
  jobType: string
  Qualification: string
  jobDescription: string
  experience: string
  salaryRange: string
  jobCategory: string
  jobLocation: string
}

const postJobSchema = Yup.object().shape({
  companyName: Yup.string()
    .required("Please enter a valid company name")
    .min(5, "please enter at least 05 characters")
    .max(50, "You should not pass 50 characters"),
  companyWebsite: Yup.string()
    .required("Please enter a valid company name")
    .min(10, "please enter at least 03 characters")
    .max(50, "You should not pass 50 characters"),
  companyEmail: Yup.string().email("Invalid email").required("Required"),
  jobTitle: Yup.string()
    .required("Please enter a valid company name")
    .min(5, "please enter at least 05 characters")
    .max(50, "You should not pass 50 characters"),
  jobType: Yup.string()
    .required("Please enter a valid company name")
    .min(5, "please enter at least 05 characters")
    .max(50, "You should not pass 50 characters"),
  jobCategory: Yup.string()
    .required("Please enter a valid company name")
    .min(5, "please enter at least 05 characters")
    .max(50, "You should not pass 50 characters"),
  jobLocation: Yup.string()
    .required("Please enter a valid company name")
    .min(5, "please enter at least 05 characters")
    .max(50, "You should not pass 50 characters"),
  salaryRange: Yup.string()
    .required("Please enter a valid salary range")
    .min(5, "please enter at least 05 characters")
    .max(50, "You should not pass 50 characters"),
  experience: Yup.string()
    .required("Please enter a valid experience")
    .min(5, "please enter at least 05 characters")
    .max(50, "You should not pass 50 characters"),
  Qualification: Yup.string()
    .required("Please enter a valid qualification")
    .min(5, "please enter at least 05 characters")
    .max(50, "You should not pass 50 characters"),
  jobDescription: Yup.string()
    .required("Please enter a valid job description")
    .min(5, "please enter at least 05 characters")
    .max(50, "You should not pass 50 characters"),
})

export const PostJob: React.FC<{}> = () => {
  const initialValues: MyFormValues = {
    companyName: "",
    companyWebsite: "",
    companyEmail: "",
    jobDescription: "",
    Qualification: "",
    salaryRange: "",
    jobTitle: "",
    jobType: "",
    experience: "",
    jobCategory: "",
    jobLocation: "",
  }

  return (
    <>
      <Head>
        <title>Post Jobs | Bolo</title>
        <meta name="description" content="Bolo - Find your dream job" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="my-20">
        <ReactSlidy fullHeight imageObjectFit="contain" useFullWidth={false}>
          <Image
            src="/assets/person0.png"
            alt="bolo"
            width={400}
            height={400}
          />
          <Image
            src="/assets/person5.png"
            alt="bolo"
            width={400}
            height={400}
          />
          <Image
            src="/assets/person0.png"
            alt="bolo"
            width={400}
            height={400}
          />
          <Image
            src="/assets/person5.png"
            alt="bolo"
            width={400}
            height={400}
          />
        </ReactSlidy>
        {/* <!-- ====== Form Elements Section Start --> */}
        <Formik
          initialValues={initialValues}
          validationSchema={postJobSchema}
          onSubmit={(values, actions) => {
            console.log({ values, actions })
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <section className="mx-10 pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
                <div className="p-15 container mx-auto">
                  <h1 className="text-2xl font-medium uppercase">
                    Fill this formular
                  </h1>
                  <div className="mb-10 mt-1 h-1 w-20 bg-blue-500"></div>
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
                        {errors.companyName && touched.companyName ? (
                          <div className="p-1 font-semibold text-red-700">
                            {errors.companyName}
                          </div>
                        ) : null}
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
                        {errors.companyWebsite && touched.companyWebsite ? (
                          <div className="p-1 font-semibold text-red-700">
                            {errors.companyWebsite}
                          </div>
                        ) : null}
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
                        {errors.companyEmail && touched.companyEmail ? (
                          <div className="p-1 font-semibold text-red-700">
                            {errors.companyEmail}
                          </div>
                        ) : null}
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
                        {errors.Qualification && touched.Qualification ? (
                          <div className="p-1 font-semibold text-red-700">
                            {errors.Qualification}
                          </div>
                        ) : null}
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
                        {errors.salaryRange && touched.salaryRange ? (
                          <div className="p-1 font-semibold text-red-700">
                            {errors.salaryRange}
                          </div>
                        ) : null}
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
                        {errors.experience && touched.experience ? (
                          <div className="p-1 font-semibold text-red-700">
                            {errors.experience}
                          </div>
                        ) : null}
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
                        {errors.Qualification && touched.Qualification ? (
                          <div className="p-1 font-semibold text-red-700">
                            {errors.Qualification}
                          </div>
                        ) : null}
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
                        {errors.jobDescription && touched.jobDescription ? (
                          <div className="p-1 font-semibold text-red-700">
                            {errors.jobDescription}
                          </div>
                        ) : null}
                        <ErrorMessage name="name" />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="mx-auto">
                      <button
                        type="submit"
                        className="
                              text-body-color
                              w-24
                              rounded-md
                              bg-blue-500
                              p-2
                              text-gray-800 
                              hover:bg-blue-400
                              active:bg-blue-300
                                "
                      >
                        Submit
                      </button>
                    </div>
                    <div className="mx-auto">
                      <button
                        type="submit"
                        className="
                                text-body-color
                                w-24
                                rounded-md
                                bg-red-500
                                p-2
                                text-gray-800 
                                hover:bg-red-400
                                active:bg-red-300
                                
                                "
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </Form>
          )}
        </Formik>
        {/* <!-- ====== Form Elements Section End --> */}
      </main>
      <Footer />
    </>
  )
}

export default PostJob
