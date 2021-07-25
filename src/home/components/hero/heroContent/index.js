import React from 'react';
import useDeviceSize from '../../../../../util';
import style from '../index.module.css';

const imgOne = '/images/imgOne.svg';
const imgTwo = '/images/imgTwo.svg'
const imgThree = '/images/imgThree.svg';



export default function HeroContent() {
      const imgArray = [imgOne,imgTwo,imgThree];
      const [width, height] = useDeviceSize();
      const paragraphWidth = width <= 760 ? '100%' : width * 0.45;
      const imageContainerWidth = width <= 760 ? (width - 40) : width * 0.27;
      return (
        <div className={style.heroContent}>
          <div className={style.leftContainer}>
            <h3 className={style.leftProductHead}>
              About the Samurai King Resting
            </h3>

            <h3 className={style.leftSubHeading}>Pets</h3>
            <div
              style={{ width: paragraphWidth }}
              className={style.paragrahContainer}
            >
              <p>
                So how did the classical Latin become so incoherent? According
                to McClintock, a 15th century typesetter likely scrambled part
                of Cicero's De Finibus in order to provide placeholder text to
                mockup various fonts for a type specimen book.So how did the
                classical Latin become so incoherent? According to McClintock, a
                15th century typesetter likely scrambled part of Cicero's De
                Finibus in order to provide placeholder.
              </p>
              <p>
                text to mockup various fonts for a type specimen book.So how did
                the classical Latin become so incoherent? According to
                McClintock.
              </p>
            </div>
          </div>
          <div className={style.rightContainer}>
            <h2 className={style.rightProductHead}>People also buy</h2>
            <div
              style={{ width: imageContainerWidth }}
              className={style.imgContainer}
            >
              {imgArray.map((img,index) => (
                <img key={index} src={img} className={style.buyImg} />
              ))}
            </div>

            <div className={style.detailsWrap}>
              <h3>Details</h3>
              <p>Size: 1020 x 1020 pixel</p>
              <p>Size: 15 mb</p>
            </div>
          </div>
        </div>
      );
}
