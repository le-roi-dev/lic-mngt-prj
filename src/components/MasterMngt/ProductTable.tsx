'use client'
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import React, { useMemo } from "react";
import { Product } from "@/types/types";
import productData from "@/data/ProductsData";
import {
    Drawer,
    MenuItem,
} from '@mui/material';

const ProductTable = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [clickedProduct, setClickedProduct] = React.useState<Product>(productData[0]);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpenDrawer(newOpen);
    };
    const handleClickItem = (osc_product_id: number) => {
        const product = productData.find(pd => pd.osc_product_id === osc_product_id);
        if (product) {
            setClickedProduct(product);
            setOpenDrawer(true);
        }
    }
    const columns = useMemo<MRT_ColumnDef<Product>[]>(
        () => [
            {
                accessorKey: 'osc_product_id', //access nested data with dot notation
                header: 'OSC Part Number',
                size: 150,
            },
            {
                accessorKey: 'part_type',
                header: 'Part Type',
                size: 150,
            },
            {
                accessorKey: 'active',
                header: 'Active',
                size: 150,
            },
            {
                accessorKey: 'duration',
                header: 'Duration',
                size: 150,
            },
            {
                accessorKey: 'vendor_name',
                header: 'Vender name',
                size: 150,
            },
            {
                accessorKey: 'vendor_part_number',
                header: 'Vender Part Number',
                size: 150,
            },
            {
                accessorKey: 'license_source_set',
                header: 'License Source',
                size: 150,
            },
            {
                accessorKey: 'email_template_source',
                header: 'Email Template Source',
                size: 150,
            },
        ],
        [],
    );
    const table = useMaterialReactTable({
        columns,
        data: useMemo(() => productData, []), //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableColumnPinning: true,
        enableRowActions: true,
        renderRowActionMenuItems: ({ row }) => [
            <MenuItem key="detail" onClick={() => handleClickItem(row.original.osc_product_id)}>
                Detail
            </MenuItem>,],
        initialState: {
            columnPinning: { left: [], right: ['mrt-row-actions'] },
        },
        renderTopToolbarCustomActions: () => (
            <div className="text-xl font-semibold">Products List</div>
        ),
    });
    return (
        <>
            <MaterialReactTable table={table} />
            <Drawer
                anchor="right"
                open={openDrawer}
                onClose={toggleDrawer(false)}
            >
                <div className="min-w-[500px] p-2 font-med">
                    <div className="text-2xl text-black font-medium p-4 flex items-center gap-2">
                        <svg fill="#4580ff" width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14H5v-2h6v2zm8-4H5v-2h14v2zm0-4H5V7h14v2z"></path></g></svg>
                        Detail Information
                    </div>
                    <div className="px-4 py-2">
                        <div className="flex justify-between py-2 border-b border-slate-200 px-2">
                            <div className="text-black font-medium">OSC Part Number</div>
                            <div>{clickedProduct.osc_product_id}</div>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-200 px-2">
                            <div className="text-black font-medium">Part Type</div>
                            <div>{clickedProduct.part_type}</div>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-200 px-2">
                            <div className="text-black font-medium">UOM(Duration)</div>
                            <div>{clickedProduct.duration}</div>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-200 px-2">
                            <div className="text-black font-medium">Product Description</div>
                            <div>{clickedProduct.product_description}</div>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-200 px-2">
                            <div className="text-black font-medium">Vendor part Number</div>
                            <div>{clickedProduct.vendor_part_number}</div>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-200 px-2">
                            <div className="text-black font-medium">License Source</div>
                            <div>{clickedProduct.license_source_set}</div>
                        </div>
                        <div className="flex justify-between py-2 px-2">
                            <div className="text-black font-medium">Active</div>
                            <div>{clickedProduct.active}</div>
                        </div>
                    </div>

                    <div className="px-4 mt-6">
                        <div className="flex justify-between py-2 border-b border-slate-200 px-2">
                            <div className="text-black font-medium">Product Attribute1</div>
                            <div>{clickedProduct.attribute1}</div>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-200 px-2">
                            <div className="text-black font-medium">Product Attribute2</div>
                            <div>{clickedProduct.attribute2}</div>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-200 px-2">
                            <div className="text-black font-medium">Product Attribute3</div>
                            <div>{clickedProduct.attribute3}</div>
                        </div>
                        <div className="flex justify-between py-2 border-b border-slate-200 px-2">
                            <div className="text-black font-medium">Product Attribute4</div>
                            <div>{clickedProduct.attribute4}</div>
                        </div>
                        <div className="flex justify-between py-2 px-2">
                            <div className="text-black font-medium">Product Attribute5</div>
                            <div>{clickedProduct.attribute5}</div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default ProductTable;
