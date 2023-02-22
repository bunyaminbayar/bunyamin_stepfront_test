import "./home.css"
import { UserLoginGlobal } from "../../App";
import { useContext } from "react";
import Contents from "../../components/contents/Contents";
 
export default function Home() {

  const { userMessage } = useContext(UserLoginGlobal);

  return (
    <div className="home">
      <h1 className="userMessage">
        {userMessage}
      </h1>
      <Contents />
    </div>
  )
}
