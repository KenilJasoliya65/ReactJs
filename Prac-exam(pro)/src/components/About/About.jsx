import React from 'react'
import CustomNavbar from '../Navbar/CustomNavbar';
import photo from "../Image/Aboutpageimg.jpg";
import './About.css';

function About() {
  return (
      <>
      <CustomNavbar />
      <div>
        <img src={photo} alt="" className="d-block w-100 h-100 about-img"/>
        <div className='bg-text'>
          <h2 className='bg-text1'>India's fastest growing corporate catering to a billion aspirations</h2>
        </div>


        {/* <div className='Aboutus-text'>
          <div className='container'>
              <h1 className="heading pl-4 mb-4">About Us</h1>
              <div className="dropdown d-inline-block marketcap-dropdown">
                  <p className="mb-3 pl-4 d-block">Adani Group is a diversified organisation in India comprising 10 publicly traded companies. It has created a world class transport and utility infrastructure portfolio that has a pan-India presence. Adani Group is headquartered in Ahmedabad, in the state of Gujarat, India. Over the years, Adani Group has positioned itself to be the market leader in its transport logistics and energy utility portfolio businesses focusing on large scale infrastructure development in India with O &amp; M practices benchmarked to global standards. With four IG rated businesses, it is the only Infrastructure Investment Grade issuer in India.</p>
              </div>
              <p className="mb-3 pl-4 d-none">Adani owes its success and leadership position to its core philosophy of ‘Nation Building’ driven by ‘Growth with Goodness’ - a guiding principle for sustainable growth. Adani is committed to increase its ESG footprint by realigning its businesses with emphasis on climate protection and increasing community outreach through its CSR programme based on the principles of sustainability, diversity and shared values.
              </p>
          </div>
        </div> */}
        <section className="py-5 about-apsez loadmore-content" id="sectionfirst">
            <div className="container">
              <h1 className="heading pl-4 mb-4">About Us</h1>
              <div className="dropdown d-inline-block marketcap-dropdown">
                <p className="mb-3 pl-4 d-block">Adani Group is a diversified organisation in India comprising 10 publicly traded companies. It has created a world class transport and utility infrastructure portfolio that has a pan-India presence. Adani Group is headquartered in Ahmedabad, in the state of Gujarat, India. Over the years, Adani Group has positioned itself to be the market leader in its transport logistics and energy utility portfolio businesses focusing on large scale infrastructure development in India with O &amp; M practices benchmarked to global standards. With four IG rated businesses, it is the only Infrastructure Investment Grade issuer in India.</p>
              </div>
              <p className="mb-3 pl-4 d-none">Adani owes its success and leadership position to its core philosophy of ‘Nation Building’ driven by ‘Growth with Goodness’ - a guiding principle for sustainable growth. Adani is committed to increase its ESG footprint by realigning its businesses with emphasis on climate protection and increasing community outreach through its CSR programme based on the principles of sustainability, diversity and shared values.
              </p>
              <p className="text-center loadMore">Read more</p>
              <p class="text-center arrow loadMore d-block">Read less <i class="fa fa-chevron-up"></i></p>
            </div>
          </section>
    </div>
      </>
  )
}

export default About