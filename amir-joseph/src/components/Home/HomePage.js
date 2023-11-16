// import React from 'react'
// import '../../App.css'
// import CTA from './CTA'
// import ME from '../assets/Images/about-pic.PNG'
// import HeaderSocials from './HomePageSocials'

// const Header = () => {
//     return (
//         <header>
//             <div className='container header_container justify-center'>
//                 <h5 className='text-center pl-0'>
//                     Hello I'm
//                 </h5>
//                 <h1 className='text-center pl-0'>
//                     Amir Mohamed
//                 </h1>
//                 <h5 className='text-light text-center pl-0'>
//                     Fullstack Developer
//                 </h5>

//                 <CTA />

//             <HeaderSocials />

//                 <div className='me'>
//                     <img src={ME} alt='me'/>
//                 </div>

//             </div>
//         </header>
//     )
// }

// export default Header

import React from 'react'
import '../../App.css'
import CTA from './CTA'
import ME from '../assets/Images/about-pic.PNG'
import HeaderSocials from './HomePageSocials'

const Header = () => {
    return (
     
            <div className='container header_container justify-around mb-5 pb-5'>
                <div className='mt-5 justify-center'>
                <h5 className='pl-0 text-center'>
                    Hello I'm
                </h5>
                <h1 className='pl-0 text-center'>
                    Amir Mohamed
                </h1>
                <h5 className='pl-0 text-light text-center'>
                    Fullstack Developer
                </h5>

                <CTA />
</div>
<div className='about__container p-5 mb-5'>
            <HeaderSocials />

                <div className='me'>
                    <img src={ME} alt='me'/>
                </div>
</div>
            </div>
  
    )
}

export default Header