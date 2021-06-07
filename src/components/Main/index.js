import Header from "./Header"
import Overview from "./Overview"
import Table from "./Table"

const Main = () => {
    return (
        <main className='flex-grow max-w-full px-4 md:px-10 py-8 bg-white overflow-y-scroll scrollbar-hide'>
            <Header />
            <Overview />
            <Table className='scrollbar-hide' />
        </main>
    )
}

export default Main
