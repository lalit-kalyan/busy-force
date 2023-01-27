import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import AdminHome from "./admin_components/admin_Home/AdminHome";
import MemberList from "./admin_components/membersList/MemberList";
import Treasury from "./admin_components/treasury/Treasury";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import AdminRegister from "./admin_components/adminRegister/AdminRegister";
import EditAdmin from "./admin_components/editAdmin/EditAdmin";
import EditMember from "./admin_components/editMember/EditMember";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminHome />}>
          <Route path="member-list" element={<MemberList />} />
          <Route path="treasury" element={<Treasury />} />
          <Route path="adminRegister" element={<AdminRegister />} />
          <Route path="adminEdit" element={<EditAdmin />} />
          <Route path="editMember" element={<EditMember />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
