import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import HomeListing from "./HomeListing";
import ScheduleViewing from "./ScheduleViewing";
import Application from "./Application";
import Payment from "./Payment";
import CreateListingPage from "./CreateListingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="homelisting/:id" element={<HomeListing />}></Route>
        <Route path="scheduleviewing/:id" element={<ScheduleViewing />}></Route>
        <Route path="application/:id" element={<Application />}></Route>
        <Route path="payment" element={<Payment />}></Route>
        <Route path="create-listing" element={<CreateListingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
