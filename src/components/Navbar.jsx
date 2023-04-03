
import { HiMenu } from "react-icons/hi";

function Navbar() {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-2 gap-4">Tex Trade</div>
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <div className="hidden md:flex flex-grow-1 flex-shrink-1 space-x-10 pr-15">
          <p>Products</p>
          <p>Features</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="flex justify-end">
          <p className="">Login | </p>
          <button className="border text-sm rounded-full h-7 px-2 ml-2 bg-[#3671E9]">
            Register
          </button>
          <HiMenu className="h-5 w-10 cursor-pointer md:hidden" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;






// import { HiMenu } from "react-icons/hi";

// function Navbar() {
//   return (
//     <div className="flex justify-between">
//       <div className="flex-1">Tex Trade</div>
//       <div className="flex space-x-10 mr-10">
//         <p>Products</p>
//         <p>Features</p>
//         <p>About</p>
//         <p>Contact</p>
//       </div>
//       <HiMenu className="h-5 w-10 cursor-pointer" />
//       <div className="flex">
//         <p className="">Login | </p>
//         <button className="border text-sm rounded-full px-2 ml-2 bg-[#3671E9]">
//           Register
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;