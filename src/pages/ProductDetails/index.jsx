import { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingBag, Check } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import Breadcrumbs from '../../components/product-details/Breadcrumbs';
import ProductGallery from '../../components/product-details/ProductGallery';
import CustomizationGroup from '../../components/product-details/CustomizationGroup';
import QuantitySelector from '../../components/product-details/QuantitySelector';
import PriceSummary from '../../components/product-details/PriceSummary';
import ProductNotFound from '../../components/product-details/ProductNotFound';
import { products } from '../../data/products';
import { useCart } from '../../hooks/useCart';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  // Initialize option choices
  const initialSize = product?.customization?.sizes?.find((s) => s.default)?.id || product?.customization?.sizes?.[0]?.id || '';
  const initialCrust = product?.customization?.crusts?.find((c) => c.default)?.id || product?.customization?.crusts?.[0]?.id || '';
  const initialSpice = product?.customization?.spices?.find((sp) => sp.default)?.id || product?.customization?.spices?.[0]?.id || '';
  const initialDrink = product?.customization?.drinks?.find((d) => d.default)?.id || product?.customization?.drinks?.[0]?.id || '';

  const [selectedSize, setSelectedSize] = useState(initialSize);
  const [selectedCrust, setSelectedCrust] = useState(initialCrust);
  const [selectedSpice, setSelectedSpice] = useState(initialSpice);
  const [selectedDrink, setSelectedDrink] = useState(initialDrink);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // Reset choices if route ID changes
  useEffect(() => {
    if (product) {
      setSelectedSize(product.customization?.sizes?.find((s) => s.default)?.id || product.customization?.sizes?.[0]?.id || '');
      setSelectedCrust(product.customization?.crusts?.find((c) => c.default)?.id || product.customization?.crusts?.[0]?.id || '');
      setSelectedSpice(product.customization?.spices?.find((sp) => sp.default)?.id || product.customization?.spices?.[0]?.id || '');
      setSelectedDrink(product.customization?.drinks?.find((d) => d.default)?.id || product.customization?.drinks?.[0]?.id || '');
      setSelectedExtras([]);
      setQuantity(1);
      setIsAdded(false);
    }
  }, [id, product]);

  // Calculate dynamic unit price & total price
  const { unitPrice, totalPrice } = useMemo(() => {
    if (!product) return { unitPrice: 0, totalPrice: 0 };

    let unit = product.price;

    if (product.customization?.sizes) {
      const sOpt = product.customization.sizes.find((s) => s.id === selectedSize);
      if (sOpt) unit += sOpt.price;
    }
    if (product.customization?.crusts) {
      const cOpt = product.customization.crusts.find((c) => c.id === selectedCrust);
      if (cOpt) unit += cOpt.price;
    }
    if (product.customization?.spices) {
      const spOpt = product.customization.spices.find((sp) => sp.id === selectedSpice);
      if (spOpt) unit += spOpt.price;
    }
    if (product.customization?.drinks) {
      const dOpt = product.customization.drinks.find((d) => d.id === selectedDrink);
      if (dOpt) unit += dOpt.price;
    }
    if (product.customization?.extras && selectedExtras.length > 0) {
      selectedExtras.forEach((extraId) => {
        const eOpt = product.customization.extras.find((e) => e.id === extraId);
        if (eOpt) unit += eOpt.price;
      });
    }

    return {
      unitPrice: unit,
      totalPrice: unit * quantity,
    };
  }, [product, selectedSize, selectedCrust, selectedSpice, selectedDrink, selectedExtras, quantity]);

  if (!product) {
    return <ProductNotFound />;
  }

  const handleAddToCart = () => {
    const selectedOptionsSummary = {
      ...(selectedSize && { size: selectedSize }),
      ...(selectedCrust && { crust: selectedCrust }),
      ...(selectedSpice && { spice: selectedSpice }),
      ...(selectedDrink && { drink: selectedDrink }),
      ...(selectedExtras.length > 0 && { extras: selectedExtras }),
    };

    addToCart(product, selectedOptionsSummary, quantity, unitPrice);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div className="min-h-screen bg-[#09090C] text-white flex flex-col selection:bg-orange-500 selection:text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN PRODUCT DETAILS PAGE */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
        
        {/* BREADCRUMBS */}
        <Breadcrumbs category={product.category} productName={product.name} />

        {/* 2-COLUMN PRODUCT CUSTOMIZATION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mt-2">
          
          {/* LEFT: LARGE FOOD VISUAL GALLERY (5 cols on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ProductGallery product={product} />
          </div>

          {/* RIGHT: DETAILS, CUSTOMIZATION & ORDER SUMMARY (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* HEADER & INFO */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-1 block">
                {product.category}
              </span>
              <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed mt-3">
                {product.description}
              </p>
            </div>

            {/* CUSTOMIZATION OPTIONS */}
            <div className="space-y-1">
              {/* SIZE OPTIONS */}
              {product.customization?.sizes && (
                <CustomizationGroup
                  title="Choose Size"
                  required
                  type="radio"
                  options={product.customization.sizes}
                  selectedValues={selectedSize}
                  onChange={setSelectedSize}
                />
              )}

              {/* CRUST OPTIONS */}
              {product.customization?.crusts && (
                <CustomizationGroup
                  title="Select Crust"
                  required
                  type="radio"
                  options={product.customization.crusts}
                  selectedValues={selectedCrust}
                  onChange={setSelectedCrust}
                />
              )}

              {/* SPICE OPTIONS */}
              {product.customization?.spices && (
                <CustomizationGroup
                  title="Spice Level"
                  required
                  type="radio"
                  options={product.customization.spices}
                  selectedValues={selectedSpice}
                  onChange={setSelectedSpice}
                />
              )}

              {/* DRINK OPTIONS */}
              {product.customization?.drinks && (
                <CustomizationGroup
                  title="Pair With Beverage"
                  required={false}
                  type="radio"
                  options={product.customization.drinks}
                  selectedValues={selectedDrink}
                  onChange={setSelectedDrink}
                />
              )}

              {/* EXTRAS OPTIONS */}
              {product.customization?.extras && (
                <CustomizationGroup
                  title="Add Extras"
                  required={false}
                  type="checkbox"
                  options={product.customization.extras}
                  selectedValues={selectedExtras}
                  onChange={setSelectedExtras}
                />
              )}
            </div>

            {/* QUANTITY SELECTOR */}
            <div className="pt-2">
              <QuantitySelector
                quantity={quantity}
                onIncrease={() => setQuantity((q) => q + 1)}
                onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
              />
            </div>

            {/* DYNAMIC PRICE SUMMARY */}
            <PriceSummary
              unitPrice={unitPrice}
              quantity={quantity}
              totalPrice={totalPrice}
              originalPrice={product.originalPrice}
            />

            {/* ADD TO CART ACTION BUTTON */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-2xl font-heading font-black text-base sm:text-lg text-white flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer shadow-xl select-none ${
                isAdded
                  ? 'bg-emerald-500 shadow-emerald-500/30'
                  : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-orange-500/30 hover:scale-[1.01] active:scale-[0.99]'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-6 h-6 stroke-[3]" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>ADD TO CART — Rs. {totalPrice}</span>
                </>
              )}
            </button>

          </div>

        </div>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
