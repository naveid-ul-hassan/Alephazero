// import React, { useState } from "react";
// import Slider from "react-slick";
// import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
// import { Avatar, List, Skeleton, Switch } from "antd";
// import one from "./images/scrollimg1.svg";
// import "./test.css";
import React, { useState } from 'react'

const data = [ {
  name:'naveed',
  lastname:'Qasmi',
},
{
  name:'naveed ul',
},
{
  name:'naveed ul hassan',
}
];

function Test() {
  const [value,setvalue] =useState(0)
  setTimeout(()=>{
    setvalue(value+1)
    if(data.length-1 === value)
    {
      setvalue(0);
    }
  },1000)
 const item = data[value];

  return (
    <div>
          <div>{value}</div>
          <div>{item.name}</div>
         
        
    </div>
  )
}

export default Test



// // const listData = Array.from({
// //   length: 1,
// // }).map((_, i) => ({

// //   // href: "https://ant.design",
// //   title: `Common 1`,
// //   // avatar: "https://joeschmoe.io/api/v1/random",
// //   description:
// //     "AZERO Punks is an NFT collection paying homage to the 2017 Crypto Punks original.",
// //   // content:
// //   //   "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
// // }
// // ));

// // const IconText = ({ icon, text }) => (
// //   <span>
// //     {React.createElement(icon, {
// //       style: {
// //         marginRight: 8,
// //       },
// //     })}
// //     {text}
// //   </span>
// // );

// const Test = () => {
//   // setTimeout(() => {
//   //   setLoading(!loading);
//   // }, 2000);

//   const [loading, setLoading] = useState(true);
//   const onChange = (checked) => {
//     setLoading(!checked);
//   };

//   return (
//     <>
//       <Switch checked={!loading} onChange={onChange} />
//       {/* isMain?"main":"left" */}

//       {!loading ? (
//         <div className="load">
//           <div class="marquee-content">
//             <div className="marquee-item"></div>
//             <div className="scelton-card">
//               <div className="scelton-card-tag">
//                 <div className="scelton-card-tag-top">
//                   <div>
//                     <img src={one} alt="image" />
//                   </div>
//                   <div>
//                     <p>Sub Wallet </p>
//                   </div>
//                 </div>
//                 <div className="scelton-card-tag-centre">
//                   <p className="scelton-card-tag-centre-para">
//                     AZERO Punks is an NFT collection paying homage to the 2017
//                     Crypto Punks original.
//                   </p>
//                 </div>
//                 <div className="scelton-card-tag-bottom">
//                   <div>
//                     <p className="scelton-card-tag-btn">nft</p>{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="marquee-item">
//               <div>
//                 <Skeleton
//                   className="scelton"
//                   avatar
//                   paragraph={{
//                     rows: 4,
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="marquee-item">
//               <div className="scelton-card">
//                 <div className="scelton-card-tag">
//                   <div className="scelton-card-tag-top">
//                     <div>
//                       {" "}
//                       <img src={one} alt="image" />
//                     </div>
//                     <div>
//                       {" "}
//                       <p>Sub Wallet </p>
//                     </div>
//                   </div>
//                   <div className="scelton-card-tag-centre">
//                     <p className="scelton-card-tag-centre-para">
//                       {" "}
//                       AZERO Punks is an NFT collection paying homage to the 2017
//                       Crypto Punks original.
//                     </p>
//                   </div>
//                   <div className="scelton-card-tag-bottom">
//                     <div>
//                       <p className="scelton-card-tag-btn">nft</p>{" "}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="marquee-item">
//               <div>
//                 <Skeleton
//                   className="scelton"
//                   avatar
//                   paragraph={{
//                     rows: 4,
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="marquee-item">
//               <div className="scelton-card">
//                 <div className="scelton-card-tag">
//                   <div className="scelton-card-tag-top">
//                     <div>
//                       {" "}
//                       <img src={one} alt="image" />
//                     </div>
//                     <div>
//                       {" "}
//                       <p>Sub Wallet </p>
//                     </div>
//                   </div>
//                   <div className="scelton-card-tag-centre">
//                     <p className="scelton-card-tag-centre-para">
//                       {" "}
//                       AZERO Punks is an NFT collection paying homage to the 2017
//                       Crypto Punks original.
//                     </p>
//                   </div>
//                   <div className="scelton-card-tag-bottom">
//                     <div>
//                       <p className="scelton-card-tag-btn">nft</p>{" "}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="marquee-item">
//               <div>
//                 <Skeleton
//                   className="scelton"
//                   avatar
//                   paragraph={{
//                     rows: 4,
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
          
          
//       )
      
//       }

    
//     </>
//   );
// };
// export default Test;
