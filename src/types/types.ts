export type Product = {
    attribute1?: string,
    attribute2?: string,
    attribute3?: string,
    attribute4?: string,
    attribute5?: string,
    created_by?: number,
    creation_date?: string,
    duration?: string,
    enabled_flag?: boolean,
    eval_set_name?: string,
    last_update_date?: string,
    last_updated_by?: number,
    license_source_set?: string,
    new_set_name?: string,
    organization_code?: string,
    osc_product_id: number,
    product_description?: string,
    product_id?: number,
    product_name?: string,
    renewal_set_name?: string,
    source_name?: string,
    vendor_name?: string,
    vendor_part_number?: string,


    part_type?: string,
    email_template_source?: string,
    active?: string
};

export type Asset = {
    asset_id: number
    organization?: string,
    asset_number?: string,
    product_part_number?: string,
    asset_type?: string,
    vendor_name?: string,
    vender_part?: string,
};

export type SeatStatus = {
    seat_id?: number
    vendor_part_number?: number,
    osc_start_date?: string,
    osc_end_date?: string,
    osc_license_status?: string,
    lic_start_date?: string,
    lic_end_date?: string,
    license_status?: string,
    status_update_date?: string,
};

export type AssetTransaction = {
    txn_number?: string
    txn_date?: string,
    vendor_part?: string,
    osc_part_number?: string,
    seat_count?: number,
    start_date?: string,
    end_date?: string,
};

export type Transaction = {
    id: number;
    organization?: string;
    txn_number?: number;
    txn_date?: string;
    txn_source?: string;
    txn_type?: string;
    txn_action?: string;
    src_ref_number?: number;
    src_ref_date?: string;
    src_ref_id?: string;
    txn_status?: string;
    notification_date?: string;
    error_message?: string;
};
