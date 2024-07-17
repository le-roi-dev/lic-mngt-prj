import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import ProductTable from "@/components/MasterMngt/ProductTable";

export const metadata: Metadata = {
  title: "License Management System",
  description: "This is License Management System",
};

const Page = () => {

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <ProductTable />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Page;
