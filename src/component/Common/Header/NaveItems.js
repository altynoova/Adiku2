import React from 'react'
import { Link } from 'react-router-dom';

// import Img
import banner from '../../../assets/img/common/nav_banner.png'

const NaveItems = ({ item }) => {
    const renderChildren = (children) => (
      <ul>
        {children.map((childItem, index) => (
          <li className="mega-menu-item" key={index}>
            <p className="mega-menu-item-title">{childItem.name}</p>
            <ul className="mega-menu-sub">
              {childItem.children && Array.isArray(childItem.children) && (
                childItem.children.map((data, dataIndex) => (
                  <li key={dataIndex}><Link to={data.href}>{data.name}</Link></li>
                ))
              )}
            </ul>
          </li>
        ))}
      </ul>
    );
  
    return (
      <>
        {item.mega_menu && item.children && item.children.length > 0 ? (
          <li className="has-dropdown has-megaitem">
            <a href="#!">
              {item.name} <i className="fa fa-angle-down"></i>
            </a>
            <div className="mega-menu">
              <ul className="mega-menu-inner">
                {renderChildren(item.children)}
                <li className="mega-menu-item">
                  <div className="menu-banner">
                    <Link to="/shop" className="menu-banner-link">
                      <img className="menu-banner-img" src={banner} alt="img" />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        ) : (
          <li className="no-dropdown no-megaitem">
            <a href={item.href}>
              {item.name} <i className="fa fa-angle-down"></i>
            </a>
          </li>
        )}
      </>
    );
  };
  
  export default NaveItems;
  

