import React from "react";
import Link from "next/link";
import TransactionTable from "@/components/Transaction/Transactions/TransactionTable";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "License Management System",
    description: "This is License Management System",
};

const Page = () => {
    return (
        <DefaultLayout>
            <div className="flex flex-col gap-10">
                <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                    <div className="flex justify-between">
                        <div className="text-xl font-semibold text-black flex items-center">Transactions List</div>
                        <Link href={"/transaction/transactions/create"} className="bg-primary px-10 py-2 text-white rounded-lg my-2">Create</Link>
                    </div>
                    <div className="max-w-full overflow-x-auto">
                        <TransactionTable />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Page;

