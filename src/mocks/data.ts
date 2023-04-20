import { OrderStatus } from "~/constants/order";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const products: Product[] = [
  {
    description: "Fresh Blackberry",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    price: 24,
    title: "Blackberry",
    imagePath:
      "https://cdn.vectorstock.com/i/preview-1x/01/44/blackberry-vector-1270144.jpg",
  },
  {
    description: "Fresh Cranberry",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    price: 15,
    title: "Cranberry",
    imagePath:
      "https://cdn.vectorstock.com/i/preview-1x/42/15/cranberry-berry-cartoon-vector-45064215.jpg",
  },
  {
    description: "Fresh Currant",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    price: 23,
    title: "Currant",
    imagePath:
      "https://cdn.vectorstock.com/i/preview-1x/56/11/black-currant-branch-cartoon-vector-45215611.jpg",
  },
  {
    description: "Fresh Raspberry",
    id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    price: 15,
    title: "Raspberry",
    imagePath:
      "https://cdn.vectorstock.com/i/preview-1x/19/95/realistic-raspberry-composition-vector-46131995.jpg",
  },
  {
    description: "Fresh Strawberry",
    id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    price: 23,
    title: "Strawberry",
    imagePath:
      "https://cdn.vectorstock.com/i/preview-1x/91/33/ripe-strawberry-vector-729133.jpg",
  },
  {
    description: "Fresh Raspberry",
    id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    price: 15,
    title: "Blueberry",
    imagePath:
      "https://cdn.vectorstock.com/i/preview-1x/56/30/blueberry-vector-2835630.jpg",
  },
];

export const availableProducts: AvailableProduct[] = products.map(
  (product, index) => ({ ...product, count: index + 1 })
);

export const cart: CartItem[] = [
  {
    product: {
      description: "Fresh Blackberry",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
      price: 24,
      title: "Blackberry",
      imagePath:
        "https://cdn.vectorstock.com/i/preview-1x/01/44/blackberry-vector-1270144.jpg",
    },
    count: 2,
  },
  {
    product: {
      description: "Fresh Blackberry",
      id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
      price: 15,
      title: "Cranberry",
      imagePath:
        "https://cdn.vectorstock.com/i/preview-1x/42/15/cranberry-berry-cartoon-vector-45064215.jpg",
    },
    count: 5,
  },
];

export const orders: Order[] = [
  {
    id: "1",
    address: {
      address: "some address",
      firstName: "Name",
      lastName: "Surname",
      comment: "",
    },
    items: [
      { productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 2 },
      { productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1", count: 5 },
    ],
    statusHistory: [
      { status: OrderStatus.Open, timestamp: Date.now(), comment: "New order" },
    ],
  },
  {
    id: "2",
    address: {
      address: "another address",
      firstName: "John",
      lastName: "Doe",
      comment: "Ship fast!",
    },
    items: [{ productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 3 }],
    statusHistory: [
      {
        status: OrderStatus.Sent,
        timestamp: Date.now(),
        comment: "Fancy order",
      },
    ],
  },
];
