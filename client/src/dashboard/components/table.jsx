import React from "react";
import { Divider, Radio, Table } from "antd";

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRows) => {
        console.log(
            `selectedRowKeys: ${selectedRows}`,
            "selectedRows: ",
            selectedRows
        );
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name,
    }),
};

const DataTable = ({ columns, data, size = "", pagination = true }) => {
    return (
        <Table
            pagination={pagination}
            size={size}
            rowSelection={{ ...rowSelection }}
            columns={columns}
            dataSource={data}
            scroll={{ x: "max-content" }}
        />
    );
};

export default DataTable;
