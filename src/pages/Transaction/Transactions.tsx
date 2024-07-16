import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import TransactionTable from "./TransactionTable";

const Transactions = () => {
    const navigate = useNavigate();
    const handleClickItem = (asset_id: number) => {
        navigate(`/transaction/transactions/${asset_id}`);
    }
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                    <div className="flex justify-between">
                        <div className="text-xl font-semibold text-black flex items-center">Transactions List</div>
                        <Link to={"/transaction/transactions/create"} className="bg-primary px-10 py-2 text-white rounded-lg my-2">Create</Link>
                    </div>
                    <div className="max-w-full overflow-x-auto">
                        <TransactionTable />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Transactions;

