import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../utils/AdminAuth";
import Loader from "../../components/loader/Loader";


export default function Home() {

  const [userStat, setUserStat] = useState([]);
  const [loading, setLoading] = useState(false);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async() => {
      setLoading(true);
      try {
        const res = await userRequest.get('/user/stats');
        res.data.map((item) => 
          setUserStat((prev) => [
            ...prev,
            {name : MONTHS[item._id-1], "Active User": item.total}
          ])
      )
      } catch (error) {
        console.error(error)
      }finally {
        setLoading(false);
      }
    }
    getStats();
  }, [MONTHS])

  return (
    <div className="home">
    {loading && <Loader />}
      <FeaturedInfo />
      <Chart data={userStat} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
