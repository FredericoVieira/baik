import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import RepeatIcon from '@material-ui/icons/Repeat'

import useGlobal from '../store'
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
    opacity: '0.2',
    maxHeight: 400,
    objectFit: 'cover'
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
  const [globalState, globalActions] = useGlobal()
  const { getNetworks } = globalActions
  const { networks } = globalState.bikes

  const [networksState, setNetworksState] = useState([])

  useEffect(() => {
    if (networks.length === 0) {
      getNetworks()
    } else setNetworksState(networks)
  }, [networks])

  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })

  return (
    <>
      <Header onClick={executeScroll} />
      <section className={classes.description}>
        <img src={userBikes} alt="user-bikes" className={classes.image} />
        <Text variant="h2">{labels.description}</Text>
      </section>
      <section ref={myRef} className={classes.map}>
        <Text variant="h2">MAP HERE</Text>
        <Text variant="h2">{networksState[0]?.id}</Text>
      </section>
      <section className={classes.repeat}>
        <Text variant="h4">{labels.findYourBike}</Text>
        <RepeatIcon fontSize="large" color="primary" />
        <Text variant="h4">{labels.repeat}</Text>
      </section>
      <section className={classes.contactUs}>
        <PrimaryCard>
          <img src={background} alt="background" className={classes.background} />
          <div className={classes.anyDoubts}>
            <Text variant="h3">{labels.anyDoubts}</Text>
            <PrimaryButton
              size="large"
              text={buttons.contactUs}
              // eslint-disable-next-line no-return-assign
              onClick={() => (window.location.href = 'mailto:baik@support.com')}
            />
          </div>
        </PrimaryCard>
      </section>
    </>
  )
}

export default Home
