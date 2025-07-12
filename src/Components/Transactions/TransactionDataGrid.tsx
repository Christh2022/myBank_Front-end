import * as React from 'react';
// import { columns, rows } from '../internals/data/gridData';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'date', headerName: 'Date',  },
  { field: 'amount', headerName: 'Amount',  },
  { field: 'payement_name', headerName: 'Payement name', minWidth: 300  },
  { field: 'method', headerName: 'Method',  },
  { field: 'category', headerName: 'Category',  },
  { field: 'status', headerName: 'Status',  },
  { field: 'option', headerName: '...',  },
];

const rows = [
  { id: 1, date: '01 Jun 10.30', amount: '€550.00', payement_name: "Full Web Design", method: 'Visa "3456' },
  { id: 2, date: '30 Mai 10.45', amount: '€1200.34', payement_name: "Software Development", method : 'Visa "3456' },
  { id: 3, date: '30 Mai 03.00', amount: '€240.56', payement_name: "App Design", method: 'Visa "3456' },
  { id: 4, date: '29 Mai 09.00', amount: '€55.00', payement_name: "Shop", method: 'Visa "3456'},
  { id: 5, date: '27 Mai 13.30', amount: '€760.00', payement_name: "Full website Design", method: 'Visa "3456' },
  { id: 6, date: '03 Mai 11.32', amount: '€100.23', payement_name: "Maintenance", method: 'Visa "3456' },
  { id: 7, date: '25 Apr 10.30', amount: '€15.00', payement_name: "shop", method: 'Visa "3456' },
  { id: 8, date: '15 Apr 07.30', amount: '€550.00', payement_name: "Wordpress Dev", method: 'Visa "3456' },
  { id: 9, date: '10 Apr 15.37', amount: '€4,000.00', payement_name: "Saas project", method: 'Visa "3456' },
  { id: 10, date: '27 Mar 11.11', amount: '€550.00', payement_name: "Full Website Design", method: 'Visa "3456' },
  { id: 11, date: '03 Mar 08.33', amount: '5,600.00', payement_name: "Saas Project", method: 'Visa "3456' },
];

export const TransactionDataGrid = () => {
  return (
    <DataGrid
      checkboxSelection
      rows={rows}
      columns={columns}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
      }
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      pageSizeOptions={[10, 20, 50]}
      disableColumnResize
      density="compact"
      slotProps={{
        filterPanel: {
          filterFormProps: {
            logicOperatorInputProps: {
              variant: 'outlined',
              size: 'small',
            },
            columnInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            operatorInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: 'outlined',
                size: 'small',
              },
            },
          },
        },
      }}
    />
  );
};
