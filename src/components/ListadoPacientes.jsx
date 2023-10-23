import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente }) {

    return (
        <>
            <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

                {/* Retorna mensaje dependiendo de si hay pacientes o no */}
                {/* Verifica si el arreglo pacientes tiene items */}
                {pacientes && pacientes.length ?
                    // Si tiene items, retorna el listado
                    (
                        <>
                            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                            <p className="text-xl mt-5 mb-10 text-center">
                                Adminitra tus {''}
                                <span className="text-indigo-600 font-bold">
                                    Pacientes y Citas
                                </span>
                            </p>

                            {pacientes.map(paciente => {
                                return (
                                    <Paciente
                                        key={paciente.id}
                                        paciente={paciente}
                                        setPaciente={setPaciente}
                                    />
                                )
                            })}
                        </>
                    )
                    :
                    // Si no tiene items, retorna un mensaje
                    (
                        <>
                            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                            <p className="text-xl mt-5 mb-10 text-center">
                                Comienza agregando pacientes {''}
                                <span className="text-indigo-600 font-bold">
                                    y aparecerán en este lugar
                                </span>
                            </p>
                        </>
                    )}
            </div>
        </>
    );
}

export default ListadoPacientes;