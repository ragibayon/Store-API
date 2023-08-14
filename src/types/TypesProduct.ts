import CompanyName from './TypesCompanyName';
interface IProduct {
  name: string;
  price: number;
  company: CompanyName;
  featured: boolean;
  rating: number;
  createdAt: Date;
}
export default IProduct;
