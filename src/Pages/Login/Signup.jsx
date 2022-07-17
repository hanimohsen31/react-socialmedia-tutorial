import React, { useContext, useState, useEffect } from "react";
import { Pallets } from "../../dummyData";
import { PalletContext } from "./../../store/PalletsContext";
import "./Login.scss";

export const Signup = () => {
  const ctx = useContext(PalletContext);
  const [pallet, setPallet] = useState(ctx.defaultPallet);
  useEffect(() => {
    setPallet(ctx.defaultPallet);
  }, [ctx.defaultPallet]);

  return (
    <div
      className="Login"
      style={{
        backgroundColor: pallet.bodyColor,
      }}
    >
      <div className="wrapper">
        <div className="left ">
          {ctx.defaultPallet !== Pallets[3] && (
            <h1 style={{ color: pallet.mainColor }}>Himawari</h1>
          )}
          {ctx.defaultPallet === Pallets[3] && (
            <h1 style={{ color: "#eeeeee" }}>Himawari</h1>
          )}
          <p
            style={{
              color: pallet.textColorNoBg,
            }}
          >
            Connect with friends and the world around you on Himawari
          </p>
        </div>
        <div className="right ">
          <div className="form ">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="form-control my-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control my-3"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control my-3"
            />
            <input
              type="password"
              name="password2"
              placeholder="Re-Enter Password"
              className="form-control my-3"
            />
            <button
              className="btn btn2 py-2"
              style={{
                backgroundColor: pallet.mainColor,
                color: pallet.textColorWithBg,
              }}
            >
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
