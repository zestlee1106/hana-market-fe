import { products } from "../../mocks/product";

// products mock data
export async function GET() {
  return Response.json(products);
}
