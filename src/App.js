import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminHome from "./admin_components/admin_Home/AdminHome";
import MemberList from "./admin_components/membersList/MemberList";
import Treasury from "./admin_components/treasury/Treasury";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import AdminRegister from "./admin_components/adminRegister/AdminRegister";
import EditAdmin from "./admin_components/editAdmin/EditAdmin";
import EditMember from "./admin_components/editMember/EditMember";
import { useSelector } from "react-redux";
import AdminLogin from "./admin_components/adminLogin/AdminLogin";

function App() {
  const member = useSelector((state) => state.member.currentMember);
  const admin = useSelector((state) => state.member.currentAdmin);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={!member ? <Register /> : <Navigate to="/" replace />}
        />
        <Route
          path="/login"
          element={!member ? <Login /> : <Navigate to="/" replace />}
        />
        <Route path="/admin" element={<AdminHome />}>
          <Route path="member-list" element={<MemberList />} />
          <Route path="treasury" element={<Treasury />} />
          <Route path="adminRegister" element={<AdminRegister />} />
          <Route path="adminEdit" element={<EditAdmin />} />
          <Route path="editMember" element={<EditMember />} />
        </Route>
        <Route path="adminLogin" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
