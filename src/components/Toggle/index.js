const Toggle = ({ handleToggle, toggle }) => {
    return (
        <button
            className={`toggle uppercase bg-green text-white text-xs p-2 top-1 rounded absolute left-1/2 lg:hidden ${toggle && 'hidden'}`}
            onClick={handleToggle}
            aria-label='toggle'
        >
            menu
        </button>
    )
}

export default Toggle
