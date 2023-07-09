import React, { useState } from 'react';
import Shirt from "./Shirt2.png";
import Pants from "./Pants.png";
import HeadPhone from "./Headset.png";
import Shoe from "./Shoe.png";
import Shirtc from "./Shirtc.png";
import Pantsc from "./Pantsc.png";
import HeadPhonec from "./Headsetc.png";
import Shoesc from "./Shoec.png";
import Cap from "./Cap.png";
import Capc from "./Capc.png";
import './styles.scss';

export default function FeaturedCollections2() {
  const [shirtHovered, setShirtHovered] = useState(false);
  const [pantsHovered, setPantsHovered] = useState(false);
  const [capHovered, setCapHovered] = useState(false);
  const [headphoneHovered, setHeadphoneHovered] = useState(false);
  const [shoeHovered, setShoeHovered] = useState(false);

  const handleShirtMouseEnter = () => {
    setShirtHovered(true);
  };

  const handleShirtMouseLeave = () => {
    setShirtHovered(false);
  };

  const handlePantsMouseEnter = () => {
    setPantsHovered(true);
  };

  const handlePantsMouseLeave = () => {
    setPantsHovered(false);
  };

  const handleCapMouseEnter = () => {
    setCapHovered(true);
  };

  const handleCapMouseLeave = () => {
    setCapHovered(false);
  };

  const handleHeadphoneMouseEnter = () => {
    setHeadphoneHovered(true);
  };

  const handleHeadphoneMouseLeave = () => {
    setHeadphoneHovered(false);
  };

  const handleShoeMouseEnter = () => {
    setShoeHovered(true);
  };

  const handleShoeMouseLeave = () => {
    setShoeHovered(false);
  };

  return (
    <section>
      <div className="fc2-grid">
        <div className="ft-collections-container">
          <div className="ft-collections">Coleções em destaque</div>
        </div>

        <div className="fc2-background">
          <div className="fc2-icon">
            <img
              alt="shirt"
              src={shirtHovered ? Shirtc : Shirt}
              onMouseEnter={handleShirtMouseEnter}
              onMouseLeave={handleShirtMouseLeave}
            />
            <img
              alt="pants"
              src={pantsHovered ? Pantsc : Pants}
              onMouseEnter={handlePantsMouseEnter}
              onMouseLeave={handlePantsMouseLeave}
            />
            <img
              alt="cap"
              src={capHovered ? Capc : Cap}
              onMouseEnter={handleCapMouseEnter}
              onMouseLeave={handleCapMouseLeave}
            />
            <img
              alt="headphone"
              src={headphoneHovered ? HeadPhonec : HeadPhone}
              onMouseEnter={handleHeadphoneMouseEnter}
              onMouseLeave={handleHeadphoneMouseLeave}
            />
            <img
              alt="shoe"
              src={shoeHovered ? Shoesc : Shoe}
              onMouseEnter={handleShoeMouseEnter}
              onMouseLeave={handleShoeMouseLeave}
            />
          </div>

          <div className="text-fc2">
            <p>Camisetas</p>
            <p>Calças</p>
            <p>Bonés</p>
            <p>Headphones</p>
            <p>Tênis</p>
          </div>
        </div>
      </div>
    </section>
  );
}
