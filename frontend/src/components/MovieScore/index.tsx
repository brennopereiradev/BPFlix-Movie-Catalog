import MovieStars from "../MovieStars";
import "./styles.css";

type Props = {
    score : number;
    count: number;
}

function MovieScore({score, count} : Props) {

    return (
        <div className="bpflix-score-container">
            <p className="bpflix-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score} />
            <p className="bpflix-score-count">{count} avaliações</p>
        </div>
    );
}
export default MovieScore