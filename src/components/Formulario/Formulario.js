import useForm from "../../hooks/useForm";
import useGetLetra from "../../hooks/useGetLetra";
import Card from "../Card/Card";

const Formulario = () => {
	const [values, handleChange, resetValues] = useForm({
		cancion: "",
		artista: "",
	});
	const { artista, cancion } = values;
	
	const [, getLetra] = useGetLetra(artista, cancion);


	const handleSubmit = (e) => {
		e.preventDefault();
		getLetra()
		resetValues();
	};
	
	return (
		<Card title="Buscador de letras">
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-12">
						<div className="mb-3">
							<label htmlFor="inputCantante" className="form-label">
								Nombre del cantante
							</label>
							<div className="input-group">
								<span className="input-group-text">
									<i className="fa-solid fa-user"></i>
								</span>
								<input
									type="text"
									className="form-control"
									id="inputCantante"
									placeholder="Ingrese el nombre del cantante"
									name="artista"
									value={artista}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="mb-3">
							<label htmlFor="inputCancion" className="form-label">
								Nombre de la cancion
							</label>
							<div className="input-group">
								<span className="input-group-text">
									<i className="fa-solid fa-music"></i>
								</span>
								<input
									type="text"
									className="form-control"
									id="inputCancion"
									placeholder="Ingrese el nombre de la cancion"
									name="cancion"
									value={cancion}
									onInput={handleChange}
								/>
							</div>
						</div>
						<button type="submit" className="btn btn-primary">
							<i className="fa-solid fa-magnifying-glass"></i> Buscar
						</button>
					</div>
				</div>
			</form>
		</Card>
	);
};

export default Formulario;
