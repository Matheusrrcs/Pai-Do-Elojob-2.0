import Funcionamento from "../componentes/Funcionamento";
import Inicio from "../componentes/Inicio";
import Contratar from "../componentes/Contratar";
import Cards from "../componentes/Cards";
import Divider from "../componentes/Divider";
import BackgroundVideo from "../componentes/Background";

export const Begin = () => {
    return (
        <div className='bg_main'>
            <BackgroundVideo />
            <Inicio />
            <Divider />
            <Contratar />
            <Cards />
            <Funcionamento/>
 
        </div>
    )
}
