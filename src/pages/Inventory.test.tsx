import { render } from '@/test/test-utils';
import Inventory from './Inventory';

describe(`Product List View: A page where store owners can view a list of all the products in their store, including product name, SKU, stock level, and price.
Product Detail View: A page where store owners can view detailed information about a specific product, including product images, descriptions, and related products.
Stock Level Update: A feature that allows store owners to update the stock level of a product.
Low Stock Alert: A feature that sends an alert to store owners when a product's stock level falls below a certain threshold.`, () => {
  describe(`view list of products includes name, image,stock price and stock level`, () => {
    test('list of products', () => {
      const { getByRole } = render(<Inventory />);
      expect(getByRole('list')).toBeInTheDocument();
    });
  });
  describe(`show and add product`, () => {
    test('a modal named Product Info', () => {
      const { getByRole } = render(<Inventory />);
      expect(getByRole('div', { name: 'Product Info' })).toBeInTheDocument();
    });
  });
});
