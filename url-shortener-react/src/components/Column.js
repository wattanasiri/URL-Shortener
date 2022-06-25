function refreshPage(){
    window.location.reload();
} 

export const COLUMNS = [
    {
        Header: 'Full Url',
        accessor: 'full',
        id: 'full-url',
        Cell: (props) => {
            const { value, cell } = props;
            return (
                <div className="full-url" title={value}>
                    <a {...cell.getCellProps()} href={value} rel="noopener noreferrer" target="_blank">{value}</a>
                </div>
            )
        }
    },
    {
        Header: 'Short Url',
        accessor: 'short',
        id: 'short-url',
        Cell: (props) => {
            const { value, cell } = props;
            return (
                <div className="short-url" title={"http://localhost:5000/" + value}>
                    <a {...cell.getCellProps()} onClick={refreshPage} href={"http://localhost:5000/" + value} rel="noopener noreferrer" target="_blank">{"http://localhost:5000/" + value}</a>
                </div>
            )
        }
    },
    {
        Header: 'Clicks',
        accessor: 'clicks',
        id: 'clicks',
        Cell: (props) => {
            const { value, cell } = props;
            return <span {...cell.getCellProps()} className='clicks'>{value}</span>
        }
    }
]