interface CustomizedInputProps {
    label: string,
    [key: string]: any;
}


const CustomizedInput = ({ label, ...props }: CustomizedInputProps) => {

    return (
        <div className="">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
                {label}
            </label>
            <div className="relative">
                <input
                    {...props}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
            </div>
        </div>
    );
}

export default CustomizedInput;