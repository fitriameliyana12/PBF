// import Image from "next/image";
// import Profile from "../components/profile";

// export default function Home() {
//   return (
//     <div>
//       <h1 className="text-center">Ilmuwan yang luar biasa</h1>
//       <div className="grid grid-cols-3 gap-8 justify-center">
//     <Profile></Profile>
//     <Profile></Profile>
//     <Profile></Profile>
//   </div></div>
    
//   );
// }


import Bio from "@/components/Bio";
import { Gallery } from "@/components/gallery";
import TodoList from "@/components/todoList";

export default function Home() {
  return (
  //   <div>
  //     {/* <h1 className="text-center">Ilmuwan yang luar biasa</h1>
  //     <div className="grid grid-cols-3 gap-8 justify-center">
  //    <Gallery/>
  //    </div> */}
  //    {/* <Bio/> */}
  //    {/* <TodoList/> */}
  // </div>

  <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <Gallery />
      <hr />
      <TodoList />
    </section>

  
    
  );
}

