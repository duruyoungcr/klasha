

const AsideLink = ({ title, icon, selected }) => {
    return (
        <div className={`section__link group cursor-pointer mb-2 transition-all duration-500 ease-in-out hover:bg-gray ${selected && 'bg-white'}`}>
            <a href={`#${title}`} className='no-underline flex items-center py-4 p-10'>
                <img src={`./assets/img/icons/${icon}.svg`} alt='icon' className='section__link__icon mr-3 transition-all duration-500 ease-in-out group-hover:animate-bounce' />
                <p className='section__link__title text-sm font-semibold text-gray-dark group-hover:text-green-dark  transition-all duration-500 ease-in-out'>
                    {title}
                </p>
            </a>
        </div>
    )
}

export default AsideLink;
