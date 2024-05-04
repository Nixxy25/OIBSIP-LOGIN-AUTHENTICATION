import { useState } from "react"
import { Link } from "react-router-dom"

const SignupPage = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
        <div className="px-20 py-10 h-screen w-full flex  flex-col gap-10">
            <div className="flex items-center justify-between">
                <p className="font-bold text-2xl"><span className="text-purple-600">O</span>IBSIP</p>

                <p className="text-lg">Already Registered? <span className="text-purple-600">
                    <Link to="/">
                        Sign In
                    </Link>
                </span></p>
            </div>

            <div className="flex justify-between gap-4 items-center">
                <div className="w-full none "><img src="/src/assets/loginpage.png" className="w-54"></img></div>

                <div className="flex flex-col w-full gap-10">
                    <div>
                        <p className="text-3xl font-bold pb-1">Welcome</p>
                        <p className="text-gray-400">SignUp to continue</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex gap-2 border-2 border-purple-600 p-2 px-4">
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="purple" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                            <input 
                                className="w-full p-2 outline-none" 
                                type="text" 
                                placeholder="FirstName"
                                value={fName}
                                onChange={(e) => setFName(e.target.value)}
                            />
                        </div>

                        <div className="flex gap-2 border-2 border-purple-600 p-2 px-4">
                            <svg className="w-4" fill="purple"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                            <input 
                                className="w-full p-2 outline-none" 
                                type="text" 
                                placeholder="LastName"
                                value={ lName}
                                onChange={(e) => setLName(e.target.value)}
                            />
                        </div>

                        <div className="flex gap-2 border-2 border-black p-2 px-4">
                            <svg className="w-5" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                            <input 
                                className="w-full p-2 outline-none" 
                                type="email" 
                                placeholder="username101@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="flex gap-2 border-2 border-black p-2 px-4">
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                            <input 
                                type="text" 
                                className="p-2 outline-none" 
                                placeholder="Email Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div><button className="bg-blue-600 rounded-md px-10 rounded-full py-3 text-lg text-white" type="button">SIGN UP</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignupPage