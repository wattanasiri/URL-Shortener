import { useMemo } from 'react'
import { useTable,  useGlobalFilter, useSortBy, usePagination } from 'react-table'

import LoadingSpinner from "./Loading"
import { SearchBox } from "./SearchBox"
import { COLUMNS } from './Column'
import "./TableUrl.css";

import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'
import { MdOutlineMoodBad } from "react-icons/md"

export const TableUrl = ({data, isLoading, errorMessage}) => {

    const columns = useMemo(() => COLUMNS, [])

    const tableInstance = useTable({
        columns,
        data
    },
    useGlobalFilter, useSortBy, usePagination)

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        prepareRow,
        state,
        setGlobalFilter
    } = tableInstance

    const { globalFilter } = state;
    const { pageIndex } = state;

    return (
        <div className="table-container">
            <div className="header">
                <h3>Short URL History</h3>
                <SearchBox filter={globalFilter} setFilter={setGlobalFilter} />
            </div>
            <div className='table'>
                <table {...getTableProps}>
                    <thead>
                        {
                            headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())} id={column.render('id')}>
                                            {column.render('Header')}
                                            &nbsp;
                                            {column.isSorted ? (column.isSortedDesc ? <RiArrowUpSLine /> : <RiArrowDownSLine />) : <RiArrowDownSLine />}
                                        </th>
                                    ))}
                                </tr>
                            ))
                        }                   
                    </thead>
                    {isLoading ? <tbody className = "loading"><tr><td colSpan="3"><LoadingSpinner /></td></tr></tbody>
                    : <tbody {...getTableBodyProps}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    </tbody> 
                    }
                    {errorMessage && <div className="error"><span className="error-message">{errorMessage}&nbsp;<MdOutlineMoodBad size={24} /></span></div>}
                </table>
                <div className="footer">
                    Page &nbsp;
                    <strong>
                        {pageIndex + 1}&nbsp;&nbsp;of&nbsp;&nbsp;{pageOptions.length}
                    </strong>
                    &nbsp; | Go to page: &nbsp;
                    <input 
                    type="number" 
                    defaultValue={pageIndex + 1} 
                    min="1" 
                    step="1"
                    onChange={
                        e => {const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                    }} />
                    <div className="button">
                        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}><FaAngleDoubleLeft size={24} /></button>
                        <button onClick={() => previousPage()} disabled={!canPreviousPage}><FaAngleLeft size={24} /></button>
                        <button onClick={() => nextPage()} disabled={!canNextPage}><FaAngleRight size={24} /></button>
                        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}><FaAngleDoubleRight size={24} /></button>
                    </div>                   
                </div>
            </div>
        </div>
    )
}