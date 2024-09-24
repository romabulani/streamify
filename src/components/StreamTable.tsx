import React from "react";
import { convertDateToLongFormat, formatCount } from "../utils/display";
import useStreamTable from "./hooks/useStreamTable";

export interface StreamData {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}

const StreamTable = ({ data }: { data: StreamData[] }) => {
  const { filterQuery, setFilterQuery, sortConfig, sortedData, sortData } =
    useStreamTable(data);

  return (
    <div>
      <div className="p-4 w-screen md:w-[700px]">
        <input
          type="text"
          placeholder="Filter by song or artist name..."
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          className="my-5 p-2 border border-slate-300 rounded-lg w-full"
        />
        <div className="w-screen md:w-[700px] overflow-x-auto">
          <table className="rounded-lg">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="p-2 border">Song Name</th>
                <th className="p-2 border">Artist</th>
                <th
                  onClick={() => sortData("dateStreamed")}
                  style={{ cursor: "pointer" }}
                  className="p-2 border"
                >
                  Date Streamed{" "}
                  {sortConfig?.key === "dateStreamed" &&
                    (sortConfig.direction === "asc" ? "↑" : "↓")}
                </th>
                <th
                  onClick={() => sortData("streamCount")}
                  style={{ cursor: "pointer" }}
                  className="p-2 border"
                >
                  Stream Count{" "}
                  {sortConfig?.key === "streamCount" &&
                    (sortConfig.direction === "asc" ? "↑" : "↓")}
                </th>
                <th className="p-2 border">User ID</th>
              </tr>
            </thead>
            <tbody>
              {sortedData?.map(
                (
                  { songName, artist, dateStreamed, streamCount, userId },
                  index
                ) => (
                  <tr
                    key={songName + dateStreamed}
                    className={`p-2 ${
                      index % 2 === 0 ? "bg-blue-50" : "bg-purple-50"
                    }`}
                  >
                    <td className="p-4 border border-gray-100">{songName}</td>
                    <td className="p-4 border border-gray-100">{artist}</td>
                    <td className="p-4 border border-gray-100">
                      {convertDateToLongFormat(dateStreamed)}
                    </td>
                    <td className="p-4 border border-gray-100">
                      {formatCount(streamCount)}
                    </td>
                    <td className="p-4 border border-gray-100">@{userId}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StreamTable;
