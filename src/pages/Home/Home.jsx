import bgImg from '../../assets/img/bg-desktop.svg'
import bannerImg from '../../assets/img/illustration-mockups.svg'
import logo from '../../assets/img/logo.svg'

const  Home = () => {
    return (
        <>
            <header>
                <figure>
                    <img src={logo} alt="Huddle logo" />
                </figure>
            </header>
            <main>
                <figure>
                    <img src={bannerImg} alt="Illustration of mockup screens" />
                </figure>
                <section>
                    <h1>Build The Community Your Fans Will Love</h1>
                    <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                    <button>Register</button>
                </section>
                <section>
                    <a href="#"><i className="ri-facebook-fill"></i></a>
                    <a href="#"><i className="ri-twitter-fill"></i></a>
                    <a href="#"><i className="ri-instagram-line"></i></a>
                </section>
            </main>
        </>
    )
}

export { Home } 