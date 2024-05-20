import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

//INTERNAL IMPORT
import HAKToken from "../assets/HAKtoken.png";
import Transfer from "../components/User/User/Transfer/Transfer";
import User from "../components/User/User/User";
import { ICOContext } from "../context/ERC20ICO";
import Style from "../styles/index.module.css";

const Home = () => {
  const [myAccount, setMyAccount] = useState("");
  const [ammount, setAmmount] = useState(0);
  const {
    EROHAKToken,
    transferToken,
    checkIfWalletConnected,
    tokenHolderData,
    HAKToken,
    NoOfToken,
    TokenName,
    TokenStandard,
    TokenSymbol,
    TokenOwner,
    holderArray,
    account,
    accountBallanc,
    TokenOwnerBal,
  } = useContext(ICOContext);

  useEffect(() => {
    EROHAKToken();
    checkIfWalletConnected();
    tokenHolderData();
  }, []);

  return (
    <div className={Style.home}>
      <div className={Style.heroSection}>
        <div className={Style.heroSection_left}>
          <h1>ICO Launching HAK Token (HAK)</h1>
          <p>
            This is a Token Sale website, it transfers tokens from owner to other accounts.
          </p>
        </div>
        <div className={Style.heroSection_right}>
          <Image
            src={HAKToken}
            alt="banner"
            width={300}
            height={300}
            className={Style.heroSection_right_img_one}
          />
          <Image
            src={HAKToken}
            alt="banner"
            width={200}
            height={200}
            className={Style.heroSection_right_img}
          />
          <Image
            src={HAKToken}
            alt="banner"
            width={100}
            height={100}
            className={Style.heroSection_right_img}
          />
          <Image
            src={HAKToken}
            alt="banner"
            width={50}
            height={50}
            className={Style.heroSection_right_img}
          />
          <Image
            src={HAKToken}
            alt="banner"
            width={20}
            height={20}
            className={Style.heroSection_right_img}
          />
        </div>
      </div>
      <Transfer
        NoOfToken={NoOfToken}
        TokenName={TokenName}
        TokenStandard={TokenStandard}
        TokenSymbol={TokenSymbol}
        TokenOwnerBal={TokenOwnerBal}
        transferToken={transferToken}
      />
      
    <User holderArray={holderArray} />
    
    </div>
  );
};

export default Home;
