import React from "react";
import Heading from "../atoms/Heading";
import KeyMetrics from "./KeyMetrics";
import UserChart from "./UserChart";
import RevenueChart from "./RevenueChart";
import SongsChart from "./SongsChart";
import { keyMetrics, revenueSources, topSongs, userGrowth } from "../data/data";

const Analytics = () => {
  return (
    <>
      <Heading value="Key Metrics" />
      <KeyMetrics metrics={keyMetrics} />
      <Heading value="Yearly User Growth" />
      <UserChart data={userGrowth} />
      <Heading value="Annual Revenue" />
      <RevenueChart data={revenueSources} />
      <Heading value="Top 5 Songs" />
      <SongsChart data={topSongs} />
    </>
  );
};

export default Analytics;
