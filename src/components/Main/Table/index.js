const { default: TableData } = require("./TableData")

const Table = () => {
    return (
        <section className="table w-max pr-4 sm:pr-0 sm:min-w-full  bg-white">
            <div className="table__top flex flex-col md:items-center justify-between mb-5 md:flex-row">
                <h6 className="table__title font-bold text-xl mb-4 md:mb-0">Payout table</h6>
                <div className="table__actions flex items-center">
                    <div className="input__group relative mr-3">
                        <input
                            type="text"
                            className="table__search text-xs border border-gray-dark rounded"
                            name="search"
                            id="search"
                            aria-label="Search"
                            placeholder='Search something...'
                        />
                        <img src="./assets/img/icons/Search.svg" alt="search__icon" className="search__icon absolute right-3 top-1/2" />
                    </div>
                    <div className="input__pickdate flex items-center border border-gray-dark rounded px-3 py-2 mr-8">
                        <p className="input__pickdate__date text-sm mr-3">March 2020</p>
                        <img src="./assets/img/icons/Calendar.svg" alt="calender_icon" />
                    </div>
                    <button className="w-24 rounded table__payout__btn bg-green text-sm font-bold text-white transition-all duration-500 ease-in-out hover:font-medium hover:bg-green-light">
                        Payout
                    </button>
                </div>
            </div>
            <div className="table__header font-bold bg-gray rounded px-6 py-4 flex items-start justify-between mb-5">
                <h6 className="table__heading">Payout ID</h6>
                <h6 className="table__heading justify-self-start">Source</h6>
                <h6 className="table__heading">Date</h6>
                <h6 className="table__heading">Amount</h6>
            </div>
            <TableData />
            <TableData />
            <TableData />
            <TableData />
            <button
                className="more text-green-light text-xl font-bold  min-w-full transition-all duration-500 ease-in-out rounded px-6 py-4 flex justify-center items-center border border-gray-dark hover:text-white hover:bg-green-light"
            >
                See more
            </button>
        </section>
    )
}

export default Table
