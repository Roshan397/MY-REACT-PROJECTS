import React from 'react'
import Navbar from '../components/Navbar'
import "./pages.css"
import Homecontents from '../components/Homecontents'
import FloatingWindow from '../components/FloatingWindow'
export default function Home() {
  return (
    <div className='homepage'>
        <Navbar/>
        <Homecontents/>
        <div className='homecontent'>
          <br/>
          <br/>
          <br/>
          <br/>
        <FloatingWindow/>
          <br/>
          <br/>
          <br/>
        </div>
        <img src="" alt="" />
        <div className='regulartrack'>
          <div style={{display:"flex",justifyContent:"center",paddingRight:"50px"}}>
            <img src="https://blogimage.vantagefit.io/vfitimages/2023/07/VFit__FAQs-Related-To-Your-Sunday-Self-Care-Activities--1.png" alt="" />
            <p>Track the calories you burn during workouts to better understand your energy expenditure.
              Visualize your progress over time, encouraging motivation and offering insights into the effectiveness of different exercises.
              Tailor your calorie tracking to various activities, from high-intensity workouts to daily tasks, providing a comprehensive view of your efforts.
            </p>
          </div>
          <br/>
          <br/>
          <div style={{display:"flex",justifyContent:"center",paddingLeft:"50px"}}>
            <p>Log the number of steps you take each day to monitor your overall physical activity levels.
            Utilize real-time tracking features to stay aware of your progress throughout the day, motivating you to reach your step target.
            Set personalized step goals to challenge yourself and gradually increase your daily activity.
            </p>
            <img src="https://blogimage.vantagefit.io/vfitimages/2023/06/VFit__How-Many-Steps-to-Burn-500-Calories--.png" alt="" />
          </div>
          <br/>
          <br/>
          <div style={{display:"flex",justifyContent:"center",paddingRight:"50px"}}>
            <img src="https://blogimage.vantagefit.io/vfitimages/2023/06/VFit__Up-your-water-intake-.png" alt="" />
            <p>Set and track daily water intake goals personalized to your needs, promoting optimal hydration.
            Understand the numerous benefits of staying hydrated, from improved energy levels to enhanced cognitive function.
            Visualize your daily water intake with charts or graphics, making it easy to gauge your adherence to hydration goals.
            </p>
          </div>
        </div>
    </div>
  )
}
