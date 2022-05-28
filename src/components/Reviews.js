import React from "react";
import Footer from './Footer'

const Reviews = () => {
  return (
    <div id='reviews-component'>
      <div className="Reviews-wrapper">
      <h1 className="Reviews-title">What customers say about us...</h1>
        <div className="Reviews-cell">
          <img src="https://s3-media0.fl.yelpcdn.com/photo/qF2psP9KgBNDW5WNXLkcag/120s.jpg" alt="https://media.istockphoto.com/vectors/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-vector-id1130884625?k=20&m=1130884625&s=612x612&w=0&h=OITK5Otm_lRj7Cx8mBhm7NtLTEHvp6v3XnZFLZmuB9o=" className="Reviews-image"></img>
          <div className="Reviews-text">
          <h1>Linda A.</h1>
          <p>
            So my husband and I just moved into town. We locked our shed keys inside 
            the shed. We called this company up around 5:10pm and the gentleman was 
            here by 5:25pm to help us. We were quoted $200 from another company who then 
            brought it down to $100 when we said we'd just go with someone local. The quote from this company 
            was well below $100 so we decided to go with BC Lock and Key. There was a small upcharge because it was after 
            business hours but it was very reasonable. He was a very kind man and welcomed us into town. He even gifted us two $5 
            Starbucks gift cards as a welcome to Boulder City gift. We were truly blown away by his kindness. He got us 
            into our shed within a minute. If we're ever locked out again, we will certainly be reaching out to this company. Thank you!!!
          </p>
          </div>
        </div>
        <div className="Reviews-cell">
          <img src="https://s3-media0.fl.yelpcdn.com/photo/w6_8WcdGttcoE3KJyc8ZTQ/120s.jpg" alt="https://media.istockphoto.com/vectors/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-vector-id1130884625?k=20&m=1130884625&s=612x612&w=0&h=OITK5Otm_lRj7Cx8mBhm7NtLTEHvp6v3XnZFLZmuB9o=" className="Reviews-image"></img>
            <div className="Reviews-text">
            <h1>Cathy D.</h1>
            <p>
            I called BC locksmith and was able to get our house rekeyed the very next day. The gentleman was very nice and was very speedy. 
            I'll definitely call him again!
            </p>
            </div>
          </div>
        <div className="Reviews-cell">
          <img src="https://s3-media0.fl.yelpcdn.com/photo/Bv_w5ncxXEnHu2Wmpgjyig/120s.jpg" alt="https://media.istockphoto.com/vectors/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-vector-id1130884625?k=20&m=1130884625&s=612x612&w=0&h=OITK5Otm_lRj7Cx8mBhm7NtLTEHvp6v3XnZFLZmuB9o=" className="Reviews-image"></img>
            <div className="Reviews-text">
            <h1>Brie P.</h1>
            <p>
            Hands down best customer service! I had locked my keys inside my car a friend suggested BC Lock & Key so I called
             and George came and met me in less than 15 minutes! He was very friendly and it ended up being very affordable. 
             Will definitely be doing business again in the future.
            </p>
            </div>
        </div>
        <div className="Reviews-cell">
        <img src="https://s3-media0.fl.yelpcdn.com/buphoto/VunliyjON_4NJ4YFvcIadQ/180s.jpg" alt="https://media.istockphoto.com/vectors/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-vector-id1130884625?k=20&m=1130884625&s=612x612&w=0&h=OITK5Otm_lRj7Cx8mBhm7NtLTEHvp6v3XnZFLZmuB9o=" className="Reviews-image"></img>
            <div className="Reviews-text">
            <h1>Sherill G.</h1>
            <p>
              Fantastic service and affordable too
              Thanks for changing our locks for us.
              So glad you moved to the center of town.
            </p>
            </div>
        </div>
        <div className="Reviews-cell">
        <img src="https://media.istockphoto.com/vectors/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-vector-id1130884625?k=20&m=1130884625&s=612x612&w=0&h=OITK5Otm_lRj7Cx8mBhm7NtLTEHvp6v3XnZFLZmuB9o=" alt="" className="Reviews-image"></img>
            <div className="Reviews-text">
            <h1>Ella W.</h1>
            <p>
            Boulder City Lock & Key is a very reliable. George the locksmith is always friendly and honest. 
            He quotes prices over the phone. His services calls are very reasonable for Boulder City, if you 
            call any other company not only are they not licensed to work in Boulder City they charge more than 
            double the price to come to Boulder City. George is quick and efficient at what he does and gets the 
            job done right the first time.
            </p>
            </div>
        </div>
        <div className="Reviews-cell">
        <img src="https://media.istockphoto.com/vectors/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-vector-id1130884625?k=20&m=1130884625&s=612x612&w=0&h=OITK5Otm_lRj7Cx8mBhm7NtLTEHvp6v3XnZFLZmuB9o=" alt="" className="Reviews-image"></img>
            <div className="Reviews-text">
            <h1>Sarita G.</h1>
            <p>
            We have used BC Lock and Key numerous times over the years. He has fixed our broken equipment, promptly,
             mannerly. and a fair price.
            </p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Reviews;