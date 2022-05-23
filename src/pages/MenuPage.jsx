import React from 'react'
import { InnerPagesBanner } from '../components/banner/InnerPagesBanner'
import { menu } from './menu'

export const Menu = () => {
  return (
    <div className='menu-page'>
      <InnerPagesBanner title="Menu" description="This mission is simple: serve delicious, affordable food that guests will want to return to week after week." />
      <div className="container  p-2">
      {menu.map((item, i) => (
        <div key={i}>
          <h2 style={{textAlign:'center'}}>{item.name}</h2>
          <div className='d-flex p-2'>
            {item.submenu.map((submenuItem,i) => (
              <div className="content-wrapper-3" key={i}>
                <div className="menu-card" style={{justifyContent:'space-between'}}>
                  <div className="left">
                    <h4>{submenuItem.title}</h4>
                    <p>{submenuItem.description}</p>
                  </div>
                  <div style={{textAlign:'right'}}>
                    ${submenuItem.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
