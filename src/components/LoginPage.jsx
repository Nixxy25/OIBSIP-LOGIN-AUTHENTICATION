import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="px-20 py-10 h-screen w-full">
        <div className="flex items-center justify-between">
            <p className="font-bold text-2xl"><span className="text-purple-600">O</span>IBSIP</p>

            <p className="text-lg">New User? <span className="text-purple-600">
            <Link to="/signup">
                Sign Up
            </Link>
            </span></p>
        </div>

        <div className="flex justify-between gap-4 items-center">
            <div className="w-full none"><img src="/src/assets/loginpage.png" className="w-54"></img></div>

            <div className="flex flex-col w-full gap-10">
                <div>
                    <p className="text-3xl font-bold pb-1">Welcome Back!</p>
                    <p className="text-gray-400">Login to continue</p>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 border-2 border-purple-600 p-2 px-4">
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                        <input className="w-full p-2 outline-none" type="text" placeholder="username101@gmail.com"></input>
                    </div>
                    <div className="flex gap-2 border-2 border-black p-2 px-4">
                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                        <input type="text" className="p-2 outline-none" placeholder="Email Password"></input>
                    </div>
                </div>

                <div><button className="bg-blue-600 rounded-md px-10 rounded-full py-3 text-lg text-white" type="button">LOGIN</button></div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage;