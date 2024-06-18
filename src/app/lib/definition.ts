export type RequisitionTable = {
    id: string;
    department_id: string;
    name: string;
    type: 'item' | 'service';
    quantity: number;
    date: string;
    price: number;
    Description: string;
    status: 'Accepted' | 'Rejected' | 'pending';
  };

  