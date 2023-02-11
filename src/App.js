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
import ImageUpload from "./admin_components/imageUpload/ImageUpload";
import MemberDetails from "./admin_components/memberDetails/MemberDetails";
import Publish from "./admin_components/publish/Publish";
import AddMember from "./admin_components/addmember/AddMember";

function App() {
  const member = useSelector((state) => state.member.currentMember);
  const admin = useSelector((state) => state.admin.currentAdmin);
  //console.log(admin);

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
        <Route
          path="/admin"
          element={admin?.isAdmin ? <AdminHome /> : <Navigate to="/" replace />}
        >
          <Route path="member-list" element={<MemberList />} />
          <Route path="treasury" element={<Treasury />} />
          <Route path="adminEdit" element={<EditAdmin />} />
          <Route path="editMember" element={<EditMember />} />
          <Route path="upload" element={<ImageUpload />} />
          <Route path="details/:id" element={<MemberDetails />} />
          <Route path="publish" element={<Publish />} />
          <Route path="add-member" element={<AddMember />} />
        </Route>
        <Route path="adminLogin" element={<AdminLogin />} />
        <Route path="adminRegister" element={<AdminRegister />} />
      </Routes>
    </div>
  );
}

export default App;
