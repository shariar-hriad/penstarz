import Section from '@/components/common/Section'

const WeOffer = () => {
    return (
        <Section id='weoffer' className='bg-gray-50'>
            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <div></div>
                    </div>
                    <div className='flex flex-col items-start gap-4 p-4'>
                        <h2 className='text-[36px] font-semibold leading-[46px] text-black-500'>
                            All you need we cover for you
                        </h2>
                        <p>
                            We take pride in offering a wide range of services, including VoIP interconnect, real-time
                            call reports, CDR export, smart call handling IVR, auto-generated invoices, conference
                            lines, and payout methods such as cryptocurrency, bank wire transfers, and local currency
                            deposits.
                        </p>
                        <button className='rounded border-0 bg-teal-500 py-2 px-8 text-lg text-white hover:bg-teal-600 focus:outline-none'>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default WeOffer
