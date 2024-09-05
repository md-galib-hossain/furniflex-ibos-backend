import QueryBuilder from "../../builder/QueryBuilder";
import { TMeta } from "../../utils/sendResponse";
import { ProductSearchableFields } from "./product.constant";
import { Product } from "./product.model";

const getAllProducts = async (
  query: Record<string, unknown>
): Promise<{ meta: TMeta; result: IProduct[] }> => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(ProductSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await productQuery.modelQuery;
  const meta = await productQuery.countTotal();
  return {
    meta,
    result,
  };
};

export const ProductServices = {
  getAllProducts,
};
