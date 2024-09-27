import { FC, useContext } from 'react'
import './index.scss'
import { WidthLimiter } from '@/components/WidthLimiter'
import { WobblyLink } from '@/components/WobblyLink'
import { CartContext } from '@/context/CartContext'
import { appConfig } from '@/config'

export const Header: FC = () => {
  const cartContext = useContext(CartContext)

  const onCartBtnClick = () => {
    cartContext.setIsCartOpened(!cartContext.isCartOpened)
  }

  return (
    <header className="header">
      <WidthLimiter>
        <div className="header__inner">
          <WobblyLink to="/" text={appConfig.storeName} />
          <WobblyLink text="Cart" onClick={onCartBtnClick}>
            {cartContext.products.length > 0 && <span className="header__cart-counter family-alt">{cartContext.products.length}</span>}
          </WobblyLink>
        </div>
      </WidthLimiter>
    </header>
  )
}
