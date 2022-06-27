// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import Style from "../InstantPrice.module.scss";
// import { FiDollarSign } from "react-icons/fi";
// import ApexCharts from "../../../../../components/apex-chart/ApexCharts";
// import { AiOutlineCaretUp, AiOutlineToTop } from "react-icons/ai";
// import dynamic from "next/dynamic";
// const MyResponsiveStream = dynamic(
//   () =>
//     import(
//       "../../../../../components/chart/MyresponsiveStream/MyResponsiveStream"
//     ),
//   {
//     ssr: false,
//   }
// );
//
// const Cards = ({ data, handleClickSelected, selected }) => {
//   return (
//     <>
//       <Row className={Style.RowCardsParent}>
//         {data.map((itm, ind) =>
//           ind === selected.activeIndex ? (
//             <Col>
//               <div className={`${Style.CardParent} rounded-15 shadow`}>
//                 {/*<div className="w-100 d-flex flex-column justify-content-center align-items-center pt-4">*/}
//                 <div className={`${Style.CardSvg}`}>
//                   <img src={"/svg/Frame.svg"} alt="" />
//                 </div>
//                 <div
//                   className={`${Style.CardParentLinear} w-100 d-flex flex-column justify-content-center align-items-center pt-4 rounded-15`}
//                 >
//                   <div style={{ marginBottom: "70px" }}>
//                     <div
//                       className={`${
//                         ind === selected.activeIndex ? Style.activeItems : ""
//                       }`}
//                     >
//                       <img
//                         src={itm.image}
//                         alt=""
//                         className="img-fluid text-white"
//                       />
//                     </div>
//                   </div>
//
//                   <p className={`${Style.textLinear} mt-5  text-white`}>
//                     {itm.faName}
//                   </p>
//                   <p className={`${Style.textLinear2} `}>{itm.name}</p>
//                 </div>
//               </div>
//             </Col>
//           ) : (
//             <Col>
//               <div
//                 className={`${Style.CardParent} rounded-15 shadow`}
//                 onClick={() => handleClickSelected(itm, ind)}
//               >
//                 <div className="w-100 d-flex flex-column justify-content-center align-items-center pt-4">
//                   <div className={`${Style.imagesIcon} mb-2`}>
//                     <img src={itm.image} alt="" className="img-fluid" />
//                   </div>
//                   <p className="size-2 mb-1">{itm.faName}</p>
//                   <p className="size-2 text-gray-1 mb-2">{itm.name}</p>
//                   <p className="size-5 darkBlue mb-1 d-flex align-items-center">
//                     {itm.rialPrice}
//                     <FiDollarSign />
//                   </p>
//                   <p className="size-2 text-gray-1 ">
//                     {" "}
//                     {itm.price}
//                     <span> تومان </span>
//                   </p>
//                 </div>
//
//                 <div className={`${Style.footer} col-12 p-0`}>
//                   <div className={Style.parentChart}>
//                     <MyResponsiveStream data={dataChart} />
//                   </div>
//                   {/*{typeof window !== "undefined" && (*/}
//                   {/*  <ApexCharts height="100px" data={itm?.chartData} />*/}
//                   {/*)}*/}
//                 </div>
//                 <div className={`${Style.footerLinear} w-100 p-2`}>
//                   <div className="d-flex justify-content-between w-100">
//                     <span className="size-2 text-green-1 d-flex align-items-center">
//                       1.5%
//                       <AiOutlineCaretUp className="me-1" />
//                     </span>
//                     <span className="size-4 text-green-1">
//                       <span className="size-1 text-green-1">(24h)</span>
//                       584684
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           )
//         )}
//       </Row>
//     </>
//   );
// };
// //
//
// let dataChart = [
//   {
//     id: "japan",
//     color: "#26AB6D",
//     data: [
//       {
//         x: "plane",
//         y: 245,
//       },
//       {
//         x: "helicopter",
//         y: 253,
//       },
//       {
//         x: "boat",
//         y: 108,
//       },
//       {
//         x: "train",
//         y: 252,
//       },
//       {
//         x: "subway",
//         y: 266,
//       },
//       {
//         x: "bus",
//         y: 7,
//       },
//       {
//         x: "car",
//         y: 242,
//       },
//       {
//         x: "moto",
//         y: 96,
//       },
//     ],
//   },
// ];
//
// export default Cards;

