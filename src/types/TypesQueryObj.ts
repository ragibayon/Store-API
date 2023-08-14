import CompanyNameType from './../types/TypesCompanyName';
interface QueryObj {
  featured?: boolean;
  page?: number;
  company?: CompanyNameType;
  name?: {
    $regex: string;
    $options: string;
  };
}

export default QueryObj;
