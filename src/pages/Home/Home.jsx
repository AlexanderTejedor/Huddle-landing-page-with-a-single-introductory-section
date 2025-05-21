import bannerImg from '../../assets/img/illustration-mockups.svg'
import logo from '../../assets/img/logo.svg'
import bgMov from '../../assets/img/bg-mobile.svg'
import bgDes from '../../assets/img/bg-desktop.svg'

const  Home = () => {
    const hiperValues = 'w-8 h-8 border-white border-1 rounded-full flex items-center justify-center hover:text-soft-magenta hover:border-soft-magenta';
    return (
        <main className=''>
            <img className='-z-1 absolute w-screen md:hidden' src={bgMov} alt="Mobile background illustration"/>
            <img className='hidden md:absolute md:w-screen md:h-screen md:object-cover md:block md:-z-1' src={bgDes} alt="" />
            <section className='px-8 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:px-15'>
                <img className='w-32 pt-8 pb-15 md:w-40 lg:w-50 lg:pt-15 lg:pb-0' src={logo} alt="Huddle logo" />
                <section className='lg:flex lg:items-center lg:justify-center lg:gap-8 lg:max-w-300 lg:self-center xl:max-w-400 xl:gap-15'>
                    <figure className='w-full flex justify-center items-center'>
                        <img className='w-100 xl:min-w-200' src={bannerImg} alt="Illustration of mockup screens" />
                    </figure>
                    <section className='mt-13 text-white text-center lg:text-left lg:200 xl:mr-20'>
                        <h1 className='text-2xl/9 font-semibold mb-5 font-title lg:text-4xl/12 lg:font-medium xl:text-5xl/16 xl:font-medium'>Build The Community Your Fans Will Love</h1>
                        <p className='font-display px-1 pb-6 md:px-25 lg:px-0 xl:text-2xl'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                        <button className='cursor-pointer text-xs bg-white text-violet px-19 py-3 rounded-full font-light shadow-[2px_8px_11px_0px_rgba(51,_65,_85,_0.12)] hover:bg-soft-magenta hover:text-white lg:px-13 lg:text-base'>Register</button>
                    </section>
                </section>
                <section className='mt-15 flex items-center justify-center gap-3 text-white lg:justify-end lg:mb-10'>
                    <a className={hiperValues} href="#"><i className="ri-facebook-fill"></i></a>
                    <a className={hiperValues} href="#"><i className="ri-twitter-fill"></i></a>
                    <a className={hiperValues} href="#"><i className="ri-instagram-line"></i></a>
                </section>
            </section>
        </main>
    )
}

export { Home } 