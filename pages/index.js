import Conteudo from '../components/content'
import Rodape from './Footer'
import Cabecalho from './Header'

export default function PaginaInicial(){
    return(
        <>
        <div className="bg-white dark:bg-slate-800 text-black dark:text-white">
        <Cabecalho/>
            <div className="bg-white dark:bg-slate-800">
              <Conteudo/>
            </div>
        <Rodape/>
        </div>
        </>
    )
}