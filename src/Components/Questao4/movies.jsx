function Movies(props){
    return(
        <div className="movie">
            <h2>Filme: {props.movie}</h2>
            <img src={props.card} alt="Filme"/>
            <h3>Gênero:</h3>
            <p>{props.genre}</p>
            <h3>Descrição:</h3>
            <p>{props.description}</p>
            <button>Ver mais</button>
        </div>
    );
}

export default Movies;