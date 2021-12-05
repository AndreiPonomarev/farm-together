import styles from './layout.module.css'

export const siteTitle = 'Farm together'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  )
}
