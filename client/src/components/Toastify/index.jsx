import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toastify = () => {

  const notify = () => toast('Notify');
  
  return (
    <>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </>
  )
}
