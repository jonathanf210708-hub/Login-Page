import "./Dashboard.css";

import Sidebar from "../../components/Sidebar.jsx";
import Header from "../../components/Header.jsx";

function Dashboard() {

 return (

  <div className="layout">

   <Sidebar />

   <div className="content">

    <Header />

    <div className="cards">

      <div className="card">
       <p>Total Users</p>
       <h2>10</h2>
      </div>

      <div className="card">
       <p>Total Admins</p>
       <h2>2</h2>
      </div>

    </div>

   </div>

  </div>

 );

}

export default Dashboard;