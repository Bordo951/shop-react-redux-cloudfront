import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "~/components/MainLayout/MainLayout";
import PageProductForm from "~/components/pages/PageProductForm/PageProductForm";
import PageOrders from "~/components/pages/PageOrders/PageOrders";
import PageOrder from "~/components/pages/PageOrder/PageOrder";
import PageProductImport from "~/components/pages/admin/PageProductImport/PageProductImport";
import PageCart from "~/components/pages/PageCart/PageCart";
import PageProducts from "~/components/pages/PageProducts/PageProducts";
import { Typography } from "@mui/material";

function App() {
  useEffect(() => {
    localStorage.setItem(
      "authorization_token",
      "Basic Qm9yZG85NTE6IFRFU1RfUEFTU1dPUkQ"
    );
  }, []);

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<PageProducts />} />
        <Route path="cart" element={<PageCart />} />
        <Route path="admin/orders">
          <Route index element={<PageOrders />} />
          <Route path=":id" element={<PageOrder />} />
        </Route>
        <Route path="admin/products" element={<PageProductImport />} />
        <Route path="admin/product-form">
          <Route index element={<PageProductForm />} />
          <Route path=":id" element={<PageProductForm />} />
        </Route>
        <Route
          path="*"
          element={<Typography variant="h1">Not found</Typography>}
        />
      </Routes>
    </MainLayout>
  );
}

export default App;
