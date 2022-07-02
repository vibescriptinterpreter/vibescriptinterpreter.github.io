import React, { useEffect, useState } from 'react';
import Scanner from '../../components/Scanner/Scanner';
import ProductTooltip from '../../components/ProductTooltip/ProductTooltip'
import { TooltipWrapper } from './styles';
import { guidGenerator } from '../../utils'
import { useNavigate } from 'react-router-dom';

const Scan = () => {
  const history = useNavigate();
  const [barcode, setBarcode] = useState(null);
  const [product, setProduct] = useState(null);
  const [isShownTooltip, setIsShownTooltip] = useState(false);

  useEffect(() => {
    if (barcode) {
      console.log('BARCODE_', barcode);
      const products = localStorage.getItem('products');

      if (products) {
        const productsNext = JSON.parse(products);
        const purchasingProduct = productsNext.find(product => product.barcode === barcode);
      
        if (!purchasingProduct) {
          console.log('Товар не найдет');
        } else {
          setProduct(purchasingProduct);
        }
      }
    }
  }, [barcode]);

  useEffect(() => {
    if (product) {
      console.log('SHOW TOOLTIP');
      setIsShownTooltip(true);
    }
  }, [product]);


  const handlePayment = () => {
    // make payment
    console.log('make payment');

    const purchase = localStorage.getItem('purchase');

    if (purchase) {
      const purchaseNext = JSON.parse(purchase);
      purchaseNext.push({
        id: guidGenerator(),
        category: product.category,
        name: product.title,
        price: product.price     
      })

      localStorage.setItem('purchase', JSON.stringify(purchaseNext));
      history('/history');
    }


    // if success
    setIsShownTooltip(false);

  }

  return <>
    <Scanner 
       onSuccess={(code) => {
        setBarcode(code);
      }}
    />
    {isShownTooltip && (
      <TooltipWrapper>
        <ProductTooltip
          title={product.title}
          category={product.category}
          onPayment={handlePayment}
        />
      </TooltipWrapper>
    )}
  </>;
};

export default Scan;
