import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/Signup";
import Navbar from "./Components/Navbar";
import LoginForm from "./Pages/Login";
import Index from "./Pages/Index";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<SignUp/>}/>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/index" element={<Index/>}/>
      <Route path="*" element={<h1 className="max-w-full mx-auto max-y-full my-auto px-6 py-6 text-lg text-red-500">Not Found </h1>}/>
      
    </Routes>
   </BrowserRouter>
</>
  );
}

export default App;
