import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axiox from "axios";

const Login = ({ setLogoutUser }) => {
    const history = useNavigate();

    const [input, setInput] = React.useState({userName: '', password: '' });

	const [errorMessage, seterrorMessage] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');

	const handleChange = e => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	React.useEffect(()=>{
		if(localStorage.getItem('auth')) history('/')
	},[])

        
        const login = (e) => {
            e.preventDefault();
            setsuccessMessage('');
            // setsuccessMessage('Successfully Validated');
            if(input.userName !== 'foo' || input.password !== 'bar') return seterrorMessage('Invalid email or password');
    
            history('/')
            localStorage.setItem('auth', true)
        };
  return (
    <form 
    noValidate
    autoComplete="off"
    onSubmit={login}>
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Login </h1>
				</div>
                {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
				)}
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input autoComplete="off" 
                            id="email" 
                            name="userName" 
                            type="text" 
                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                            placeholder="User Name" 
                            onChange={handleChange}
                            />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">User Name</label>
						</div>
						<div className="relative">
							<input autoComplete="off" 
                            id="password" 
                            name="password" 
                            type="password" 
                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                            placeholder="Password" 
                            onChange={handleChange}
                            />
							<label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div className="relative">
							<button
                            type='submit' 
                            className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</form>
  )
}

export default Login