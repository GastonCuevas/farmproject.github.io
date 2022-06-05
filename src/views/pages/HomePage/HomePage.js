import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Typography } from '@material-ui/core'
import logo from '~/assets/logo.png'
import view1 from '~/assets/view1.png'
import view2 from '~/assets/view2.png'
import view3 from '~/assets/view3.png'
import { NavBar, Footer } from '~/views/pages/shared'
import { useStyles } from './HomePage.style'
export const HomePage = () => {
  const classes = useStyles()
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
    {
      name: 'League of Legends',
      image: logo
    },
    { name: 'Leche', image: view1 },
    { name: 'Dulce de leche', image: view2 },
    { name: 'Leche condensada', image: view3 }
  ]
  return (
    <div className={classes.container}>
      <NavBar />
      <div className={classes.mainContainer}>
        <header>
          <div className={classes.previewImage}>
            <div className={classes.containerHeader}>
              <Typography className={classes.title} component='h5'>
                Shadow Gluttony
              </Typography>
              <Typography className={classes.subtitle}>Alguna frase llamativa</Typography>
            </div>
          </div>
        </header>
        <div className={classes.bodyContainer}>
          <Typography variant='h5' color='primary'>
            Productos
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
    </div>
  )
}
