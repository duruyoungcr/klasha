const Header = () => {
    return (
        <header className="flex justify-between items-center mb-16">
            <div className="balance font-bold text-xl">
                <h6 className="balance__heading ">Balances</h6>
                <p className="balance__date text-xs text-gray-dark">Today, 19th October 2020</p>
            </div>
            <div className="user__details flex items-center">
                <div className="user__notification relative cursor-pointer mr-4 w-12 h-12 flex justify-center items-center rounded-full bg-gray">
                    <img alt="notification_icon" src='./assets/img/icons/Notification.svg' />
                    <div className="user__notification__indicator w-3 h-3 rounded-full absolute top-0 right-0 bg-red"></div>
                </div>
                <div className="user__avatar flex justify-center items-center rounded-full border border-red-light bg-red-lightest">
                    <img alt="user_avatar" src='./assets/img/avatar.png' className='ml-1' />
                </div>
            </div>
        </header>
    )
}

export default Header
