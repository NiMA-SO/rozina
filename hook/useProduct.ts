import APIClient from "@/service/api-client";
import { ProductsResponse } from "@/types/products";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<ProductsResponse>("/products");


const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => apiClient.get(),
  });
};
export default useProducts;