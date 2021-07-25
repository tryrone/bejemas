import React from 'react';
import style from './index.module.css';
import { Menu, Dropdown } from 'antd';
import {useSelector,useDispatch} from 'react-redux';
import cartAction from '../../../store/actions/cartAction';

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.CartReducer.cart);

      const menu = (
        <Menu className={style.dropDownContainer}  style={{maxHeight: 300 , overflowY: 'scroll'}}>
          {cart.map((item, index) => {
            return (
              <Menu.Item key={index + 'cartItem'}>
                <div className={style.dropDownItem}>
                  <div>
                    <p className={style.dropName}>{item.name}</p>
                    <p className={style.dropAmount}>${item.price}</p>
                  </div>
                  <img src={item.image.src} className={style.dropImage} />
                </div>
              </Menu.Item>
            );
          })}

          {cart.length === 0 && (
            <Menu.Item key={'cartItem'}>
              <div className={style.dropDownItem} style={{border:'none',paddingBottom:0}}>
                <p className={style.dropAmount}>No Item in your cart...</p>
              </div>
            </Menu.Item>
          )}

          <button
            onClick={() => {
              dispatch(cartAction.removeFromCart());
            }}
            className={style.clearBtn}
          >
            clear
          </button>
        </Menu>
      );
      return (
        <div className={style.headWrap}>
          <img src="/images/logo.svg" className={style.logo} />
          <div className={style.cartCont}>
            <Dropdown overlay={menu} trigger={['click']}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <img src="/images/cart.svg" className={style.cart} />
              </a>
            </Dropdown>

            {cart.length !== 0 && (
              <span className={style.numberWrap}>{cart.length}</span>
            )}
          </div>
        </div>
      );
}

export default Header;