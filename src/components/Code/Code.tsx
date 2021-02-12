import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import styles from './Code.module.scss'

interface Props {
    noHeader?: boolean
}

const Code: React.FC<Props> = (props) => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {}, [theme])

    return (
        <code>
            {props.noHeader ? null : (
                <header>
                    <div className={styles['mac-buttons']}>
                        <button
                            title="do not click"
                            onClick={() => window.close()}
                        ></button>
                        <div></div>
                        <div></div>
                    </div>
                    {theme === 'light' ? (
                        <FaMoon
                            className={styles.theme}
                            onClick={() =>
                                setTheme(theme === 'light' ? 'dark' : 'light')
                            }
                        />
                    ) : (
                        <FaSun
                            className={styles.theme}
                            onClick={() =>
                                setTheme(theme === 'light' ? 'dark' : 'light')
                            }
                        />
                    )}
                </header>
            )}
            <p>{props.children}</p>
        </code>
    )
}

export default Code
