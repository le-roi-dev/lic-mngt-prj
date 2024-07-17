import React from "react";
import Link from "next/link";
import TransactionTable from "@/components/Transaction/Transactions/TransactionTable";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CustomizedInput from "@/components/CustomizedElement/CustomizedInput";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "License Management System",
    description: "This is License Management System",
};

const Page = () => {
    return (
        <DefaultLayout>
            <div className="text-3xl text-black font-medium flex items-center mb-6">
                <Link href={'/transaction/transactions'} className="inline-block mx-2 p-2 rounded-xl border duration-500 border-transparent hover:border-black">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z" fill="#0F0F0F"></path> </g></svg>
                </Link>
                Edit Transaction
            </div>
            <div className="bg-white py-8 px-12 rounded-xl">
                <div className=" grid grid-cols-2 gap-6">
                    <CustomizedInput
                        value="PAI"
                        label="Organization"
                        type="text"
                        placeholder="Enter your organization"
                    />
                    <CustomizedInput
                        label="Transaction Number"
                        value="42560"
                        type="text"
                        placeholder="Enter your Transaction Number"
                    />
                    <CustomizedInput
                        value="4-Feb-24"
                        label="Transaction Date"
                        type="text"
                        placeholder="Enter your Transaction Date"
                    />
                    <CustomizedInput
                        value="LOV1"
                        label="Transaction Source"
                        type="text"
                        placeholder="Enter your Transaction Source"
                    />
                    <CustomizedInput
                        value="LOV2"
                        label="Transaction Type"
                        type="text"
                        placeholder="Enter your Transaction Type"
                    />
                    <CustomizedInput
                        value="LO2"
                        label="Transaction Action"
                        type="text"
                        placeholder="Enter your Transaction Action"
                    />
                    <CustomizedInput
                        value="1"
                        label="Source Ref Number"
                        type="text"
                        placeholder="Enter your Source Ref Number"
                    />
                    <CustomizedInput
                        value="4-Feb-24"
                        label="Source Ref Date"
                        type="text"
                        placeholder="Enter your Source Ref Date"
                    />
                    <CustomizedInput
                        value="51234"
                        label="Source Ref ID"
                        type="text"
                        placeholder="Enter your Source Ref ID"
                    />
                    <CustomizedInput
                        label="Transaction Status"
                        type="text"
                        placeholder="Enter your Transaction Status"
                    />
                    <CustomizedInput
                        label="Notification Date"
                        type="text"
                        placeholder="Enter your Notification Date"
                    />
                    <CustomizedInput
                        label="Error Message"
                        type="text"
                        placeholder="Enter your Error Message"
                    />
                </div>
                <div className="flex justify-end mt-10 gap-4">
                    <Link href={'/transaction/transactions'} className="min-w-30 text-center py-2 bg-primary rounded-lg text-white">
                        Save
                    </Link>
                    <Link href={'/transaction/transactions'} className="min-w-30 text-center py-2 bg-gray rounded-lg text-black">
                        Cancel
                    </Link>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Page;

