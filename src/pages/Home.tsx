import AssetsChart from "../components/Home/AssetsChart";
import CircleChart from "../components/Home/CircleChart";
import HomeTransaction from "../components/Home/HomeTransaction";
import ThisWeek from "../components/Home/ThisWeek";
import DefaultLayout from "../layout/DefaultLayout";

const Home = () => {
    return (
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <AssetsChart />
            <ThisWeek />
            <CircleChart />
            <HomeTransaction />
        </div>
    );
};

export default Home;
