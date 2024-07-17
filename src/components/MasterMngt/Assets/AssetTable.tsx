'use client'
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import React, { useEffect, useMemo } from "react";
import { Asset } from "@/types/types";
import {
    MenuItem,
} from '@mui/material';
import assetsData from '@/data/AssetsData';
import { useRouter } from 'next/navigation';

const AssetTable = () => {
    const router = useRouter();

    const handleClickItem = (asset_id: number) => {
        router.push(`/master-mngt/assets/${asset_id}`)
    }
    const columns = useMemo<MRT_ColumnDef<Asset>[]>(
        () => [
            {
                accessorKey: 'organization', //access nested data with dot notation
                header: 'Organization',
                size: 150,
            },
            {
                accessorKey: 'asset_number',
                header: 'Asset Number',
                size: 150,
            },
            {
                accessorKey: 'product_part_number',
                header: 'Product Part Number',
                size: 150,
            },
            {
                accessorKey: 'asset_type',
                header: 'Asset Type',
                size: 150,
            },
            {
                accessorKey: 'vendor_name',
                header: 'Vender Name',
                size: 120,
            },
            {
                accessorKey: 'vender_part',
                header: 'Vendor Part',
                size: 200,
            },
        ],
        [],
    );
    const table = useMaterialReactTable({
        columns,
        data: useMemo(() => assetsData, []), //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableColumnPinning: true,
        enableRowActions: true,
        renderRowActionMenuItems: ({ row }) => [
            <MenuItem key="detail" onClick={() => handleClickItem(row.original.asset_id)}>
                Detail
            </MenuItem>,],
        initialState: {
            columnPinning: { left: [], right: ['mrt-row-actions'] },
        },
        renderTopToolbarCustomActions: () => (
            <div className="text-xl font-semibold">Assets List</div>
        ),
    });
    return (
        <>
            <MaterialReactTable table={table} />
        </>
    );
};

export default AssetTable;
