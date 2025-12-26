import React from "react";
import { Lock, Mail, User2Icon } from "lucide-react";
import api from "../configs/api";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");
  const dispatch = useDispatch();

  const [state, setState] = React.useState(urlState || "login");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post(`/api/users/${state}`, formData);
      dispatch(login(data));
      localStorage.setItem("token", data.token);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[var(--back-color)]">
        <form
          onSubmit={handleSubmit}
          className="sm:w-[350px] w-full text-center rounded-2xl px-8 border border-[#0096c7]/40 bg-[#0096c7]/25 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,150,199,0.37)]"
        >
          <h1 className="text-gray-900 text-3xl mt-10 font-semibold">
            {state === "login" ? "Login" : "Sign up"}
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Please {state} to continue
          </p>
          {state !== "login" && (
            <div className="flex items-center mt-6 w-full bg-[var(--back-color)] border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <User2Icon size={16} color="#6B7280" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border-none outline-none ring-0"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="flex items-center w-full mt-4 bg-[var(--back-color)] border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <Mail size={13} color="#6B7280" />
            <input
              type="email"
              name="email"
              placeholder="Email id"
              className="border-none outline-none ring-0"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center mt-4 w-full bg-[var(--back-color)] border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <Lock size={13} color="#6B7280" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-none outline-none ring-0"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4 text-left text-[var(--highlight-color)]">
            <button className="text-sm" type="reset">
              Forget password?
            </button>
          </div>
          <button
            type="submit"
            className="mt-2 w-full h-11 rounded-full text-white bg-blue-950 hover:opacity-90 transition-opacity"
          >
            {state === "login" ? "Login" : "Sign up"}
          </button>
          <p
            onClick={() =>
              setState((prev) => (prev === "login" ? "register" : "login"))
            }
            className="text-gray-600 text-sm mt-3 mb-11"
          >
            {state === "login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <a
              href="#"
              className="text-[var(--highlight-color)] hover:underline"
            >
              click here
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
