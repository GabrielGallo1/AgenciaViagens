import {Link} from 'react-router-dom'
import styles from './header.module.css'
import logo from '../imagens/imagem (7).jfif'
import lupa from '../imagens/lupa.png'

function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>

            <nav className={styles.nav_link}>
            <ul>
                <li>
                    <Link to='/' ><a>Home</a> </Link>
                </li>

                <li>
                   <Link to='/Escocia' ><a>Escócia</a> </Link> {/* to='/Escocia é como chamar o elemento */}
                </li>

                <li>
                    <Link to='/GrandCanyon' ><a>Grand Canyon</a> </Link>
                </li>

                <li>
                    <Link to='/Muralha_China' ><a>Muralhas da China</a> </Link>
                </li>

                <li>
                    <Link to='/Aruba' ><a>Aruba</a> </Link>
                </li>
                

            </ul>
            </nav>

            <div className={styles.search}>
                <input type="search"  placeholder='Busque por viagens'/>
               <img src={lupa} alt="" className={styles.lupa} />
            </div>
        </header>
    )
}

export default Header