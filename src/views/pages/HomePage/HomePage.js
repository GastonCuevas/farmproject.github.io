import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Typography } from '@material-ui/core'
import leche from '~/assets/leche.jpg'
import dulceLeche from '~/assets/dulceLeche.jpg'
import queso from '~/assets/queso.jpg'
import { NavBar, Footer, MainLayout } from '~/views/pages/shared'
import { useStyles } from './HomePage.style'

export const HomePage = () => {
  const classes = useStyles()
  const [scrollTop, setScrollTop] = useState(0)
  const NAVBAR_TRANSPARENT_SCROLL = 180
  const settings = {
    className: classes.slickSlider,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    lazyLoad: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  const array = [
    { name: 'Leche 1 litro', image: leche },
    { name: 'Dulce de leche 200 gramos', image: dulceLeche },
    { name: 'Queso 250 gramos', image: queso }
  ]

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop)
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  return (
    <MainLayout>
      <NavBar transparent={scrollTop < NAVBAR_TRANSPARENT_SCROLL} />
      <div className={classes.mainContainer}>
        <header>
          <div className={classes.previewImage}>
            <div className={classes.containerHeader}>
              <Typography className={classes.title} component='h5'>
                Herencia
              </Typography>
              <Typography className={classes.subtitle}>Productos regionales lácteos</Typography>
            </div>
          </div>
        </header>
        <div className={classes.bodyContainer}>
          <Typography variant='h5' color='primary'>
            Nuestros Productos
          </Typography>
          <Slider {...settings}>
            {array.map(({ image, name, price = 30 }, i) => (
              <div key={i} className={classes.card}>
                <div className={classes.titleContainer}>
                  <Typography variant='h5'>{name}</Typography>
                </div>
                <img src={image} alt='img' className={classes.image} />
                <div className={classes.titleContainer}>
                  <Typography variant='h6'>{`$${price}`}</Typography>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </MainLayout>
  )
}
