import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const goToHome = () => {
    // Perform logic.
    // After logout, navigate to the home page
    navigate("/");
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <button onClick={goToHome}>GoHome</button>
    </div>
  );
}

export default Dashboard;