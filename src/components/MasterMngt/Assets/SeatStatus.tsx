'use client'
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  MRT_RowData
} from 'material-react-table';
import { SeatStatus } from '@/types/types';
const seatStatusData: SeatStatus[] = [
  {
    seat_id: 1,
    vendor_part_number: 1325468431,
    osc_start_date: '1-Jan-24',
    osc_end_date: '31-Dec-24',
    osc_license_status: 'Expired',
    lic_start_date: '1-Jan-24',
    lic_end_date: '31-Dec-24',
    license_status: 'Active',
    status_update_date: '1-Jan-24'
  },
  {
    seat_id: 2,
    vendor_part_number: 5469523659,
    osc_start_date: '1-Jan-24',
    osc_end_date: '31-Dec-24',
    osc_license_status: 'Active',
    lic_start_date: '1-Jan-24',
    lic_end_date: '31-Dec-24',
    license_status: 'Active',
    status_update_date: '1-Jan-24'
  },
  {
    seat_id: 3,
    vendor_part_number: 4326597456,
    osc_start_date: '1-Jan-24',
    osc_end_date: '31-Dec-24',
    osc_license_status: 'Renew Due',
    lic_start_date: '1-Jan-24',
    lic_end_date: '31-Dec-24',
    license_status: 'In-Active',
    status_update_date: '1-Jan-24'
  },
  {
    seat_id: 4,
    vendor_part_number: 5132669875,
    osc_start_date: '1-Jan-24',
    osc_end_date: '31-Dec-24',
    osc_license_status: 'Active',
    lic_start_date: '1-Jan-24',
    lic_end_date: '31-Dec-24',
    license_status: 'Active',
    status_update_date: '1-Jan-24'
  },
  {
    seat_id: 5,
    vendor_part_number: 4597856213,
    osc_start_date: '1-Jan-24',
    osc_end_date: '31-Dec-24',
    osc_license_status: 'Active',
    lic_start_date: '1-Jan-24',
    lic_end_date: '31-Dec-24',
    license_status: 'Active',
    status_update_date: '1-Jan-24'
  },
]



const SeatStatusPanel = () => {
  const columns = useMemo<MRT_ColumnDef<SeatStatus>[]>(
    () => [
      {
        accessorKey: 'seat_id', //access nested data with dot notation
        header: 'Seat',
        size: 150,
      },
      {
        accessorKey: 'vendor_part_number',
        header: 'Vendor Part Number',
        size: 150,
      },
      {
        accessorKey: 'osc_start_date',
        header: 'OSC Start Date',
        size: 150,
      },
      {
        accessorKey: 'osc_end_date',
        header: 'OSC End Date',
        size: 150,
      },
      {
        accessorKey: 'license_status',
        header: 'OSC License Status',
        size: 150,
      },
      {
        accessorKey: 'lic_start_date',
        header: 'Lic Start Date',
        size: 150,
      },
      {
        accessorKey: 'lic_end_date',
        header: 'Lic End Date',
        size: 150,
      },
      {
        accessorKey: 'license_status',
        header: 'License Status',
        size: 150,
      },
      {
        accessorKey: 'status_update_date',
        header: 'Status update date',
        size: 150,
      },
    ],
    [],
  );
  const table = useMaterialReactTable({
    columns,
    data: useMemo(() => seatStatusData, []), //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    renderTopToolbarCustomActions: () => (
      <div className="text-xl font-semibold flex gap-2 items-center mt-2">
        <div className="">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="#e38a24"></path> <path d="M6.88086 18.9001C6.47086 18.9001 6.13086 18.5601 6.13086 18.1501V16.0801C6.13086 15.6701 6.47086 15.3301 6.88086 15.3301C7.29086 15.3301 7.63086 15.6701 7.63086 16.0801V18.1501C7.63086 18.5701 7.29086 18.9001 6.88086 18.9001Z" fill="#e38a24"></path> <path d="M12 18.9C11.59 18.9 11.25 18.56 11.25 18.15V14C11.25 13.59 11.59 13.25 12 13.25C12.41 13.25 12.75 13.59 12.75 14V18.15C12.75 18.57 12.41 18.9 12 18.9Z" fill="#e38a24"></path> <path d="M17.1191 18.9002C16.7091 18.9002 16.3691 18.5602 16.3691 18.1502V11.9302C16.3691 11.5202 16.7091 11.1802 17.1191 11.1802C17.5291 11.1802 17.8691 11.5202 17.8691 11.9302V18.1502C17.8691 18.5702 17.5391 18.9002 17.1191 18.9002Z" fill="#e38a24"></path> <path d="M17.871 5.8201C17.871 5.7701 17.851 5.7101 17.841 5.6601C17.831 5.6201 17.821 5.5701 17.811 5.5301C17.791 5.4901 17.761 5.4601 17.741 5.4201C17.711 5.3801 17.681 5.3301 17.641 5.3001C17.631 5.2901 17.631 5.2801 17.621 5.2801C17.591 5.2601 17.561 5.2501 17.531 5.2301C17.491 5.2001 17.441 5.1701 17.391 5.1501C17.341 5.1301 17.291 5.1301 17.241 5.1201C17.201 5.1101 17.171 5.1001 17.131 5.1001H14.201C13.791 5.1001 13.451 5.4401 13.451 5.8501C13.451 6.2601 13.791 6.6001 14.201 6.6001H15.451C13.071 9.1001 10.071 10.8601 6.70096 11.7101C6.30096 11.8101 6.05096 12.2201 6.15096 12.6201C6.23096 12.9601 6.54096 13.1901 6.88096 13.1901C6.94096 13.1901 7.00096 13.1801 7.06096 13.1701C10.631 12.2801 13.821 10.4301 16.371 7.8101V8.7801C16.371 9.1901 16.711 9.5301 17.121 9.5301C17.531 9.5301 17.871 9.1901 17.871 8.7801V5.8501C17.871 5.8401 17.871 5.8301 17.871 5.8201Z" fill="#e38a24"></path> </g></svg>
        </div>
        Seat Status
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

export default SeatStatusPanel;
