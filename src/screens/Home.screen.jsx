import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import RepeatIcon from '@material-ui/icons/Repeat'

import { language } from '../languages'

import Header from '../components/layout/Header.layout'
import Text from '../components/typography/Text.component'
import PrimaryCard from '../components/cards/PrimaryCard.component'
import PrimaryButton from '../components/buttons/PrimaryButton.component'
import userBikes from '../assets/images/user-bikes.png'
import background from '../assets/images/background.png'

const useStyles = makeStyles(theme => ({
  description: {
    padding: '100px 150px',
    backgroundColor: theme.palette.purple.darkness,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: 70,
    alignItems: 'center'
  },
  image: {
    width: '90%',
    display: 'flex',
    justifySelf: 'flex-end'
  },
  repeat: {
    backgroundColor: theme.palette.purple.darkness,
    padding: 50,
    textAlign: 'center',
    '& svg': {
      fontSize: '5rem',
      marginTop: 20,
      marginBottom: 10
    }
  },
  background: {
    width: '100%',
    opacity: '0.2'
  },
  anyDoubts: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    '& button': {
      marginTop: 20
    }
  }
}))

const Home = () => {
  const classes = useStyles()
  const { labels, buttons } = language

  return (
    <>
      <Header />
      <section className={classes.description}>
        <img src={userBikes} alt="user-bikes" className={classes.image} />
        <Text variant="h2">{labels.description}</Text>
      </section>
      <section className={classes.map}>
        <Text variant="h2">MAP HERE</Text>
      </section>
      <section className={classes.repeat}>
        <Text variant="h4">{labels.findYourBike}</Text>
        <RepeatIcon fontSize="large" color="primary" />
        <Text variant="h4">{labels.repeat}</Text>
      </section>
      <section className={classes.contactUs}>
        <PrimaryCard>
          <img src={background} alt="user-bikes" className={classes.background} />
          <div className={classes.anyDoubts}>
            <Text variant="h2">{labels.anyDoubts}</Text>
            <PrimaryButton
              size="large"
              text={buttons.contactUs}
              onClick={() => alert('contact us')}
            />
          </div>
        </PrimaryCard>
      </section>
    </>
  )
}

export default Home
