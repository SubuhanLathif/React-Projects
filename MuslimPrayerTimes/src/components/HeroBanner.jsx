export const HeroBanner = ({getUserLocation}) => {
  return (
    <section className='px-lg-5 px-md-4 px-3 pb-lg-5 pb-md-4 pb-3 pt-3 hero-banner'>
        <div className="container rounded-5 p-0">
         <div className="h-100 d-flex align-items-center p-lg-5 p-4">
            <div className="left col-lg-6 z-1">
            <span className='small-heading rounded-pill px-3 py-1 bg-white'>Delay Everything But Salah ?</span>
            <h1 className='my-4 fw-bold'>Indeed, I am Allah . There is no deity except Me,</h1>
            <p className='my-4'>so worship Me and establish prayer for My remembrance. Surah Ta-Ha - 20:14</p>
            <button className='btn btn-sm px-4 py-2 rounded-pill' onClick={getUserLocation}>Get Prayer Time</button>
            </div>
         </div>
        </div>
    </section>
  )
}
