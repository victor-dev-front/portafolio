import { Button } from '../button/Button';
import styles from './header.module.css';
import img from '../../assets/dev.gif';

export const Header = () => {
  return (
    <header className={styles.header}>
       <div className="container">
          <img className={styles.header__img} src={img} alt="gif header" />
          <p>Hola, soy Victor Garcia</p>
          <div className={styles.header__title}>
            <h1 className={styles.title}>Desarrollador Front-End.<span>&#160;</span></h1>
          </div>
          <Button/>
       </div>
    </header>
  )
}
