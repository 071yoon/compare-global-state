import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <header className="App-header">
      <div>Compare all react state management tools</div>
      <p onClick={() => navigate("/redux")}>Redux</p>
      <p>Redux Toolkit</p>
      <p onClick={() => navigate("/context-api")}>Context API</p>
      <p onClick={() => navigate("/recoil")}>Recoil</p>
      <p onClick={() => navigate("/zustand")}>Zustand</p>
      <p onClick={() => navigate("/jotai")}>Jotai</p>
    </header>
  );
}
