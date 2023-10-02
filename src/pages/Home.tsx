import "./home.css"
export const Home= () => {

    data= window.localStorage.myCat
    
    if (data) {return (

    
	<section class="home-wrapper">
        <article>
            <img href={data.img}/>
            <h3>{data.name}</h3>
            <p>random phrase</p>
        </article>
        <article>
            <button>Feed</button>
            <button>Pet</button>
            <button>Sleep</button>
        </article>
    </section>
        )} else {
            return(
                <a href="/adoption"> Adopt a cat! </a>
            )
        }}
