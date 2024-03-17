import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ScheduleViewing from "./ScheduleViewing";
import Application from "./Application";
import Payment from "./Payment";
import CreateListingPage from "./CreateListingPage";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import ContactUs from "./ContactUs";
import Detail from "./Detail";
import Listing from "./Listing";
import NotFound from "./NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="detail/:id" element={<Detail />}></Route>
        <Route path="scheduleviewing/:id" element={<ScheduleViewing />}></Route>
        <Route path="application/:id" element={<Application />}></Route>
        <Route path="payment" element={<Payment />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<RegistrationPage />}></Route>
        <Route path="contact" element={<ContactUs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="listings" element={<Listing />}></Route>

        <Route path="create-listing" element={<CreateListingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
