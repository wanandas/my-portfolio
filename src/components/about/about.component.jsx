import React from 'react'

import ProjectsSection from '../skills/skills.component'

import './about.styles.scss'

const Aboutsection =() => {
    return(
        <div className='about-container' name='aboutSection'>
            <h1>About me</h1>
            <div className='container-image-name'>
                <img className='my-pic' alt='myphoto' src="https://scontent.fbkk3-3.fna.fbcdn.net/v/t1.0-9/25289696_1658166990912014_7334617856560677345_n.jpg?_nc_cat=103&_nc_eui2=AeE4yU9NhANpTgYpFFymznginHiRITbbztzB_Olsvmnh8n7qb46q8fNkdgTvkhJ2aYFpSUKE5Ot2VETU1WVutxXyVGnibFYGUncn1tozGc-RLA&_nc_oc=AQnb3cBOwYSKO7DflkMYVPRG-MrS1NaBhFm06KPK-BcCKXP8gK3HB2M3oESe4jbyCGc&_nc_ht=scontent.fbkk3-3.fna&oh=b7de9164aa016469113ddeae022aacfd&oe=5EB05CD2" />
                <h2>Mr. wantanawat Jitprakop</h2>    
            </div>

            <div className='contain-p'>
                <h3>You're going to fall in love with nature</h3>
                <p>
                    สวัสดีครับ ผมชื่อ วัน กำลังสนใจใน Wep Application ต่าง และ Framework ต่างๆ โดยเฉพาะ React <br/>
                    และกำลังหางานด้าน front-end Developer มีข้อเสียในการเรียนรู้ช้า มองโลกในแง่ร้าย และ ไม่มั่นใจตนเอง
                    <br/>กำลังพัฒนาตนเองและปรับเปลี่ยนมุงมองให้เป็นคนมองโลกในแง่ดี และมีความเชื่อว่าทุกคนสามารถพัฒนาได้ 
                </p>
            </div>     
            <ProjectsSection />
        </div>
    )
}

export default Aboutsection