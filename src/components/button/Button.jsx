import styles from './button.module.css';

export const Button = () => {
  return (
    <div data-tooltip="Size: 20Mb" className={styles.button}>
        <div className={styles.buttonWrapper}>
        <div className={styles.text}>Download</div>
            <span className={styles.icon}>
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" height="2em" width="2em" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none"></path></svg>
            </span>
        </div>
    </div>
  )
}
