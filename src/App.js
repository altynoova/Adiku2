import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import loadable from './component/Common/loader/loadable';
import Loading from './component/Common/loader';
import pMinDelay from 'p-min-delay';

// All Page Lazy Import
const Furniture = loadable(() => pMinDelay(import('./page/furniture'), 250), { fallback: <Loading /> });
const Electronics = loadable(() => pMinDelay(import('./page/electronics'), 250), { fallback: <Loading /> });
const Grocery = loadable(() => pMinDelay(import('./page/grocery'), 250), { fallback: <Loading /> });
const Pharmacy = loadable(() => pMinDelay(import('./page/pharmacy'), 250), { fallback: <Loading /> });
const Jewllary = loadable(() => pMinDelay(import('./page/jewllary'), 250), { fallback: <Loading /> });
const BabyToys = loadable(() => pMinDelay(import('./page/baby-toys'), 250), { fallback: <Loading /> });
const ShopGrid = loadable(() => pMinDelay(import('./page/shop'), 250), { fallback: <Loading /> });
const ShopTwo = loadable(() => pMinDelay(import('./page/shop/shop-two'), 250), { fallback: <Loading /> });
const ShopList = loadable(() => pMinDelay(import('./page/shop/shop-list'), 250), { fallback: <Loading /> });
const ShopLeftSideBar = loadable(() => pMinDelay(import('./page/shop/shop-left-sidebar'), 250), { fallback: <Loading /> });
const ShopRightSideBar = loadable(() => pMinDelay(import('./page/shop/shop-right-sidebar'), 250), { fallback: <Loading /> });
const ProductDetails = loadable(() => pMinDelay(import('./page/product/index'), 250), { fallback: <Loading /> });
const ProductDetailsTwos = loadable(() => pMinDelay(import('./page/product/product-details-two'), 250), { fallback: <Loading /> });
const Cart = loadable(() => pMinDelay(import('./page/cart/index'), 250), { fallback: <Loading /> });
const CartTwo = loadable(() => pMinDelay(import('./page/cart/cart-two'), 250), { fallback: <Loading /> });
const CartThree = loadable(() => pMinDelay(import('./page/cart/cart-three'), 250), { fallback: <Loading /> });
const EmptyCarts = loadable(() => pMinDelay(import('./page/cart/empty-cart'), 250), { fallback: <Loading /> });
const CheckoutOne = loadable(() => pMinDelay(import('./page/checkout/index'), 250), { fallback: <Loading /> });
const CheckoutTwos = loadable(() => pMinDelay(import('./page/checkout/checkout-two'), 250), { fallback: <Loading /> });
const WishLists = loadable(() => pMinDelay(import('./page/shop/wishList'), 250), { fallback: <Loading /> });
const Compares = loadable(() => pMinDelay(import('./page/shop/compares'), 250), { fallback: <Loading /> });
const About = loadable(() => pMinDelay(import('./page/about'), 250), { fallback: <Loading /> });
const OrderComplete = loadable(() => pMinDelay(import('./page/order/order-complete'), 250), { fallback: <Loading /> });
const OrderTracking = loadable(() => pMinDelay(import('./page/order/order-tracking'), 250), { fallback: <Loading /> });
const ProductHover = loadable(() => pMinDelay(import('./page/product/product-hover'), 250), { fallback: <Loading /> });
const OrderSuccesses = loadable(() => pMinDelay(import('./page/order/order-success'), 250), { fallback: <Loading /> });
const EmailTemplateOnes = loadable(() => pMinDelay(import('./page/email/index'), 250), { fallback: <Loading /> });
const EmailTemplateTwos = loadable(() => pMinDelay(import('./page/email/email-template-two'), 250), { fallback: <Loading /> });
const EmailTemplateThrees = loadable(() => pMinDelay(import('./page/email/email-template-three'), 250), { fallback: <Loading /> });
const InvoiceOne = loadable(() => pMinDelay(import('./page/invoice/index'), 250), { fallback: <Loading /> });
const InvoiceTwo = loadable(() => pMinDelay(import('./page/invoice/invoice-two'), 250), { fallback: <Loading /> });
const LookBooks = loadable(() => pMinDelay(import('./page/shop/look-book'), 250), { fallback: <Loading /> });
const BlogGridThrees = loadable(() => pMinDelay(import('./page/blog/blog-grid-two'), 250), { fallback: <Loading /> });
const BlogGridTwos = loadable(() => pMinDelay(import('./page/blog/'), 250), { fallback: <Loading /> });
const BlogListView = loadable(() => pMinDelay(import('./page/blog/blog-list'), 250), { fallback: <Loading /> });
const BlogSingleOnes = loadable(() => pMinDelay(import('./page/blog/blog-single-one'), 250), { fallback: <Loading /> });
const BlogSingleTwos = loadable(() => pMinDelay(import('./page/blog/blog-single-two'), 250), { fallback: <Loading /> });
const Vendor = loadable(() => pMinDelay(import('./page/vendor/'), 250), { fallback: <Loading /> });
const AllProducts = loadable(() => pMinDelay(import('./page/vendor/all-product'), 250), { fallback: <Loading /> });
const AllOrders = loadable(() => pMinDelay(import('./page/vendor/all-order'), 250), { fallback: <Loading /> });
const VendorProfile = loadable(() => pMinDelay(import('./page/vendor/vendor-profile'), 250), { fallback: <Loading /> });
const AddProducts = loadable(() => pMinDelay(import('./page/vendor/add-products'), 250), { fallback: <Loading /> });
const VendorSetting = loadable(() => pMinDelay(import('./page/vendor/vendor-setting'), 250), { fallback: <Loading /> });
const MyAccounts = loadable(() => pMinDelay(import('./page/my-account'), 250), { fallback: <Loading /> });
const CustomerOrder = loadable(() => pMinDelay(import('./page/my-account/customer-order'), 250), { fallback: <Loading /> });
const CustomerDownloads = loadable(() => pMinDelay(import('./page/my-account/customer-downloads'), 250), { fallback: <Loading /> });
const CustomerAddress = loadable(() => pMinDelay(import('./page/my-account/customer-address'), 250), { fallback: <Loading /> });
const CustomerAccountDetails = loadable(() => pMinDelay(import('./page/my-account/customer-account-details'), 250), { fallback: <Loading /> });
const AccountEdit = loadable(() => pMinDelay(import('./page/vendor/account-edit'), 250), { fallback: <Loading /> });
const Login = loadable(() => pMinDelay(import('./page/login'), 250), { fallback: <Loading /> });
const Register = loadable(() => pMinDelay(import('./page/register'), 250), { fallback: <Loading /> });
const Error = loadable(() => pMinDelay(import('./page/error'), 250), { fallback: <Loading /> });
const PrivacyPolicy = loadable(() => pMinDelay(import('./page/privacy-policy'), 250), { fallback: <Loading /> });
const Faqs = loadable(() => pMinDelay(import('./page/faqs'), 250), { fallback: <Loading /> });
const ComingSoon = loadable(() => pMinDelay(import('./page/coming-soon'), 250), { fallback: <Loading /> });
const ContactOne = loadable(() => pMinDelay(import('./page/contact'), 250), { fallback: <Loading /> });
const ContactTwo = loadable(() => pMinDelay(import('./page/contact/contact-two'), 250), { fallback: <Loading /> });
const ScrollToTop = loadable(() => pMinDelay(import('./component/Common/ScrollToTop'), 250), { fallback: <Loading /> });
const Fashion = loadable(() => pMinDelay(import('./page/'), 250), { fallback: <Loading /> });

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/about' exact element={<About/>} />
          <Route path='/' exact element={<Fashion/>} />
          <Route path='/furniture' exact element={<Furniture/>} />
          <Route path='/electronics' exact element={<Electronics/>} />
          <Route path='/grocery' exact element={<Grocery/>} />
          <Route path='/pharmacy' exact element={<Pharmacy/>} />
          <Route path='/jewllary' exact element={<Jewllary/>} />
          <Route path='/baby-toys' exact element={<BabyToys/>} />
          <Route path='/shop' exact element={<ShopGrid/>} />
          <Route path='/shopTwo' exact element={<ShopTwo/>} />
          <Route path='/shoplist' exact element={<ShopList/>} />
          <Route path='/shop-left-bar' exact element={<ShopLeftSideBar/>} />
          <Route path='/shop-right-bar' exact element={<ShopRightSideBar/>} />
          <Route path='/product-details-one/:id' exact element={<ProductDetails/>} />
          <Route path='/product-details-two/:id' exact element={<ProductDetailsTwos/>} />
          <Route path='/cart' exact element={<Cart/>} />
          <Route path='/cartTwo' exact element={<CartTwo/>} />
          <Route path='/cartThree' exact element={<CartThree/>} />
          <Route path='/empty-cart' exact element={<EmptyCarts/>} />
          <Route path='/checkout-one' exact element={<CheckoutOne/>} />
          <Route path='/checkout-two' exact element={<CheckoutTwos/>} />
          <Route path='/wishlist' exact element={<WishLists/>} />
          <Route path='/compare' exact element={<Compares/>} />
          <Route path='/order-complete' exact element={<OrderComplete/>} />
          <Route path='/order-tracking' exact element={<OrderTracking/>} />
          <Route path='/about' exact element={<About/>} />
          <Route path='/product-hover' exact element={<ProductHover/>} />
          <Route path='/order-success' exact element={<OrderSuccesses/>} />
          <Route path='/email-template-one' exact element={<EmailTemplateOnes/>} />
          <Route path='/email-template-two' exact element={<EmailTemplateTwos/>} />
          <Route path='/email-template-three' exact element={<EmailTemplateThrees/>} />
          <Route path='/invoice-one' exact element={<InvoiceOne/>} />
          <Route path='/invoice-two' exact element={<InvoiceTwo/>} />
          <Route path='/lookbooks' exact element={<LookBooks/>} />
          <Route path='/blog-grid-three' exact element={<BlogGridThrees/>} />
          <Route path='/blog-grid-two' exact element={<BlogGridTwos/>} />
          <Route path='/blog-list-view' exact element={<BlogListView/>} />
          <Route path='/blog-single-one' exact element={<BlogSingleOnes/>} />
          <Route path='/blog-single-two' exact element={<BlogSingleTwos/>} />
          <Route path='/vendor-dashboard' exact element={<Vendor/>} />
          <Route path='/vendor/all-product' exact element={<AllProducts/>} />
          <Route path='/vendor/all-order' exact element={<AllOrders/>} />
          <Route path='/vendor/vendor-profile' exact element={<VendorProfile/>} />
          <Route path='/vendor/add-products' exact element={<AddProducts/>} />
          <Route path='/vendor/vendor-setting' exact element={<VendorSetting/>} />
          <Route path='/my-account' exact element={<MyAccounts/>} />
          <Route path='/my-account/customer-order' exact element={<CustomerOrder/>} />
          <Route path='/my-account/customer-download' exact element={<CustomerDownloads/>} />
          <Route path='/my-account/customer-address' exact element={<CustomerAddress/>} />
          <Route path='/my-account/customer-account-details' exact element={<CustomerAccountDetails/>} />
          <Route path='/account-edit' exact element={<AccountEdit/>} />
          <Route path='/login' exact element={<Login/>} />
          <Route path='/register' exact element={<Register/>} />
          <Route path='/privacy-policy' exact element={<PrivacyPolicy/>} />
          <Route path='/faqs' exact element={<Faqs/>} />
          <Route path='/coming-soon' exact element={<ComingSoon/>} />
          <Route path='/contact-one' exact element={<ContactOne/>} />
          <Route path='/contact-two' exact element={<ContactTwo/>} />
          <Route exact element={<Error/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;