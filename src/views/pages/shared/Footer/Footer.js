import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { ROUTES } from '~/views/routes'
import { useStyles } from './Footer.style'

export const Footer = ({ altMode }) => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.container, altMode && classes.containerAlt)}>
      <div className={classes.innerContainer}>
        <Link to={ROUTES.ROOT}>
          <div className={classes.logo}></div>
        </Link>
        <ul className={classes.footerBlock}>
          <li>
            <Link to={ROUTES.US}>About Us</Link>
          </li>
          <li>
            <Link to='/2'>Gordaliza 1698 S.S.Jujuy</Link>
          </li>
          <li>
            <Link to='/3'>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
