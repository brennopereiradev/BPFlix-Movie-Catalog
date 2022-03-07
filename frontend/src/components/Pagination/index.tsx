import { ReactComponent as Arrow} from 'assets/img/arrow.svg';
import "./styles.css";

function Pagination(){
    return(
<div className="bpflix-pagination-container">
    <div className="bpflix-pagination-box">
        <button className="bpflix-pagination-button" disabled={true} >
            <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="bpflix-pagination-button" disabled={false} >
            <Arrow className="bpflix-flip-horizontal" />
        </button>
    </div>
</div>
    );
}

export default Pagination;