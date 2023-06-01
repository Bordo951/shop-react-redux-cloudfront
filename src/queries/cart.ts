import axios, { AxiosError } from "axios";
import React from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import API_PATHS from "~/constants/apiPaths";
import { CartItem, Cart, CartItem1 } from "~/models/CartItem";

export function useCart() {
  return useQuery<Cart, AxiosError>("cart", async () => {
    const res = await axios.get<Cart>(`${API_PATHS.cart}/api/profile/cart`, {
      headers: {
        Authorization: `Basic Qm9yZG85NTE6IFRFU1RfUEFTU1dPUkQ`,
      },
    });
    return res.data;
  });
}

export function useCartData() {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<CartItem[]>("cart");
}

export function useInvalidateCart() {
  const queryClient = useQueryClient();
  return React.useCallback(
    () => queryClient.invalidateQueries("cart", { exact: true }),
    []
  );
}

export function useUpsertCart() {
  return useMutation((values: CartItem1[]) =>
    axios.put<Cart>(`${API_PATHS.cart}/api/profile/cart`, values, {
      headers: {
        Authorization: `Basic Qm9yZG85NTE6IFRFU1RfUEFTU1dPUkQ`,
      },
    })
  );
}
