import React, { useMemo } from "react";
import { Table } from "antd";

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
    searchValue = "",
    searchableColumns = [],
}) => {
    const filteredData = useMemo(() => {
        if (!searchValue || !searchValue.trim()) {
            return data;
        }

        const searchTerm = searchValue.toLowerCase().trim();

        return data.filter((item) => {
            if (searchableColumns.length > 0) {
                return searchableColumns.some((columnKey) => {
                    const value = item[columnKey];
                    return (
                        value &&
                        value.toString().toLowerCase().includes(searchTerm)
                    );
                });
            }

            return Object.values(item).some((value) => {
                if (value == null) return false;
                return value.toString().toLowerCase().includes(searchTerm);
            });
        });
    }, [data, searchValue, searchableColumns]);

    return (
        <Table
            pagination={pagination}
            size={size}
            rowSelection={getRowSelection(onSelectionChange)}
            columns={columns}
            dataSource={filteredData.map((item, index) => ({
                key: item.customerId || item.orderId || index,
                ...item,
            }))}
            scroll={{ x: "max-content" }}
        />
    );
};

export default DataTable;
