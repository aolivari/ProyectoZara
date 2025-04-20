import React from 'react';

import { useBag } from '../context/BagContext';

import router from 'next/router';
import styles from '../CSS.modules/Cart.module.css';
import { useWindowSize } from '../_hooks/useWindowSize';
import { NavBar } from '../_components/NavBar';
import { Button } from '../_components/Button';

/**
 * The `Cart` component represents a shopping cart view for an e-commerce application.
 * It displays a list of items added to the cart, their details, and the total price.
 * The component adapts its layout based on the screen size, providing a responsive design
 * for both mobile and desktop users.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered Cart component.
 *
 * @remarks
 * - Uses the `useBag` hook to retrieve cart items and the `removeItem` function.
 * - Calculates the total price of items in the cart.
 * - Adapts the layout for mobile screens (width < 780px) and desktop screens (width > 780px).
 * - Includes buttons for continuing shopping and initiating payment (currently not functional).
 *
 * @example
 * ```tsx
 * import { Cart } from './Cart';
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <Cart />
 *     </div>
 *   );
 * };
 * ```
 */
export const Cart = () => {
  const { items, removeItem } = useBag();

  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  const handleRemoveItem = (id: string) => {
    removeItem(id);
  };

  const screenSize = useWindowSize();

  return (
    <div>
      <NavBar showCar={false} />
      {/* mobile design */}
      {screenSize.width < 780 && (
        <div id={'pppp'} className={styles.fullScreenContainer}>
          <div>
            <p className={styles.cartTitle}>CART ({items.length})</p>
            <div key={'ProductList-shoppingBag'} className={styles.productList}>
              {items.map((item, index) => {
                return (
                  <div key={index} className={styles.productItem}>
                    <div>
                      <img
                        src={item.imageSrc}
                        alt={item.brand + ' ' + item.model}
                        className={styles.productImage}
                      />
                    </div>
                    <div className={styles.productDetails}>
                      <div className={styles.productInfo}>
                        <h1>{`${item.brand} ${item.model}`}</h1>
                        <h1>{`${item.storage} | ${item.color}`}</h1>
                        <h2>{item.price} EUR</h2>
                      </div>
                      <div
                        className={styles.productRemove}
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Eliminar
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.totalContainerMobile}>
              <h3 className={styles.totalTextMobile}>
                TOTAL <span> {totalPrice} EUR</span>
              </h3>

              <div className={styles.totalContainer}>
                <Button
                  onClick={() => router.push('/')}
                  text="continue shopping"
                  variant="secondary"
                />
                {items.length !== 0 && (
                  <Button
                    onClick={() => alert('Payment not available yet')}
                    text="pay"
                    variant="primary"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {screenSize.width > 780 && (
        <div id={'pppp'} className={styles.fullScreenContainer}>
          <div>
            <p className={styles.cartTitle}>CART ({items.length})</p>
            <div key={'ProductList-shoppingBag'} className={styles.productList}>
              {items.map((item, index) => {
                return (
                  <div key={index} className={styles.productItem}>
                    <div>
                      <img
                        src={item.imageSrc}
                        alt={item.brand + ' ' + item.model}
                        className={styles.productImage}
                      />
                    </div>
                    <div className={styles.productDetails}>
                      <div className={styles.productInfo}>
                        <h1>{`${item.brand} ${item.model}`}</h1>
                        <h1>{`${item.storage} | ${item.color}`}</h1>
                        <h2>{item.price} EUR</h2>
                      </div>
                      <div
                        className={styles.productRemove}
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Eliminar
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.buttonContainer}>
              <Button
                onClick={() => router.push('/')}
                text="continue shopping"
                variant="secondary"
              />
            </div>

            {items.length !== 0 && (
              <div className={styles.totalContainer}>
                <h3 className={styles.totalTextMobile}>
                  TOTAL <span> {totalPrice} EUR</span>
                </h3>
                <div className={styles.buttonContainer}>
                  <Button
                    onClick={() => alert('Payment not available yet')}
                    text="pay"
                    variant="primary"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
