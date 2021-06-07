import AsideLink from './AsideLink'

const Aside = ({ toggle, handleToggle }) => {
    return (
        <aside
            className={`aside min-h-screen py-10 bg-white-dark relative transition-all duration-700 ease-in-out ${!toggle && 'hidden md:hidden'} ${toggle && 'absolute top-0 left-0'}  lg:block z-10`}
        >
            <div className='ml-10 mb-14'>
                <img src='./assets/img/klasha_logo.png' alt='klasha_logo' />
            </div>
            <div className='section mb-4'>
                <h6 className='section__heading font-semibold text-sm ml-10 mb-3'>Main pages</h6>
                <AsideLink title={'Dashboard'} icon={'icon'} selected={true} />
                <AsideLink title={'Balances'} icon={'Wallet'} />
                <AsideLink title={'Customers'} icon={'users'} />
                <AsideLink title={'Analytics'} icon={'Activity'} />
            </div>
            <div className='section'>
                <h6 className='section__heading font-semibold text-sm ml-10 mb-3'>General</h6>
                <AsideLink title={'Settings'} icon={'Filter'} />
                <AsideLink title={'Team'} icon={'Star'} />
                <AsideLink title={'Contact'} icon={'Call'} />
                <AsideLink title={'Logout'} icon={'Logout'} />
            </div>
            <button
                className={`close font-bold flex justify-center items-center absolute transition-all duration-500 ease-in-out top-2 right-4 text-red w-10 h-10 lg:hidden rounded-full hover:bg-red-light hover:text-white`}
                onClick={handleToggle}
            >
                X
            </button>
        </aside>
    )
}

export default Aside;
