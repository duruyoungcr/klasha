const Overview = () => {
    return (
        <section className='overview flex flex-col sm:items-center mb-10 sm:flex-row '>
            <div className='overview__current border border-gray-light px-5 py-6'>
                <div className='overview__top flex items-center justify-between'>
                    <h6 className='overview__heading text-green-light text-sm'>Total account balance</h6>
                    <select name="currency" id="currency" className='text-sm bg-gray rounded'>
                        <option value="usd">USD</option>
                        <option value="kes">KES</option>
                        <option value="ngn">NGN</option>
                        <option value="ghc">GHC</option>
                    </select>
                </div>
                <hr className="border-gray-light divider" />
                <div className="overview__figures">
                    <h2 className="overview__amount text-2xl font-bold">$5,332.18</h2>
                    <p className="overview__rate text-gray-dark">1 USD = 381.97 NGN</p>
                </div>
            </div>
            <div className='overview__hold w-80 h-44 sm:rounded-lg bg-gray border border-gray-light px-5 py-6 '>
                <div className='overview__top'>
                    <h6 className='overview__heading text-sm'>Funds on hold</h6>
                </div>
                <hr className="border-gray-light my-5" />
                <div className='pt-4'>
                    <h2 className="overview__amount text-2xl font-bold">$5,332.18</h2>
                </div>
            </div>
        </section>
    )
}

export default Overview
