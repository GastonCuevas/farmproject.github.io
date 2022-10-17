import React from 'react'
import clsx from 'clsx'
import {
  PhoneAndroid as PhoneAndroidIcon,
  LocationOn as LocationOnIcon,
  Schedule as ScheduleIcon
} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { ROUTES } from '~/views/routes'
import { useStyles } from './Footer.style'
import { Typography } from '@material-ui/core'

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
            <Typography className={classes.link}>
              <ScheduleIcon />
              &nbsp; Horario de atención: 09:00 A 18:00
            </Typography>
          </li>
        </ul>
        <ul className={classes.footerBlock}>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.google.com/maps/place/Gordaliza+1698,+San+Salvador+de+Jujuy,+Jujuy/@-24.1927538,-65.3145103,17z/data=!3m1!4b1!4m5!3m4!1s0x941b0f385365cd3b:0x59b404e7d8511a3c!8m2!3d-24.1927587!4d-65.3123216'
              className={classes.link}>
              <LocationOnIcon />
              &nbsp; Gordaliza 1698 S.S.Jujuy
            </a>
          </li>
        </ul>
        <ul className={classes.footerBlock}>
          <li>
            <a
              className={classes.link}
              href='https://wa.me/+5493884373832/?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20productos%20por%20favor.'
              target='_blank'
              rel='noopener noreferrer'>
              <PhoneAndroidIcon />
              &nbsp; +54-9-388-4373832
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
