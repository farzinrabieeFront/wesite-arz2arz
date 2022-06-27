//packages imports
import { ToastContainer, toast } from "react-toastify";

// global styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

//components
// import Layout from "../layout/Layout";
import Layout from "../common/layout/Layout";

function MyApp({ Component, pageProps }) {
  // const notify = () => {
  //   toast.success("تست نوتیفیکیشن", {
  //     position: "bottom-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // };

  return [
    <Layout>
      <Component {...pageProps} />
    </Layout>,
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={true}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  ]
}

export default MyApp;
