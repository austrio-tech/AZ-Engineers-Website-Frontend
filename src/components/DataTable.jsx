import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { useTable } from "react-table";
import "./style/DataTable.css";

const DataTable = ({ filename }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filename) {
      fetch(filename)
        .then((response) => response.text())
        .then((csvText) => {
          Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
              setData(result.data);
            },
          });
        })
        .catch((error) => console.error("Error fetching the CSV file:", error));
    }
  }, [filename]);

  const columns = React.useMemo(
    () =>
      data.length > 0
        ? Object.keys(data[0]).map((key) => ({
            Header: key,
            accessor: key,
          }))
        : [],
    [data]
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="DataTableContainer">
      {data.length > 0 && (
        <table {...getTableProps()} className="tabb">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className="thh">
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, idx) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className= {`tdd ${idx%2 && 'tdgray'}`}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataTable;
