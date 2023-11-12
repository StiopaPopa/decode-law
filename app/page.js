"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { createClient } from "@supabase/supabase-js";

export default function Home() {
  // SUPASBASE STUFF
  const supabaseUrl = "https://mbpakeqgzrqdxmioxflp.supabase.co";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [collegeStudent, setCollegeStudent] = useState(null);
  const [what, setWhat] = useState(null);
  const [customUsecase, setCustomUsecase] = useState(null);
  const [customPrice, setCustomPrice] = useState(null);
  const [past, setPast] = useState(null);
  const [struggle, setStruggle] = useState("");
  const [price, setPrice] = useState(null);

  return (
    <div className="w-screen h-screen bg-gradient-to-tr from-gray-900 to-indigo-800">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <h1 className="text-2xl text-center font-bold">
                    Join the beta waitlist!
                  </h1>
                  <div className="space-y-5">
                    <div className="mt-4 gap-x-6 gap-y-8">
                      <div className="">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="collegeStudent"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Are you a college student?
                      </label>
                      <div className="mt-2">
                        <select
                          id="collegeStudent"
                          name="collegeStudent"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          onChange={(e) => {
                            const option = e.target.value;
                            if (option == "Yes") {
                              setCollegeStudent(true);
                            } else {
                              setCollegeStudent(false);
                            }
                          }}
                        >
                          <option>--</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="feature"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What will you use DecodeLaw for?
                      </label>
                      <div className="mt-2">
                        <select
                          id="feature"
                          name="feature"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          onChange={(e) => {
                            const option = e.target.value;
                            if (option == "Other") {
                              setCustomUsecase(true);
                            } else {
                              setCustomUsecase(false);
                              setWhat(option);
                            }
                          }}
                        >
                          <option>--</option>
                          <option>
                            Detect threatening clauses in my lease
                          </option>
                          <option>
                            Convert the legal English to plain English
                          </option>
                          <option>Feel safe when signing my lease</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    {customUsecase && (
                      <div className="mt-4 gap-x-6 gap-y-8">
                        <div className="">
                          <label
                            htmlFor="custom-usecase"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Tell us about your use case.
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="custom-usecase"
                              id="first-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              onChange={(e) => setWhat(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="">
                      <label
                        htmlFor="past"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Have you struggled with rent contracts in the past?
                      </label>
                      <div className="mt-2">
                        <select
                          id="past"
                          name="past"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          onChange={(e) => {
                            const option = e.target.value;
                            if (option == "Yes") {
                              setPast(true);
                            } else {
                              setPast(false);
                            }
                          }}
                        >
                          <option>--</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>

                    {past && (
                      <div className="mt-4 gap-x-6 gap-y-8">
                        <div className="">
                          <label
                            htmlFor="explain-struggle"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Tell us more about those struggles.
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="explain-struggle"
                              id="first-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              onChange={(e) => setStruggle(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        How much would you be willing to pay to have ONE
                        contract analyzed?
                      </label>
                      <div className="mt-2">
                        <select
                          id="price"
                          name="price"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          onChange={(e) => {
                            const option = e.target.value;
                            if (option == "Other") {
                              setCustomPrice(true);
                            } else {
                              setCustomPrice(false);
                              setPrice(option);
                            }
                          }}
                        >
                          <option>--</option>
                          <option>$0</option>
                          <option>$1 to $5</option>
                          <option>$5 to $10</option>
                          <option>$10+</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {customPrice && (
                    <div className="mt-4 gap-x-6 gap-y-8">
                      <div className="">
                        <label
                          htmlFor="custom-price"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          What would you pay?
                        </label>
                        <div className="mt-2">
                          <input
                            type="number"
                            name="custom-price"
                            id="first-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-gradient-to-r from-indigo-900 to-gray-900 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={async (e) => {
                        e.preventDefault();
                        setOpen(false);
                        // console.log("Name: ", name);
                        // console.log("Email: ", email);
                        // console.log("College student: ", collegeStudent);
                        // console.log("Use case: ", what);
                        // console.log("Past struggle: ", past);
                        // console.log("Past struggle explanation: ", struggle);
                        // console.log("Price: ", price);
                        setOpenSuccess(true);
                        const { data, error } = await supabase
                          .from("waitlist")
                          .insert([
                            {
                              name,
                              email,
                              collegeStudent,
                              what,
                              past,
                              struggle,
                              price,
                            },
                          ]);
                        if (error) {
                          console.log(error);
                        }
                        if (data) {
                          console.log(data);
                        }
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="mx-4 max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Don’t Get F**ked By Your Lease Agreement
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Understand your rent contract in seconds for the price of a coffee.
            ☕
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => setOpen(true)}
              className="rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join the Waitlist
            </button>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      {/* BREAKER */}
      <Transition.Root show={openSuccess} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenSuccess}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:p-6">
                  <div>
                    <div className="text-center align-middle mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-semibold leading-6 text-gray-900"
                      >
                        You&apos;re on the waitlist 🎉
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-lg text-gray-500">
                          We&apos;ll reach out to you soon
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
