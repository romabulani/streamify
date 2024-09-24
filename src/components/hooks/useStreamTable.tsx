import { useCallback, useEffect, useState } from "react";
import { StreamData } from "../StreamTable";

const useStreamTable = (data: StreamData[]) => {
  const [sortedData, setSortedData] = useState<StreamData[]>(data);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof StreamData;
    direction: "asc" | "desc";
  } | null>(null);
  const [filterQuery, setFilterQuery] = useState<string>("");

  const getSortedArray = useCallback(
    (key: keyof StreamData, dir: "asc" | "desc") => {
      const sortedArray = [...data].sort((a, b) => {
        if (key === "dateStreamed") {
          const dateA = new Date(a.dateStreamed).getTime();
          const dateB = new Date(b.dateStreamed).getTime();
          return dir === "asc" ? dateA - dateB : dateB - dateA;
        } else if (key === "streamCount") {
          return dir === "asc"
            ? a.streamCount - b.streamCount
            : b.streamCount - a.streamCount;
        }
        return 0;
      });
      return sortedArray;
    },
    [data]
  );

  const sortData = useCallback(
    (key?: keyof StreamData) => {
      key = key ?? "streamCount";
      let direction: "asc" | "desc" = "asc";
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === "asc"
      ) {
        direction = "desc";
      }

      const sortedArray = getSortedArray(key, direction);
      const filteredData = sortedArray?.filter(
        (stream) =>
          stream.songName.toLowerCase().includes(filterQuery.toLowerCase()) ||
          stream.artist.toLowerCase().includes(filterQuery.toLowerCase())
      );

      setSortedData(filteredData as StreamData[]);
      setSortedData(filteredData);
      setSortConfig({ key, direction });
    },
    [filterQuery, sortConfig, getSortedArray]
  );

  useEffect(() => {
    sortData();
    // eslint-disable-next-line
  }, [filterQuery]);

  return {
    filterQuery,
    setFilterQuery,
    sortedData,
    sortConfig,
    setSortConfig,
    sortData,
  };
};

export default useStreamTable;
