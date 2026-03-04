import { HashRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { TriPayScreen } from "./screens/TriPayScreen";
import { ServiceHubScreen } from "./screens/ServiceHubScreen";
import { ShopDetailScreen } from "./screens/ShopDetailScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { OrdersScreen } from "./screens/OrdersScreen";
import { OrderTrackingScreen } from "./screens/OrderTrackingScreen";
import { ProductReviewScreen } from "./screens/ProductReviewScreen";
import { OrderDetailsScreen } from "./screens/OrderDetailsScreen";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/categories" element={<CategoriesScreen />} />
        <Route path="/tripay" element={<TriPayScreen />} />
        <Route path="/services" element={<ServiceHubScreen />} />
        <Route path="/shop/:id" element={<ShopDetailScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/profile/edit" element={<ProfileScreen />} />
        <Route path="/profile/addresses" element={<ProfileScreen />} />
        <Route path="/profile/payments" element={<ProfileScreen />} />
        <Route path="/profile/orders" element={<OrdersScreen />} />
        <Route path="/profile/wishlist" element={<ProfileScreen />} />
        <Route path="/profile/reviews" element={<ProfileScreen />} />
        <Route path="/profile/notifications" element={<ProfileScreen />} />
        <Route path="/profile/settings" element={<ProfileScreen />} />
        <Route path="/profile/help" element={<ProfileScreen />} />
        <Route path="/order/track/:orderId" element={<OrderTrackingScreen />} />
        <Route path="/order/details/:orderId" element={<OrderDetailsScreen />} />
        <Route path="/product/review/:orderId" element={<ProductReviewScreen />} />
      </Routes>
    </HashRouter>
  );
}