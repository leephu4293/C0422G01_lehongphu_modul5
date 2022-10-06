export interface Customer {
   id?: number;
   name?: string;
   dayOfBirth?: string;
   gender?: string;
   idCard?: string;
   phone?: string;
   email?: string;
   address?: string;
   typeCustomer?: {
     id: number;
     name: string
   };
}
