declare type Menu = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

declare type Restaurants = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Menu[];
};

declare type Product = {
  id: number;
  price: number;
};

declare type CartState = {
  items: Menu[];
  isOpen: boolean;
  isOrderOpen: boolean;
};

declare type RestaurantParams = {
  paramsId: string;
  id: string;
};

declare type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

declare type PurchaseResponse = {
  orderId: string;
};

declare type ButtonProps = {
  name: string;
  onClick?: React.MouseEventHandler<Element>;
  type?:
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & "button")
    | "reset"
    | "submit"
    | undefined;
};