import React from "react";
import { Col, Row } from "react-bootstrap";
import Style from "../InstantPrice.module.scss";
import { FiDollarSign } from "react-icons/fi";
import { AiOutlineCaretUp } from "react-icons/ai";
import dynamic from "next/dynamic";
const MyResponsiveStream = dynamic(
  () =>
    import(
      "../../../../../components/chart/MyresponsiveStream/MyResponsiveStream"
    ),
  {
    ssr: false,
  }
);

const Cards = ({ data, handleClickSelected, selected }) => {
  return (
    <>
      <Row className={Style.RowCardsParent}>
        {data.map(
          (itm, ind) => (
            <Col>
              <div
                className={`${Style.CardParent} rounded-15`}
                onClick={() => handleClickSelected(itm, ind)}
              >
                {/*{ind === selected.activeIndex && (*/}
                <div
                  className={`${Style.posParent} ${
                    ind === selected.activeIndex ? Style.posParentActive : ""
                  } w-100 position-absolute`}
                  style={{ zIndex: "1" }}
                >
                  <div className={`${Style.CardSvg}`}>
                    <img src={"/svg/Frame.svg"} alt="" />
                  </div>
                  <div
                    className={`${Style.CardParentLinear} w-100 d-flex flex-column justify-content-center align-items-center pt-4 rounded-15`}
                  >
                    <p className={`${Style.textLinear} mt-5  text-white`}>
                      {itm.faName}
                    </p>
                    <p className={`${Style.textLinear2} `}>{itm.name}</p>
                  </div>
                </div>

                {/*)}*/}
                <div className={`  position-absolute w-100`}>
                  <div
                    className={` w-100 d-flex flex-column justify-content-center align-items-center pt-4`}
                  >
                    <div
                      className={`${Style.imagesIcon} ${
                        ind === selected.activeIndex ? Style.activeImg : ""
                      }  mb-2`}
                    >
                      <img
                        src={itm.image}
                        alt=""
                        className={`${
                          ind === selected.activeIndex ? Style.imgactive : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`${
                        ind === selected.activeIndex
                          ? Style.posParentNotActive
                          : ""
                      } d-flex flex-column justify-content-center align-items-center w-100`}
                    >
                      <p className="size-2 mb-1">{itm.faName}</p>
                      <p className="size-2 text-gray-1 mb-2">{itm.name}</p>
                      <p className="size-5 darkBlue mb-1 d-flex align-items-center">
                        {itm.rialPrice}
                        <FiDollarSign />
                      </p>
                      <p className="size-2 text-gray-1 ">
                        {" "}
                        {itm.price}
                        <span> تومان </span>
                      </p>
                    </div>
                  </div>

                  <div
                    className={`${Style.footer} ${
                      ind === selected.activeIndex
                        ? Style.posParentNotActive
                        : ""
                    } col-12 p-0`}
                  >
                    <div className={Style.parentChart}>
                      <MyResponsiveStream data={dataChart} />
                    </div>
                    {/*{typeof window !== "undefined" && (*/}
                    {/*  <ApexCharts height="100px" data={itm?.chartData} />*/}
                    {/*)}*/}
                  </div>
                  <div className={`${Style.footerLinear} w-100 p-2`}>
                    <div className="d-flex justify-content-between w-100">
                      <span className="size-2 text-green-1 d-flex align-items-center">
                        1.5%
                        <AiOutlineCaretUp className="me-1" />
                      </span>
                      <span className="size-4 text-green-1">
                        <span className="size-1 text-green-1">(24h)</span>
                        584684
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          )
          // )
        )}
      </Row>
    </>
  );
};
//

let dataChart = [
  {
    id: "japan",
    color: "#26AB6D",
    data: [
      {
        x: "plane",
        y: 245,
      },
      {
        x: "helicopter",
        y: 253,
      },
      {
        x: "boat",
        y: 108,
      },
      {
        x: "train",
        y: 252,
      },
      {
        x: "subway",
        y: 266,
      },
      {
        x: "bus",
        y: 7,
      },
      {
        x: "car",
        y: 242,
      },
      {
        x: "moto",
        y: 96,
      },
    ],
  },
];

export default Cards;
