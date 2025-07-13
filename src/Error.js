import { useRouteError } from "react-router-dom";
const Error=()=>{

    const err=useRouteError();
    return(
        <div>
            <p>OOPs.....</p>
            <p>Something went wrong</p>
            <p>{err.status}:{err.statusText}</p>
        </div>
    )
}
export default Error;
