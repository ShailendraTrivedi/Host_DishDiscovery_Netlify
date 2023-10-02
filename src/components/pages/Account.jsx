import React from "react";
import Input from "../../helpers/Input";
import Img from "../../assets/profile.jpg";

const Account = () => {
  return (
    <div className="h-screen">
      <div className="">
        <div className="grid grid-cols-2 border-2 border-black flex flex-col justify-center items-center">
          {/* Left Side */}
          <div className="flex flex-col items-center justify-center">
            <img
              src={Img}
              alt=""
              className=" h-[10rem] w-[10rem] object-fill rounded-full"
            />
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, perferendis expedita, cumque enim iure nesciunt
              accusantium doloribus facere non sed voluptatem numquam? Sunt sed
              officiis vero deleniti iste, reprehenderit officia?
            </div>
          </div>
          {/* Right Side */}
          <div className="">
            <Input id="title" type="text" label="Username"  value="Shailendra"/>
            <Input id="title" type="text" label="Email" value="shailendra))4@gmail.com"/>
            <Input id="title" type="text" label="Password"value="skjdbk" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
