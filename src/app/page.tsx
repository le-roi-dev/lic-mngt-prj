// import Home from "@/components/Dashboard/Home";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HomePage from "@/components/Dashboard/HomePage";

export const metadata: Metadata = {
  title: "License Management System",
  description: "This is License Management System",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    </>
  );
}
