import { useMemo } from 'react';
import React from "react";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
    MRT_RowData
} from 'material-react-table';

import { useNavigate } from 'react-router-dom';
import { Asset } from "../../../types/types";
import assetsData from "./AssetsData";
import { MenuItem } from '@mui/material';

const AssetsPage = () => {
    const navigate = useNavigate();
    const handleClickItem = (asset_id: number) => {
        navigate(`/master-mgmt/assets/${asset_id}`);
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
            <div className="flex flex-col gap-10">
                <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                    <div className="max-w-full overflow-x-auto">
                        <MaterialReactTable table={table} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AssetsPage;
