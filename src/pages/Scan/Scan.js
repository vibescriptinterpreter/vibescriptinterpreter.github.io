import React, { useEffect, useState } from 'react';
import Scanner from '../../components/Scanner/Scanner';
import ProductTooltip from '../../components/ProductTooltip/ProductTooltip'
import { TooltipWrapper } from './styles';
import { guidGenerator } from '../../utils'
import { useNavigate  } from 'react-router-dom';

const Scan = () => {
  let navigate = useNavigate();
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
          alert('Товар не найден');
          
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

    const foundProduct = {
      id: guidGenerator(),
      category: product.category,
      name: product.title,
      price: product.price     
    }

    const purchase = localStorage.getItem('purchase');

    if (purchase) {
      const purchaseNext = JSON.parse(purchase);
      purchaseNext.push(foundProduct)
      localStorage.setItem('purchase', JSON.stringify(purchaseNext));
    } else {
      localStorage.setItem('purchase', JSON.stringify([foundProduct]))
    }
    
    setProduct(null);
    navigate('/history');
    
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
