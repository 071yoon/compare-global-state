import { useNavigate } from "react-router-dom";

export default function GoBack() {
  const navigate = useNavigate();

  const onBack = () => {
    navigate("/");
  };

  return (
    <div
      onClick={onBack}
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="64"
        height="64"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
          fill="rgba(255,255,255,1)"
        />
      </svg>
    </div>
  );
}
