import styles from '../components/Layout.module.css'
function Layout(props) {
    return <>
      <main className={styles.container}>{props.children}</main>
    </>
  }
  
export default Layout