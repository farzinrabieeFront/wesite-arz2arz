import React from "react";
import Styles from "./Table.module.scss";
import { Table } from "react-bootstrap";

const CustomizedTable = ({
  children,
  header: Header,
  totalRecords,
  pageLimit,
  onChangePage,
  miniTable,
  pageNeighbours = 2,
  className,
  marginPagesDisplayed,
  isPaiginate = false,
}) => {
  return (
    <div>
      <Table
        bordered
        size="sm"
        className={`${Styles.table} ${miniTable ? Styles.miniTable : null
          } ${className}`}
      >
        <thead className={Styles.thead}>
          <tr className="text-center grayBlue">{Header}</tr>
        </thead>
        <tbody className={`${Styles.tbody} text-black `}>{children}</tbody>
      </Table>

    </div>
  );
};

export default CustomizedTable;

