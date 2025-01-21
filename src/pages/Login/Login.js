import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email === "admin@gmail.com" && password === "123456") {
            alert("Login successfully");
            navigate("/admin/dashboard");
        }
        else if(email === "user@gmail.com" && password === "123456") {
            alert("Login successfully");
            navigate("/user/dashboard")
        }
        else {
            alert("Wrong email or password");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <input type = "email" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com"></input>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Password</label>
                    <input type="password" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*******"></input>
                </div>
                <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Đăng nhập</button>
            </form>
        </div>
    );
}