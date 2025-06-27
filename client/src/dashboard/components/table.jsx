import React from "react";
import { Table } from "antd";

// rowSelection config must receive selectedRowKeys & selectedRows
const getRowSelection = (onSelectionChange) => ({
    onChange: (selectedRowKeys, selectedRows) => {
        console.log("selectedRowKeys:", selectedRowKeys);
        console.log("selectedRows:", selectedRows);
        if (onSelectionChange) {
            onSelectionChange(selectedRowKeys, selectedRows);
        }
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === "Disabled User",
        name: record.name,
    }),
});

const DataTable = ({
    columns,
    data,
    size = "",
    pagination = true,
    onSelectionChange,
}) => {
    return (
        <Table
            pagination={pagination}
            size={size}
            rowSelection={getRowSelection(onSelectionChange)}
            columns={columns}
            dataSource={data.map((item, index) => ({
                key: item.customerId || index, // Ensure every row has a unique key
                ...item,
            }))}
            scroll={{ x: "max-content" }}
        />
    );
};

export default DataTable;
