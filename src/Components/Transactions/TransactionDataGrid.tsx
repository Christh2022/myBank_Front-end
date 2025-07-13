import * as React from 'react';
// import { columns, rows } from '../internals/data/gridData';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { CustomFooter } from '../../UI/DataGrid/customFooter';

const columns: GridColDef[] = [
  {
    field: 'date',
    headerName: 'Date',
    flex: 1,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    flex: 1,
  },
  {
    field: 'payement_name',
    headerName: 'Payement name',
    flex: 2,
  },
  {
    field: 'method',
    headerName: 'Method',
    flex: 1,
  },
  {
    field: 'category',
    headerName: 'Category',
    flex: 1.5,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    renderCell: (item)=>{
      return (
        <div className="text-[#59E5A9] bg-[rgba(89,229,169,0.41)] flex items-center justify-center rounded-[30px] h-[26px] ">{item.value}</div>
      )
    }
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

export const TransactionDataGrid = () => {
  const [selectedIds, setSelectedIds] = React.useState([]);
  return (
    <DataGrid
      checkboxSelection
      onRowSelectionModelChange={(ids) => setSelectedIds(ids)}
      rows={rows}
      columns={columns}
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      pageSizeOptions={[10, 15]}
      disableColumnResize
      density="compact"
      sx={{
        backgroundColor: 'transparent',
        border: 'none',
        '& .MuiDataGrid-mainContent': {
          '--DataGrid-t-header-background-base': 'rgba(255, 158, 0, 0.2)',
          '--DataGrid-t-color-foreground-base': '#fff',
          '--DataGrid-t-color-border-base': 'rgba(255, 255, 255, 0)',
          '--DataGrid-rowBorderColor': 'transparent',
          '& span': {
            color: `rgba(255, 158, 0, 1)`,
          },
          '& .MuiDataGrid-columnHeaders': {
            color: 'var(--DataGrid-t-color-foreground-base)',

            fontSize: 15,
            '& span': {
              color: '#fca311',
            },
            '& div': {
              fontWeight: '500',
            },
          },
          '& .MuiDataGrid-cell': {
            fontSize: 15,
            color: '#fff',
            fontWeight: '300',
          },
          '& .Mui-selected': {
            backgroundColor: 'rgba(255, 158, 0, 0.2)',
          },
          '& .MuiButtonBase-root.MuiPaginationItem-root ': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
          '& .MuiPaginationItem-root ': {
            color: 'white',
            fontWeight: '600',
            fontSize: 18,
            width: 38,
            height: 38,
          },
          '& .MuiPagination-ul > li:first-of-type > button': {
            width: 150,
            '& span': {
              color: 'white',
              fontWeight: 'bold',
            },
          },
          '& .MuiPagination-ul > li:last-of-type > button': {
            width: 150,
            '& span': {
              color: 'white',
              fontWeight: 'bold',
            },
          },
          '& .MuiStack-root .Mui-selected': {
            backgroundColor: 'rgba(250,158,0,0.8)',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: 'rgba(255, 158, 0, 0.2)',
          },
          '& .MuiDataGrid-footerContainer': {
            color: '#fff',
          },
        },
      }}
      slots={{
        footer: CustomFooter,
      }}

      // showToolbar
    />
  );
};
