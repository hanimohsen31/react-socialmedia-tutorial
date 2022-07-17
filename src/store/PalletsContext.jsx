import React, { useState } from "react";
import { Pallets } from "../dummyData";

export const PalletContext = React.createContext({
  defaultPallet: Pallets[0],
  onDefault: () => {},
  onFacebook: () => {},
  onInsta: () => {},
  onBehance: () => {},
});

export const PalletContextProvider = (props) => {
  const [defaultPallet, setDefaultPallet] = useState(Pallets[0]);

  const onDefaultChange = () => {
    console.log('changed to pallet0')
    setDefaultPallet(Pallets[0]);
  };

  const onFacebookChange = () => {
    console.log('changed to pallet1')
    setDefaultPallet(Pallets[1]);
  };
  const onInstaChange = () => {
    console.log('changed to pallet2')
    setDefaultPallet(Pallets[2]);
  };
  const onBehanceChange = () => {
    console.log('changed to pallet3')
    setDefaultPallet(Pallets[3]);
};

  return (
    <PalletContext.Provider
      value={{
        defaultPallet: defaultPallet,
        onDefault: onDefaultChange,
        onFacebook: onFacebookChange,
        onInsta: onInstaChange,
        onBehance: onBehanceChange,
      }}
    >
      {props.children}
    </PalletContext.Provider>
  );
};

export default PalletContext;