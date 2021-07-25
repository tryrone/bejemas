import React from 'react';
import style from '../index.module.css';


export default function ProductHead({setVisible}) {
      const sortIcon ='/images/sortIcon.svg';
      const chevronDown = '/images/chevronDown.svg';
      const filterIcon = '/images/filterIcon.svg';
      
      return (
        <div className={style.productHeadWrap}>
          <h2>
            Photography / <span>Premium Photos</span>
          </h2>
          <p>
            <img src={sortIcon} alt="sort icon" /> Sort By /{' '}
            <span>
              Price <img src={chevronDown} alt="drop arrow" />{' '}
            </span>
          </p>

          <span className={style.filterWrap}>
            <img onClick={()=>{ setVisible(true)}} src={filterIcon} alt="filter Icon" />
          </span>

          
        </div>
      );
}
