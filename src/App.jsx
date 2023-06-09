import React, { useState } from "react"
import './App.css'
import NavbarBasicPreview from './Components/Navbar'

function App() {
  const [state, setState] = useState({
    "id-l01": "",
  })

  const handleChange = evt => {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value,
    })
  }
  return (
    <>
      <NavbarBasicPreview />
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-12 gap-6 justify-center">
          <div className="col-span-3"></div>
          <div className="col-span-6">
            <div className="card py-150px">
              <div className="px-70px">
                < div className="relative my-3">
                  <input
                    id="id-l01"
                    type="text"
                    name="id-l01"
                    placeholder="your name"
                    value={state["id-l01"]}
                    className="peer relative h-12 w-full rounded border border-slate-200 px-4 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-green-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="id-l01"
                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-green-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                    Your name
                  </label>
                </div>
                <button className="inline-flex my-3 mb-100px h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-green-500 px-6 text-sm font-medium tracking-wide text-white shadow-lg shadow-green-200 transition duration-300 hover:bg-green-600 hover:shadow-md hover:shadow-green-200 active:bg-green-700 focus:shadow-md active:shadow-green-200 active-visible:outline-none disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300 disabled:shadow-none">
                  <span>Submit Your Name</span>
                </button>
              </div>
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200" cellspacing="0">
                  <tbody>
                    <tr>
                      <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Name</th>
                    </tr>
                    <tr>
                      <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">Ayub Salas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-span-3">
            </div>
          </div>
          <div className="col-span-3"></div>
        </div >
      </div >
    </>
  )
}

export default App
