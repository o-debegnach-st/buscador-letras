import axios from "axios";
import { useContext } from "react";
import { letraContext } from "../context/LetraContext";
import { StateContext } from "../context/StateContext";

const useGetLetra = (artista, cancion) => {
	const [letra, setLetra] = useContext(letraContext);
	const [isLoading, setIsLoading] = useContext(StateContext)

	const getLetra = () => {
		if (artista && cancion) {
			setLetra("");
			setIsLoading(true);
			axios
				.get(`https://api.lyrics.ovh/v1/${artista}/${cancion}`)
				.then((response) => {
					let letra = response.data.lyrics
					setLetra(letra)
					setIsLoading(false)
					console.log(isLoading)
				})
				.catch( error => {
					setLetra(error.response.data.error)
					setIsLoading(false)
					console.log(isLoading)
				});
		}
	}

	return [letra, getLetra];
};

export default useGetLetra;
