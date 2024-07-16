import { AssetTransaction } from "../../../../types/types";
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  MRT_RowData
} from 'material-react-table';
import transactionData from "../../../Transaction/TransactionsData";
import { MenuItem } from "@mui/material";

const assetsTransactionsData: AssetTransaction[] = [
  {
    txn_number: 'TX126',
    txn_date: '4-Feb-24',
    vendor_part: 'paperstream Capture Pro',
    osc_part_number: 'CG101-1Yr',
    seat_count: 5,
    start_date: '1-Jan-24',
    end_date: '31-Dec-24'
  },
  {
    txn_number: 'TX106',
    txn_date: '12-Dec-23',
    vendor_part: 'paperstream Capture Pro',
    osc_part_number: 'CG101-1Yr',
    seat_count: 5,
    start_date: '1-Jan-24',
    end_date: '31-Dec-24'
  },
  {
    txn_number: 'TX101',
    txn_date: '27_dec-22',
    vendor_part: 'paperstream Capture Pro',
    osc_part_number: 'CG101-1Yr',
    seat_count: 5,
    start_date: '1-Jan-24',
    end_date: '31-Dec-24'
  },
]

const AssetTransactionsPanel = () => {
  const columns = useMemo<MRT_ColumnDef<AssetTransaction>[]>(
    () => [
      {
        accessorKey: 'txn_number', //access nested data with dot notation
        header: 'Txn Number',
        size: 150,
      },
      {
        accessorKey: 'txn_date',
        header: 'Txn Date',
        size: 120,
      },
      {
        accessorKey: 'vendor_part',
        header: 'Vendor Part',
        size: 200,
      },
      {
        accessorKey: 'osc_part_number',
        header: 'OSC Part Number',
        size: 150,
      },
      {
        accessorKey: 'seat_count',
        header: 'Seat count',
        size: 100,
      },
      {
        accessorKey: 'start_date',
        header: 'Lic Start Date',
        size: 120,
      },
      {
        accessorKey: 'end_date',
        header: 'Lic End Date',
        size: 120,
      },
    ],
    [],
  );
  const table = useMaterialReactTable({
    columns,
    data: useMemo(() => assetsTransactionsData, []), //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    renderTopToolbarCustomActions: () => (
      <div className="text-xl font-semibold flex gap-2 items-center mt-2">
        <div className="flex justify-center items-center">
          <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <circle cx="16" cy="16" r="16" fill="#00EA90"></circle> <path fill="#FFF" fill-opacity=".698" fill-rule="nonzero" d="M18.215 7.508l7.777 4.068-7.493 4.593-.284-8.661zm-4.43 16.941l-7.777-4.068 7.493-4.594.284 8.662z"></path> <path fill="#FFF" fill-rule="nonzero" d="M25.992 20.679L15.179 27v-8.869l10.813-6.555v9.103zm-19.984-9.4L16.821 5v8.834L6.008 20.381v-9.103z"></path> </g> </g></svg>
        </div>
        <div>
          Transaction Data
        </div>
      </div>
    ),
  });
  return (
    <div className="bg-white mt-10 rounded-xl shadow-sm">
      <div className="px-7.5 py-4">
        <div className="overflow-x-auto">
          <MaterialReactTable table={table} />
        </div>
      </div>
    </div>
  );
};

export default AssetTransactionsPanel;
