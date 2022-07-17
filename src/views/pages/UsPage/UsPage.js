import { Typography } from '@material-ui/core'
import React from 'react'
import { NavBar, Footer, MainLayout } from '~/views/pages/shared'
import { useStyles } from './UsPage.style'
export const UsPage = () => {
  const classes = useStyles()
  return (
    <MainLayout>
      <NavBar />
      <main className={classes.mainContainer}>
        <section className={classes.container}>
          <div>
            {/* <div className={classes.logo}></div> */}
            <Typography variant='h2'>Our Path</Typography>
          </div>
          <aside className={classes.aside}>
            <div className={classes.card}>
              {/* <div className={`${classes.image} santiago`}></div> */}
              <div>
                <Typography variant='h4'>Beginnings</Typography>
                <Typography variant='h6'>
                  We started in 1925 when our family moved to the country, as soon as we arrived and
                  got a piece of land to cultivate, we did not hesitate to start harvesting
                  strawberries. After that, we add crops of corn and other vegetables.
                </Typography>
              </div>
            </div>
            <div className={classes.card}>
              {/* <div className={`${classes.image} luis`}></div> */}
              <div>
                <Typography variant='h4'>Present</Typography>
                <Typography variant='h6'>
                  We currently have more than 50 hectares of crops and we also raise some animals
                  such as cows, sheep and chickens that provide us with the raw material to make our
                  products.
                </Typography>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </MainLayout>
  )
}
