import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Movie } from "types/movie";
import { BASE_URL } from "utils/requests";
import { validateEmail } from "utils/validate";

// get our fontawesome imports
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

type Props = {
    movieId: string;
}

function FormCard({ movieId }: Props) {


    const navigate = useNavigate();

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            });
    }, [movieId]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        if (!validateEmail(email)) {
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: movieId,
                score: score
            }
        }

        axios(config).then(response => {
            navigate("/");
        });
    }

    return (
        <div className="bpflix-form-container">
            <img className="bpflix-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="bpflix-form-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="bpflix-form" onSubmit={handleSubmit}>

                    <div className="input-group bpflix-form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text p-3" id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></span>
                        </div>
                        <input type="email" className="form-control" id="email" placeholder="Type Your Email" />
                    </div>
                    <div className="input-group bpflix-form-group">
                        <select className="form-control p-3" id="score">
                            <option>Select Your score review</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="bpflix-form-btn-container">
                        <button type="submit" className="bpflix-btn btn-primary btn-block p-2">Save</button>
                        <Link to="/">
                            <button className="bpflix-btn btn-danger p-2">Cancel</button>
                        </Link>
                    </div>
                </form >
            </div >
        </div >
    );
}

export default FormCard;