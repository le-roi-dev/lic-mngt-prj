'use client'
import { useMemo } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
    MRT_RowData
} from 'material-react-table';
import { MenuItem } from '@mui/material';
import { Transaction } from '@/types/types';
import { useRouter } from 'next/navigation';
import transactionData from '@/data/TransactionsData';

const TransactionTable = () => {
    //should be memoized or stable
    const router = useRouter();
    const columns = useMemo<MRT_ColumnDef<Transaction>[]>(
        () => [
            {
                accessorKey: 'organization', //access nested data with dot notation
                header: 'Organization',
                size: 150,
            },
            {
                accessorKey: 'txn_number',
                header: 'Txn Number',
                size: 150,
            },
            {
                accessorKey: 'txn_date',
                header: 'Txn Date',
                size: 150,
            },
            {
                accessorKey: 'txn_source',
                header: 'Txn Source',
                size: 150,
            },
            {
                accessorKey: 'txn_type',
                header: 'Txn Type',
                size: 150,
            },
            {
                accessorKey: 'txn_action',
                header: 'Txn Action',
                size: 150,
            },
            {
                accessorKey: 'src_ref_number',
                header: 'Source Ref Number',
                size: 150,
            },
            {
                accessorKey: 'src_ref_date',
                header: 'Source Ref Date',
                size: 150,
            },
            {
                accessorKey: 'txn_status',
                header: 'Txn Status',
                size: 150,
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data: useMemo(() => transactionData, []), //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableColumnPinning: true,
        enableRowActions: true,
        renderRowActionMenuItems: ({ row }) => [
            <MenuItem key="detail" onClick={() => handleMenuItemClick(row.original)}>
                Edit
            </MenuItem>,],
        initialState: {
            columnPinning: { left: [], right: ['mrt-row-actions'] },
        },
    });
    const handleMenuItemClick = (transaction: Transaction) => {
        // Handle the click event here
        console.log('Transaction details:', transaction);
        router.push(`/transaction/transactions/${transaction.id}/edit`)
        // You can perform any action with the transaction information here
    };
    return <MaterialReactTable table={table} />;
};

export default TransactionTable;
