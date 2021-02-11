import React, { useCallback, useState, useEffect } from 'react'
import styles from './Code.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

interface Props {
    noHeader?: boolean
}

const Code: React.FC<Props> = (props) => {
    const [theme, setTheme] = useState(faSun)

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
                    <FontAwesomeIcon
                        icon={theme}
                        className={styles.theme}
                        onClick={() =>
                            setTheme(theme === faSun ? faMoon : faSun)
                        }
                    />
                </header>
            )}
            <p>{props.children}</p>
        </code>
    )
}

export default Code
