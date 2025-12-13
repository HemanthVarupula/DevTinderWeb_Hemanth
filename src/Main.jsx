import App from "./App";
import ReactDom from "react-dom/client";
const Main=()=>{
  return(
    <>
      <App/>
    </>
  )
}

const root=ReactDom.createRoot(document.getElementById("root"))
root.render(<Main/>)