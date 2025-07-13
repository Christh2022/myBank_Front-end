import type { GridColDef } from "@mui/x-data-grid";
import PageWithLoader from "../../Components/PageWithLoader/PageWithLoader";
import { TransactionDataGrid } from "../../Components/Transactions/TransactionDataGrid";

const columns: GridColDef[] = [
  {
    field: 'date',
    headerName: 'Date',
    flex: 1,
    sortable: false,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    flex: 1,
    sortable: false,
  },
  {
    field: 'payement_name',
    headerName: 'Payement name',
    flex: 2,
    sortable: false,
  },
  {
    field: 'method',
    headerName: 'Method',
    flex: 1,
    sortable: false,
  },
  {
    field: 'category',
    headerName: 'Category',
    flex: 1.5,
    sortable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    renderCell: (item) => {
      return (
        <div className="flex items-center justify-center flex-1 h-[100%]">
          <div className="text-[#59E5A9] bg-[rgba(89,229,169,0.41)] flex items-center justify-center rounded-[30px] h-[26px] w-[150px] ">
            {item.value}
          </div>
        </div>
      );
    },
    sortable: false,
  },
  {
    field: 'option',
    headerName: '...',
    flex: 0.3,
    renderCell: (item) => {
      return (
        <div className="text-[23px] cursor-pointer font-bold">{item.value}</div>
      );
    },
    renderHeader: () => {
      return <div className="text-[30px] font-bold">...</div>;
    },
    sortable: false,
  },
];

const rows = [
  {
    id: 1,
    date: '01 Jun 10.30',
    amount: '€550.00',
    payement_name: 'Full Web Design',
    method: 'Visa "3456',
    category: 'Dev Service',
    status: 'successful',
    option: '...',
  },
  {
    id: 2,
    date: '30 Mai 10.45',
    amount: '€1200.34',
    payement_name: 'Software Development',
    method: 'Visa "3456',
    category: 'Dev Service',
    status: 'successful',
    option: '...',
  },
  {
    id: 3,
    date: '30 Mai 03.00',
    amount: '€240.56',
    payement_name: 'App Design',
    method: 'Visa "3456',
    category: 'Dev Service',
    status: 'successful',
    option: '...',
  },
  {
    id: 4,
    date: '29 Mai 09.00',
    amount: '€55.00',
    payement_name: 'Shop',
    method: 'Visa "3456',
    category: 'Dev Service',
    status: 'successful',
    option: '...',
  },
  {
    id: 5,
    date: '27 Mai 13.30',
    amount: '€760.00',
    payement_name: 'Full website Design',
    method: 'Visa "3456',
    category: 'Dev Service',
    status: 'successful',
    option: '...',
  },
  {
    id: 6,
    date: '03 Mai 11.32',
    amount: '€100.23',
    payement_name: 'Maintenance',
    method: 'Visa "3456',
    category: 'Dev Service',
    status: 'successful',
    option: '...',
  },
  {
    id: 7,
    date: '25 Apr 10.30',
    amount: '€15.00',
    payement_name: 'shop',
    method: 'Visa "3456',
    category: 'Dev Service',
    status: 'successful',
    option: '...',
  },
  {
    id: 8,
    date: '15 Apr 07.30',
    amount: '€550.00',
    payement_name: 'Wordpress Dev',
    method: 'Visa "3456',
    category: 'Dev Service',
    status: 'successful',
    option: '...',
  },
  {
    id: 9,
    date: '10 Apr 15.37',
    amount: '€4,000.00',
    payement_name: 'Saas project',
    method: 'Visa "3456',
    category: 'Dev Service',
    status: 'successful',
    option: '...',
  },
  {
    id: 10,
    date: '27 Mar 11.11',
    amount: '€550.00',
    payement_name: 'Full Website Design',
    method: 'Visa "3456',
    category: 'Dev Service',
    status: 'successful',
    option: '...',
  },
  {
    id: 11,
    date: '03 Mar 08.33',
    amount: '5,600.00',
    payement_name: 'Saas Project',
    method: 'Visa "3456',
    category: 'Dev Service',
    status: 'successful',
    option: '...',
  },
];

export default function Expenses() {

    return (
        <PageWithLoader>
            
            <TransactionDataGrid {...{ columns, rows }} />
        </PageWithLoader>
    )
}
