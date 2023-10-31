import { useEffect, useState } from 'react'
import bg from './assets/images/bg-header-desktop.svg'
import smolbg from './assets/images/bg-header-mobile.svg'
import Job from './components/Job'

import Photosnap from './assets/images/photosnap.svg'
import manage from './assets/images/manage.svg'
import account from './assets/images/account.svg'
import myHome from './assets/images/myhome.svg'
import loop from './assets/images/loop-studios.svg'
import faceit from './assets/images/faceit.svg'
import shortly from './assets/images/shortly.svg'
import insure from './assets/images/insure.svg'
import eyecam from './assets/images/eyecam-co.svg'
import air from './assets/images/the-air-filter-company.svg'

const App = () => {

  const [isSmolScreen, setIsSmolScreen] = useState<null | boolean>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmolScreen(window.innerWidth <=640);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className='bg-[#D1E9FF] h-full w-full pb-4'>
      <div 
        className="header--section w-full h-32 bg-no-repeat bg-center bg-cover" 
        style={{backgroundImage: `url(${isSmolScreen ? smolbg : bg})`, backgroundColor: 'hsl(180, 8%, 52%)'}}
      />

      <div className='job--container max-w-[1400px] mt-16 mx-auto'>
        <Job logo={Photosnap} title='Senior Frontend Developer' subtitle='Photosnap' time='1d' contract='Full Time' location='USA only' />
        <Job logo={manage} title='Fullstack Developer' subtitle='Manage' time='1d' contract='Part Time' location='Remote' />
        <Job logo={account} title='Junior Frontend Developer' subtitle='Account' time='2d' contract='Part Time' location='USA only' />
        <Job logo={myHome} title='Junior Frontend Developer' subtitle='MyHome' time='5d' contract='Contract' location='USA only' />
        <Job logo={loop} title='Software Engineer' subtitle='Loop Studios' time='1w' contract='Full Time' location='Worldwide' />
        <Job logo={faceit} title='Junior Backend Developoer' subtitle='FaceIt' time='2w' contract='Full Time' location='UK only' />
        <Job logo={shortly} title='Junior Developer' subtitle='Shortly' time='2w' contract='Full Time' location='Worldwide' />
        <Job logo={insure} title='Junior Frontend Developer' subtitle='Insure' time='2w' contract='Full Time' location='USA only' />
        <Job logo={eyecam} title='Full Stack Engineer' subtitle='Eyecam Co.' time='3w' contract='Full Time' location='Worldwide' />
        <Job logo={air} title='Front-end Dev' subtitle='The Air Filter Company' time='1mo' contract='Part Time' location='Worldwide' />

      </div>
    </div>
  )
}

export default App