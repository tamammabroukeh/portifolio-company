import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ContactUs from "./components/ContactUs/ContactUs";
import Payment from "./components/Payment/Payment";
import PaymentWithPaytm from "./components/PaymentWithPaytm/PaymentWithPaytm";
import SendMessage from "./components/SendMessage/SendMessge";
import AboutUs from "./components/AboutUs/AboutUs";
import FAQ from "./components/FAQ`S/FAQ";
import Services from "./components/Services/Services";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Welcome />} />
      <Route path="login" element={<Login />} />
      <Route path="sign" element={<SignUp />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="payment" element={<Payment />} />
      <Route path="paymentwithpaytm" element={<PaymentWithPaytm />} />
      <Route path="sendmessage" element={<SendMessage />} />
      <Route path="about" element={<AboutUs />} />
    </Route>
  )
);
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="login" element={<Login />} />
          <Route path="sign" element={<SignUp />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="payment" element={<Payment />} />
          <Route path="paymentwithpaytm" element={<PaymentWithPaytm />} />
          <Route path="contact/sendmessage" element={<SendMessage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="about" element={<FAQ />} />
          <Route path="about" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
