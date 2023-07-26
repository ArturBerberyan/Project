import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {

  const navigate = useNavigate();

  return (
    <div className="notfound">
        <h1 className="grid">Page not found</h1>
        <h1>ERROR 404</h1>
        <button onClick={() => navigate('/home')} className="back">GO TO HOME PAGE</button>
    </div>
  )
}
